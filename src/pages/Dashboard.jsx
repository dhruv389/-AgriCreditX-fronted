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
import {  FaFilePdf, FaDownload, FaPrint } from 'react-icons/fa';

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
  const [showPdfViewer, setShowPdfViewer] = useState(false);

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
          <div className="backdrop-blur-md bg-gray-900/30 rounded-xl overflow-hidden" style={{boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'}}>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="px-6 py-4 text-left">Farmer Name</th>
                  <th className="px-6 py-4 text-left">Credit Score</th>
                  <th className="px-6 py-4 text-left">Land Size</th>
                  <th className="px-6 py-4 text-left">Loan Amount</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentFarmers.map((farmer) => (
                  <tr key={farmer.id} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4">{farmer.name}</td>
                    <td className="px-6 py-4 flex items-center">
                      {getCreditScoreIcon(farmer.creditScore)}
                      <span className={`ml-2 ${getCreditScoreColor(farmer.creditScore)}`}>
                        {farmer.creditScore} ({farmer.creditRisk})
                      </span>
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
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleViewDetails(farmer)}
                          className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors text-green-400"
                        >
                          <FaEye />
                        </button>
                        
                        {farmer.status === 'Pending' && (
                          <>
                            <button className="p-2 bg-green-400/20 rounded-lg hover:bg-green-400/30 transition-colors text-green-400">
                              <FaCheck />
                            </button>
                            <button className="p-2 bg-red-400/20 rounded-lg hover:bg-red-400/30 transition-colors text-red-400">
                              <FaTimes />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="p-4 flex justify-between items-center">
                <div>
                  Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredFarmers.length)} of {filteredFarmers.length} entries
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
      
      {/* Farmer Detail Modal */}
      {showModal && selectedFarmer && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="backdrop-blur-md bg-gray-900/50 overflow-y-scroll h-[85vh] rounded-xl w-[90vw]" style={{boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'}}>
            <div className="p-6 flex justify-between items-start border-b border-gray-800">
              <h2 className="text-2xl font-bold text-green-400">Farmer Details</h2>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-gray-800/50 rounded-full transition-colors">
                <FaTimes className="text-gray-400 hover:text-white" />
              </button>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Farmer Information */}
              <div className="space-y-4 bg-gray-800/30 rounded-lg p-6">
                <h3 className="text-xl font-medium text-green-400">Personal Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Name:</span>
                    <span>{selectedFarmer.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Age:</span>
                    <span>45 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Contact:</span>
                    <span>+91 9876543210</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">District:</span>
                    <span>Nashik</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-green-400 mt-6">Farm Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Land Size:</span>
                    <span>{selectedFarmer.landSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Crop Type:</span>
                    <span>Rice, Wheat</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Soil Health:</span>
                    <span>Good</span>
                  </div>
                </div>
              </div>
              
              {/* Credit Score Breakdown */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-green-400">Credit Score</h3>
                <div className="p-4 bg-gray-800/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span>Overall Credit Score:</span>
                    <span className={`font-bold ${getCreditScoreColor(selectedFarmer.creditScore)}`}>
                      {selectedFarmer.creditScore}/100
                    </span>
                  </div>
                  
                  <div className="space-y-4 mt-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Past Crop Yield</span>
                        <span>28/40</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Financial History</span>
                        <span>22/30</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '73%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Weather Impact Resilience</span>
                        <span>16/30</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{ width: '53%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-green-400 mt-6">Loan Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Loan Amount:</span>
                    <span>{selectedFarmer.loanAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Purpose:</span>
                    <span>Crop fertilizers and equipment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className={`${
                      selectedFarmer.status === 'Approved' ? 'text-green-400' :
                      selectedFarmer.status === 'Pending' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {selectedFarmer.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            


            <div className="flex justify-between mt-4">
            <span className="text-gray-400">Documents:</span>
            <button 
              onClick={() => setShowPdfViewer(true)} 
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FaFilePdf /> View Loan Application PDF
            </button>
          </div>


          {showPdfViewer && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
    <div className="backdrop-blur-md bg-gray-900/50 overflow-y-scroll h-[90vh] rounded-xl w-full max-w-5xl" style={{boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'}}>
      <div className="p-4 flex justify-between items-center border-b border-gray-800">
        <h2 className="text-xl font-bold text-green-400">Loan Application Document</h2>
        <button onClick={() => setShowPdfViewer(false)} className="p-2 hover:bg-gray-800/50 rounded-full transition-colors">
          <FaTimes className="text-gray-400 hover:text-white" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="bg-white rounded-lg h-[75vh] w-full">
          {/* PDF Viewer component would be integrated here */}
          <iframe 
            src="./Odoo x Charusat Hackathon 2025.pdf"
            className="w-full h-full rounded-lg"
            title="Loan Application PDF"
          ></iframe>
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-800 flex justify-between">
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors flex items-center gap-2">
            <FaDownload /> Download
          </button>
          <button className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors flex items-center gap-2">
            <FaPrint /> Print
          </button>
        </div>
        <button onClick={() => setShowPdfViewer(false)} className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
          Close
        </button>
      </div>
    </div>
  </div>
)}




            {/* Farm Location Map Placeholder */}
            <div className="p-6 border-t border-gray-800">
              <h3 className="text-xl font-medium text-green-400 mb-4">Farm Location</h3>
              <div className="bg-gray-800/50 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-400">Map Placeholder (Google Maps API)</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="p-6 border-t border-gray-800 flex justify-end space-x-4">
              {selectedFarmer.status === 'Pending' ? (
                <>
                  <button className="px-6 py-3 bg-red-400/20 hover:bg-red-400/30 text-red-400 rounded-lg transition-colors">
                    Reject Loan
                  </button>
                  <button className="px-6 py-3 bg-green-400/20 hover:bg-green-400/30 text-green-400 rounded-lg transition-colors">
                    Approve Loan
                  </button>
                </>
              ) : (
                <button onClick={() => setShowModal(false)} className="px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;