import argparse
import getpass
import os
import shutil
import subprocess
import sys
import tempfile

from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend

def derive_key(password, salt):
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,
        salt=salt,
        iterations=480000,
        backend=default_backend()
    )
    return kdf.derive(password.encode())

def encrypt_file(input_path, output_path, key, iv):
    cipher = Cipher(algorithms.AES(key), modes.CTR(iv), backend=default_backend())
    encryptor = cipher.encryptor()
    with open(output_path, 'wb') as outf:
        with open(input_path, 'rb') as inf:
            while True:
                chunk = inf.read(1024 * 1024)  # 1MB chunks
                if not chunk:
                    break
                ct = encryptor.update(chunk)
                outf.write(ct)
        outf.write(encryptor.finalize())

def decrypt_file(input_path, output_path, key, iv, skip_header=0):
    cipher = Cipher(algorithms.AES(key), modes.CTR(iv), backend=default_backend())
    decryptor = cipher.decryptor()
    with open(input_path, 'rb') as inf:
        if skip_header:
            inf.seek(skip_header)
        with open(output_path, 'wb') as outf:
            while True:
                chunk = inf.read(1024 * 1024)
                if not chunk:
                    break
                pt = decryptor.update(chunk)
                outf.write(pt)
            outf.write(decryptor.finalize())

def open_folder(path):
    if sys.platform == 'win32':
        os.startfile(path)
    elif sys.platform == 'darwin':
        subprocess.call(['open', path])
    else:
        subprocess.call(['xdg-open', path], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

def main():
    parser = argparse.ArgumentParser(description="Folder encryption script with compression.")
    subparsers = parser.add_subparsers(dest='mode', required=True)

    encrypt_parser = subparsers.add_parser('encrypt', help='Encrypt a folder')
    encrypt_parser.add_argument('folder', help='Folder to encrypt')
    encrypt_parser.add_argument('output', help='Output encrypted file')

    access_parser = subparsers.add_parser('access', help='Access an encrypted file')
    access_parser.add_argument('encfile', help='Encrypted file')

    args = parser.parse_args()

    if args.mode == 'encrypt':
        password = getpass.getpass("Enter password: ")
        confirm = getpass.getpass("Confirm password: ")
        if password != confirm:
            print("Passwords do not match.")
            return

        salt = os.urandom(16)
        iv = os.urandom(16)
        key = derive_key(password, salt)

        with tempfile.TemporaryDirectory() as tmpdir:
            arch_base = os.path.join(tmpdir, 'arch')
            shutil.make_archive(arch_base, 'gztar', args.folder)
            arch_path = arch_base + '.tar.gz'

            with open(args.output, 'wb') as outf:
                outf.write(salt)
                outf.write(iv)

            encrypt_file(arch_path, args.output, key, iv)  # Note: this appends to output

        print(f"Folder encrypted to {args.output}")

    elif args.mode == 'access':
        encfile = args.encfile
        password = getpass.getpass("Enter password: ")

        with open(encfile, 'rb') as f:
            salt = f.read(16)
            iv = f.read(16)

        key = derive_key(password, salt)

        with tempfile.TemporaryDirectory() as tmpdir:
            arch_path = os.path.join(tmpdir, 'arch.tar.gz')
            decrypt_file(encfile, arch_path, key, iv, skip_header=32)

            try:
                print("Options:")
                print("1. Permanently decrypt and extract")
                print("2. Temporarily access contents (re-encrypt on close)")
                choice = input("Choose 1 or 2: ").strip()

                if choice == '1':
                    target = input("Enter target folder to extract to: ").strip()
                    os.makedirs(target, exist_ok=True)
                    shutil.unpack_archive(arch_path, target, 'gztar')
                    print(f"Decrypted and extracted to {target}")
                    del_choice = input("Delete encrypted file? (y/n): ").strip().lower()
                    if del_choice == 'y':
                        os.remove(encfile)
                        print("Encrypted file deleted.")

                elif choice == '2':
                    content_dir = os.path.join(tmpdir, 'content')
                    os.makedirs(content_dir, exist_ok=True)
                    shutil.unpack_archive(arch_path, content_dir, 'gztar')

                    open_folder(content_dir)
                    print("Folder opened. View/edit as needed.")
                    print("Press Enter in this terminal when done to re-encrypt.")
                    input()

                    # Re-encrypt with new salt and IV
                    new_salt = os.urandom(16)
                    new_iv = os.urandom(16)
                    new_key = derive_key(password, new_salt)

                    new_arch_base = os.path.join(tmpdir, 'new_arch')
                    shutil.make_archive(new_arch_base, 'gztar', content_dir)
                    new_arch_path = new_arch_base + '.tar.gz'

                    temp_enc = encfile + '.tmp'
                    with open(temp_enc, 'wb') as outf:
                        outf.write(new_salt)
                        outf.write(new_iv)

                    encrypt_file(new_arch_path, temp_enc, new_key, new_iv)  # Appends to temp_enc

                    os.replace(temp_enc, encfile)
                    print("Contents re-encrypted.")

                else:
                    print("Invalid choice.")

            except Exception as e:
                print(f"Error occurred, possibly wrong password or corrupted file: {e}")

if __name__ == "__main__":
    main()