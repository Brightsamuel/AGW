def encrypt_text(text, shift):
    """Encrypts text using the Caesar Cipher with a specified shift value.
    
    Args:
        text (str): The input text to encrypt.
        shift (int): The number of positions to shift each letter.
    
    Returns:
        str: The encrypted text, preserving case and non-alphabetic characters.
    """
    result = ""
    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            shifted = (ord(char) - base + shift) % 26 + base
            result += chr(shifted)
        else:
            result += char
    return result

def decrypt_text(text, shift):
    """Decrypts text using the Caesar Cipher with a specified shift value.
    
    Args:
        text (str): The input text to decrypt.
        shift (int): The number of positions to shift each letter backward.
    
    Returns:
        str: The decrypted text, preserving case and non-alphabetic characters.
    """
    return encrypt_text(text, -shift)

def main():
    """Main function to execute the Caesar Cipher program."""
    print("Caesar Cipher Encryption and Decryption")
    print("--------------------------------------")
    
    # Collect user input
    text = input("Enter text: ")
    try:
        shift = int(input("Enter shift value (1-25): "))
        if not 1 <= shift <= 25:
            print("Error: Shift value must be between 1 and 25.")
            return
    except ValueError:
        print("Error: Shift value must be an integer.")
        return
    
    # Select operation
    operation = input("Select operation (encrypt/decrypt): ").lower()
    
    # Process and display result
    if operation == "encrypt":
        result = encrypt_text(text, shift)
        print(f"Encrypted text: {result}")
    elif operation == "decrypt":
        result = decrypt_text(text, shift)
        print(f"Decrypted text: {result}")
    else:
        print("Error: Invalid operation. Choose 'encrypt' or 'decrypt'.")

if __name__ == "__main__":
    main()