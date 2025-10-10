import { Users, Hammer, Factory, Settings, HardHat, Package, Flame,  ChevronRight, MoreHorizontal } from 'lucide-react'; // Import all possible icons
import { Link } from 'react-router-dom'; 

// Map icon names to actual Lucide components
const IconMap = {
  Users: Users,
  Factory: Factory,
  Package: Package,
  Hammer: Hammer,
  Flame: Flame,
  Settings: Settings,
  HardHat: HardHat,
  MoreHorizontal: MoreHorizontal,
  // fallback mapping
  Default: Users,
  // Add other icons as needed
};

const ServiceCard = ({ icon, title, description, link }) => {
  const IconComponent = IconMap[icon];

  const content = (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
        {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">
        {description}
      </p>
      {link && (
        <button className="mt-4 text-blue-600 hover:text-blue-800 font-semibold flex items-center justify-center">
          Learn More <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      )}
    </div>
  );

  return link ? (
    <Link to={link} className="block no-underline">
      {content}
    </Link>
  ) : (
    content
  );
};

export default ServiceCard;