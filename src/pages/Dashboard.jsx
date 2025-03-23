import React, { useState } from 'react';
import { 
  FaHome, 
  FaUsers, 
  FaFileAlt, 
  FaChartPie, 
  FaChartBar, 
  FaCog, 
  FaSignOutAlt, 
  FaSearch, 
  FaCalendarAlt, 
  FaFilter, 
  FaChevronRight,
  FaStar,
  FaExclamationTriangle,
  FaExclamationCircle,
  FaEye,
  FaCheck,
  FaTimes,
  FaAngleDown,
  FaAngleUp
} from 'react-icons/fa';
import mypdf from "../assets/Odoo x Charusat Hackathon 2025.pdf"
import { Eye, X, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { FaFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom';


// Mock data for demonstration
const farmersData = [
  { id: 1, name: "Rahul Patel", creditScore: 82, creditRisk: "Low", landSize: "5 acres", loanAmount: "₹1,00,000", status: "Approved" },
  { id: 2, name: "Anil Sharma", creditScore: 45, creditRisk: "Medium", landSize: "3 acres", loanAmount: "₹50,000", status: "Pending" },
  { id: 3, name: "Sita Devi", creditScore: 32, creditRisk: "High", landSize: "7 acres", loanAmount: "₹75,000", status: "Rejected" },
  { id: 4, name: "Vikram Singh", creditScore: 76, creditRisk: "Medium", landSize: "4 acres", loanAmount: "₹80,000", status: "Approved" },
  { id: 5, name: "Meena Kumari", creditScore: 60, creditRisk: "Medium", landSize: "2 acres", loanAmount: "₹40,000", status: "Pending" },
  { id: 6, name: "Rajesh Kumar", creditScore: 25, creditRisk: "High", landSize: "6 acres", loanAmount: "₹90,000", status: "Rejected" },
  { id: 7, name: "Priya Verma", creditScore: 90, creditRisk: "Low", landSize: "8 acres", loanAmount: "₹1,20,000", status: "Approved" },
];

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('Pending');
  const [showModal, setShowModal] = useState(false);
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  

  const [expandedRow, setExpandedRow] = useState(null);
  

  
  // Calculate pagination variables
 
  // Function to toggle row expansion
  const toggleRowExpansion = (farmerId) => {
    if (expandedRow === farmerId) {
      setExpandedRow(null);
    } else {
      setExpandedRow(farmerId);
    }
  };
  






  // Filter farmers based on active tab
  const filteredFarmers = farmersData.filter(farmer => 
    farmer.status === activeTab
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFarmers = filteredFarmers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredFarmers.length / itemsPerPage);

  const handleViewDetails = (farmer) => {
    setSelectedFarmer(farmer);
    setShowModal(true);
  };

  // Credit score color indicator
  const getCreditScoreColor = (score) => {
    if (score >= 80) return "text-green-400";
    if (score >= 50) return "text-yellow-400";
    return "text-red-400";
  };

  const getCreditScoreIcon = (score) => {
    if (score >= 80) return <FaStar className="text-green-400" />;
    if (score >= 50) return <FaExclamationTriangle className="text-yellow-400" />;
    return <FaExclamationCircle className="text-red-400" />;
  };

  return (
    <div className="flex h-screen mt-[6rem] bg-black text-white overflow-hidden">
        
      {/* Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-20' : 'w-64'} h-full transition-all duration-300 ease-in-out bg-black border-r border-gray-800`}>
        <div className="backdrop-blur-md bg-gray-900/30 h-full px-4 py-8 flex flex-col border-r border-gray-800 backdrop-filter rounded-r-xl" style={{boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'}}>
          {/* Logo */}
          <div className="flex items-center mb-10">
            <FaChartPie className="text-green-400 text-2xl" />
            {!sidebarCollapsed && <span className="ml-3 text-xl font-bold text-green-400">AgriBank</span>}
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                  <FaHome className="text-green-400 text-xl" />
                  {!sidebarCollapsed && <span className="ml-3">Dashboard</span>}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-3 rounded-lg bg-gray-800/50 text-green-400 transition-colors">
                  <FaUsers className="text-green-400 text-xl" />
                  {!sidebarCollapsed && <span className="ml-3">Farmers</span>}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                  <FaFileAlt className="text-green-400 text-xl" />
                  {!sidebarCollapsed && <span className="ml-3">Loan Applications</span>}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                  <FaChartPie className="text-green-400 text-xl" />
                  {!sidebarCollapsed && <span className="ml-3">Credit Evaluation</span>}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                  <FaChartBar className="text-green-400 text-xl" />
                  {!sidebarCollapsed && <span className="ml-3">Reports & Analytics</span>}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                  <FaCog className="text-green-400 text-xl" />
                  {!sidebarCollapsed && <span className="ml-3">Settings</span>}
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Logout */}
          <div className="mt-auto">
            <a href="#" className="flex items-center p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
              <FaSignOutAlt className="text-green-400 text-xl" />
              {!sidebarCollapsed && <span className="ml-3">Logout</span>}
            </a>
          </div>
          
          {/* Collapse Button */}
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="mt-5 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
            <FaChevronRight className={`text-green-400 transform transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Top Header */}
          <div className="backdrop-blur-md bg-gray-900/30 p-6 rounded-xl mb-6" style={{boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'}}>
            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
              <h1 className="text-2xl font-bold text-green-400">Farmers List</h1>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search farmers..."
                    className="pl-10 pr-4 py-2 rounded-lg bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
                  />
                  <FaSearch className="absolute left-3 top-3 text-green-400" />
                </div>
                
                {/* Filter Button */}
                <button className="flex items-center px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                  <FaFilter className="text-green-400 mr-2" />
                  <span>Filter</span>
                </button>
                
                {/* Date Range */}
                <button className="flex items-center px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                  <FaCalendarAlt className="text-green-400 mr-2" />
                  <span>Date Range</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Status Tabs */}
          <div className="backdrop-blur-md bg-gray-900/30 p-1 rounded-xl mb-6 inline-flex" style={{boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'}}>
            <button
              onClick={() => setActiveTab('Pending')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'Pending' ? 'bg-green-400/20 text-green-400' : 'hover:bg-gray-800/50'}`}
            >
              Pending Farmers
            </button>
            <button
              onClick={() => setActiveTab('Approved')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'Approved' ? 'bg-green-400/20 text-green-400' : 'hover:bg-gray-800/50'}`}
            >
              Approved Farmers
            </button>
            <button
              onClick={() => setActiveTab('Rejected')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${activeTab === 'Rejected' ? 'bg-green-400/20 text-green-400' : 'hover:bg-gray-800/50'}`}
            >
              Rejected Farmers
            </button>
          </div>
          
          {/* Farmers Table */}
          <div className="backdrop-blur-md bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800/50" style={{boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'}}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800 bg-black/20">
            <th className="px-6 py-4 text-left text-green-400">Farmer Name</th>
            <th className="px-6 py-4 text-left text-green-400">Credit Score</th>
            <th className="px-6 py-4 text-left text-green-400">Land Size</th>
            <th className="px-6 py-4 text-left text-green-400">Loan Amount</th>
            <th className="px-6 py-4 text-left text-green-400">Status</th>
            <th className="px-6 py-4 text-left text-green-400">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentFarmers.map((farmer) => (
            <React.Fragment key={farmer.id}>
              <tr 
  className={`border-b ${expandedRow === farmer.id ? 'border-green-900/50 bg-green-900/10' : 'border-gray-800'} hover:bg-gray-800/30 transition-colors cursor-pointer`}
  onClick={() => toggleRowExpansion(farmer.id)}
>
  <td className="px-6 py-4">
    <div className="flex items-center">
      {expandedRow === farmer.id ? 
        <ChevronUp className="w-4 h-4 mr-2 text-green-400" /> : 
        <ChevronDown className="w-4 h-4 mr-2 text-gray-400" />
      }
      {farmer.name}
    </div>
  </td>
  
  <td className="px-6 py-4">
    <div className="flex items-center">
      {getCreditScoreIcon(farmer.creditScore)}
      <span className={`ml-2 ${getCreditScoreColor(farmer.creditScore)}`}>
        {farmer.creditScore} ({farmer.creditRisk})
      </span>
    </div>
  </td>
  <td className="px-6 py-4">{farmer.landSize}</td>
  <td className="px-6 py-4">{farmer.loanAmount}</td>
  <td className="px-6 py-4">
    <span className={`px-3 py-1 rounded-full text-sm ${
      farmer.status === 'Approved' ? 'bg-green-400/20 text-green-400' :
      farmer.status === 'Pending' ? 'bg-yellow-400/20 text-yellow-400' :
      'bg-red-400/20 text-red-400'
    }`}>
      {farmer.status}
    </span>
  </td>
  <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
    <div className="flex space-x-2">
      <Link 
        to="/farmerdetail"
        className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors text-green-400"
      >
        <Eye size={16} />
      </Link>
      
      {farmer.status === 'Pending' && (
        <button className="p-2 bg-red-400/20 rounded-lg hover:bg-red-400/30 transition-colors text-red-400">
          <X size={16} />
        </button>
      )}
    </div>
  </td>
</tr>
              
              {/* Expandable content - Year Buttons */}
              {expandedRow === farmer.id && (
                <tr className="bg-gray-800/20 border-b border-gray-800">
                  <td colSpan="6" className="px-6 py-4">
                    <div className="animate-slideDown">
                      <div className="flex flex-col space-y-3">
                        <div className="flex items-center text-green-400 mb-1">
                          <Calendar size={16} className="mr-2" />
                          <span className="font-medium">Select Historical Data Year:</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {[2025, 2024, 2023, 2022, 2021, 2020].map((year) => (
                            <Link
                              key={year}
                               to="/farmerdetail"
                              className="px-4 flex justify-around items-center py-2 bg-gray-800/70 hover:bg-green-900/30 text-white border border-gray-700 hover:border-green-800 rounded-lg backdrop-blur-sm transition-all hover:text-green-400"
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log(`Selected ${year} for farmer ${farmer.name}`);
                              }}
                            >
                              
                              <p>{year}</p>

                              <Link 
       
        className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors text-green-400"
      >
        <Eye size={16} />
      </Link>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="p-4 flex justify-between items-center border-t border-gray-800">
          <div className="text-gray-400">
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, farmers.length)} of {farmers.length} entries
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg ${currentPage === 1 ? 'bg-gray-800/30 cursor-not-allowed' : 'bg-gray-800/50 hover:bg-gray-700/50'} transition-colors`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg ${currentPage === page ? 'bg-green-400/20 text-green-400' : 'bg-gray-800/50 hover:bg-gray-700/50'} transition-colors`}
              >
                {page}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg ${currentPage === totalPages ? 'bg-gray-800/30 cursor-not-allowed' : 'bg-gray-800/50 hover:bg-gray-700/50'} transition-colors`}
            >
              Next
            </button>
          </div>
        </div>
      )}
      
     
    </div>

        </div>
      </div>
      
     
    </div>
  );
};

export default Dashboard;