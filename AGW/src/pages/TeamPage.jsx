import { Briefcase, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tree, TreeNode } from 'react-organizational-chart'; // NEW

// --- Org chart data (matches mermaid flow) ---
const orgTree = {
  title: 'Board of Directors',
  color: 'green',
  children: [
    {
      title: 'General Manager',
      color: 'green',
      children: [
        { title: 'Chief Finance Officer', color: 'purple' },
        {
          title: 'Engineering Manager',
            color: 'blue',
            children: [
              {
                title: 'Electrical Engineer',
                color: 'indigo',
                children: [{ title: 'Electrical Technicians', color: 'red' }]
              },
              {
                title: 'Mechanical Engineer',
                color: 'indigo',
                children: [{ title: 'Mechanical Technicians', color: 'blue' }]
              },
              {
                title: 'Civil Engineer',
                color: 'indigo',
                children: [{ title: 'Civil Technicians', color: 'indigoDark' }]
              }
            ]
        },
        {
          title: 'Operations Manager',
          color: 'orange',
          children: [{ title: 'Office Attendant', color: 'orangeLight' }]
        },
        {
          title: 'HSE Manager',
          color: 'red',
          children: [
            { title: 'Safety Coordinator', color: 'red' },
            { title: 'First Aider', color: 'red' },
            { title: 'Projects’ Coordinator', color: 'redAlt' },
            { title: 'Store Keeper', color: 'redAlt' },
            { title: 'Sales Executives', color: 'redAlt' }
          ]
        }
      ]
    }
  ]
};

// Color utility (unchanged)
const colorClasses = {
  green: 'bg-green-500 border-green-700',
  purple: 'bg-purple-500 border-purple-700',
  blue: 'bg-blue-500 border-blue-700',
  indigo: 'bg-indigo-600 border-indigo-800',
  indigoDark: 'bg-indigo-700 border-indigo-900',
  orange: 'bg-orange-500 border-orange-700',
  orangeLight: 'bg-orange-400 border-orange-600',
  red: 'bg-red-500 border-red-700',
  redAlt: 'bg-red-400 border-red-600'
};

// REPLACED: previous OrgNode flex/connector logic with TreeNode-based recursion
const RenderNode = ({ node }) => {
  const hasChildren = node.children && node.children.length;
  return (
    <TreeNode
      label={
        <div
          className={`min-w-[150px] inline-block text-white text-center font-medium text-[11px] md:text-sm py-2.5 px-3 rounded-lg shadow-md border ${colorClasses[node.color] || 'bg-gray-500 border-gray-700'} hover:shadow-xl transition`}
        >
          {node.title}
        </div>
      }
    >
      {hasChildren &&
        node.children.map((child, idx) => <RenderNode key={node.title + idx} node={child} />)}
    </TreeNode>
  );
};

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Briefcase size={56} className="mx-auto mb-5" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Organization Structure</h1>
          <p className="text-lg md:text-2xl opacity-90 mb-6">
            Overview of Admirals Group Company's hierarchical structure.
          </p>
          <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto">
            Our organization is structured to ensure efficient operations in telecom infrastructure, fiber optics, energy solutions, and HSE compliance.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-20 px-4 bg-gray-100">
        <div className="max-w-[1500px] mx-auto">
          <div className="w-full mx-auto p-6 md:p-8 overflow-x-auto bg-white rounded-lg shadow-lg">
            {/* NEW org chart using react-organizational-chart */}
            <div className="org-chart min-w-fit flex justify-center">
              <Tree
                lineWidth="2px"
                lineColor="#4b5563"
                lineBorderRadius="6px"
                label={
                  <div
                    className={`min-w-[170px] inline-block text-white text-center font-semibold text-sm md:text-base py-3 px-4 rounded-lg shadow-md border ${colorClasses[orgTree.color]}`}
                  >
                    {orgTree.title}
                  </div>
                }
              >
                {orgTree.children.map((child, i) => (
                  <RenderNode key={'root-' + i} node={child} />
                ))}
              </Tree>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn More About Us</h2>
          <p className="text-lg opacity-80 mb-8">
            Explore how Admirals Group's structure supports our mission and services.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Meet the team <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

// UPDATED: remove old connector CSS; keep lightweight hover styling only
const styles = `
  .org-chart .react-organizational-chart-node {
    display: inline-block;
  }
  .org-chart .react-organizational-chart-node:hover > div > div {
    transform: translateY(-2px);
  }
  .org-chart div { transition: all .25s ease; }
`;

// REPLACED old stylesheet injection
const styleSheet = new CSSStyleSheet();
styleSheet.replaceSync(styles);
document.adoptedStyleSheets = [styleSheet];

export default TeamPage;