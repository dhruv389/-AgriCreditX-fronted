import React, { useState } from 'react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { X, MapPin, Phone, User, Calendar, Droplet, Leaf, CreditCard, DollarSign } from 'lucide-react';
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
import { FileText } from 'lucide-react';
import mypdf from "../assets/Odoo x Charusat Hackathon 2025.pdf"
import { FaFilePdf } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const FarmerDetail = () => {
  const [selectedFarmer, setSelectedFarmer] = useState({
    name: "Rahul Patil",
    age: 45,
    contact: "+91 9876543210",
    district: "Nashik",
    landSize: "5.2 acres",
    creditScore: 76,
    loanAmount: "₹1,25,000",
    status: "Pending"
  });
  const [showPdf, setShowPdf] = useState(false);

  // Credit score breakdown data
  const creditScoreData = [
    { name: 'Past Crop Yield', value: 28, fullValue: 40 },
    { name: 'Financial History', value: 22, fullValue: 30 },
    { name: 'Weather Impact Resilience', value: 16, fullValue: 30 }
  ];

  // Colors for pie chart
  const COLORS = ['#4ade80', '#22c55e', '#16a34a'];

  // Monthly yield data for line chart
  const yieldData = [
    { month: 'Jan', yield: 42 },
    { month: 'Feb', yield: 47 },
    { month: 'Mar', yield: 53 },
    { month: 'Apr', yield: 58 },
    { month: 'May', yield: 62 },
    { month: 'Jun', yield: 65 },
    { month: 'Jul', yield: 68 },
    { month: 'Aug', yield: 69 },
    { month: 'Sep', yield: 65 },
    { month: 'Oct', yield: 60 },
    { month: 'Nov', yield: 55 },
    { month: 'Dec', yield: 48 }
  ];

  // Crop distribution data
  const cropData = [
    { name: 'Rice', value: 60 },
    { name: 'Wheat', value: 40 }
  ];

  // Function to get credit score color
  const getCreditScoreColor = (score) => {
    if (score >= 70) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gray-900 mt-[6rem] text-white p-8">

          {showPdf && (
                <div className="fixed inset-0 h-screen w-screen flex items-center justify-center z-50">
                  {/* Glass backdrop */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>
        
                  {/* Modal Content */}
                  <div className="relative w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-2xl border border-gray-700">
                    {/* Header */}
                    <div className="flex justify-between items-center p-5 border-b border-gray-700">
                      <h2 className="text-xl font-semibold text-white">Loan Application PDF</h2>
                      <button
                        onClick={() => setShowPdf(false)}
                        className="text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <FaTimes size={24} />
                      </button>
                    </div>
        
                    {/* PDF Content */}
                    <div className="w-full h-full">
                      <iframe
                        src={mypdf}
                        title="Loan Application PDF"
                        className="w-full h-full rounded-b-2xl"
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}

      {/* Glass effect container */}
      <div className="backdrop-blur-md bg-black/30 rounded-xl overflow-hidden border border-gray-800"
        style={{boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'}}>
        
        {/* Header */}
        <div className="p-6 flex justify-between items-center border-b border-gray-800 bg-black/40">
          <h1 className="text-3xl font-bold text-green-400">Farmer Details Dashboard</h1>
          <button className="p-2 hover:bg-gray-800/50 rounded-full transition-colors">
            <X className="text-gray-400 hover:text-white" />
          </button>
        </div>
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          
          {/* Left column - Farmer Information */}
          <div className="space-y-6">
            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-md border border-gray-700">
              <h2 className="text-xl font-medium text-green-400 mb-4 flex items-center">
                <User className="mr-2" size={20} /> Personal Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Name:</span>
                  <span className="font-medium">{selectedFarmer.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Age:</span>
                  <span className="font-medium">{selectedFarmer.age} years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Contact:</span>
                  <span className="font-medium flex items-center">
                    <Phone size={14} className="mr-1 text-green-400" /> {selectedFarmer.contact}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">District:</span>
                  <span className="font-medium flex items-center">
                    <MapPin size={14} className="mr-1 text-green-400" /> {selectedFarmer.district}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-md border border-gray-700">
              <h2 className="text-xl font-medium text-green-400 mb-4 flex items-center">
                 Farm Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Land Size:</span>
                  <span className="font-medium">{selectedFarmer.landSize}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Crop Type:</span>
                  <span className="font-medium">Rice, Wheat</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Soil Health:</span>
                  <span className="font-medium flex items-center">
                    <Droplet size={14} className="mr-1 text-green-400" /> Good
                  </span>
                </div>
              </div>
              
              {/* Crop Distribution Pie Chart */}
              <div className="mt-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Crop Distribution</h3>
                <ResponsiveContainer width="100%" height={180}>
                  <PieChart>
                    <Pie
                      data={cropData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={5}
                      dataKey="value"
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {cropData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* Middle column - Credit Score and Charts */}
          <div className="space-y-6 lg:col-span-2">
            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-md border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium text-green-400 flex items-center">
                  <CreditCard className="mr-2" size={20} /> Credit Score
                </h2>
                <div className="flex items-center">
                  <span className="mr-2">Overall:</span>
                  <span className={`text-2xl font-bold ${getCreditScoreColor(selectedFarmer.creditScore)}`}>
                    {selectedFarmer.creditScore}
                  </span>
                  <span className="text-gray-400 text-sm">/100</span>
                </div>
              </div>
              
              {/* Credit Score Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                <div className="space-y-4">
                  {creditScoreData.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.name}</span>
                        <span>{item.value}/{item.fullValue}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-green-400 h-2 rounded-full" 
                          style={{ width: `${(item.value / item.fullValue) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Credit Score Pie Chart */}
                <ResponsiveContainer width="100%" height={150}>
                  <PieChart>
                    <Pie
                      data={creditScoreData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      dataKey="value"
                    >
                      {creditScoreData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value, name) => [`${value}/${creditScoreData.find(item => item.name === name)?.fullValue}`, name]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Loan Information */}
            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-md border border-gray-700">
              <h2 className="text-xl font-medium text-green-400 mb-4 flex items-center">
                <DollarSign className="mr-2" size={20} /> Loan Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Loan Amount:</span>
                    <span className="font-medium">{selectedFarmer.loanAmount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Purpose:</span>
                    <span className="font-medium">Fertilizers, Equipment</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status:</span>
                    <span className={`font-medium ${
                      selectedFarmer.status === 'Approved' ? 'text-green-400' :
                      selectedFarmer.status === 'Pending' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {selectedFarmer.status}
                    </span>
                  </div>
                </div>
                
                {/* Loan Purpose Breakdown */}
                <div className="md:col-span-2">
                  <h3 className="text-md font-medium text-gray-300 mb-3">Loan Purpose Breakdown</h3>
                  <ResponsiveContainer width="100%" height={150}>
                    <BarChart data={[
                      { name: 'Fertilizer', value: 40000 },
                      { name: 'Seeds', value: 25000 },
                      { name: 'Equipment', value: 50000 },
                      { name: 'Labor', value: 10000 }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                      <XAxis dataKey="name" stroke="#888" />
                      <YAxis stroke="#888" />
                      <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
                      <Bar dataKey="value" fill="#4ade80" name="Amount (₹)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            {/* Historical Yield Chart */}
            <div className="bg-gray-800/30 rounded-lg p-6 backdrop-blur-md border border-gray-700">
              <h2 className="text-xl font-medium text-green-400 mb-4 flex items-center">
                <Leaf className="mr-2" size={20} /> Historical Crop Yield
              </h2>
              
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={yieldData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="month" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
                  <Line type="monotone" dataKey="yield" stroke="#4ade80" activeDot={{ r: 8 }} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        








                            <div className="relative p-20 rounded-xl backdrop-blur-lg bg-black/20 border border-gray-800/50 shadow-xl flex items-center justify-center">
        {/* Big centered button with glass effect */}
        <button 
          className="px-10 py-6 backdrop-blur-md bg-green-400/10 hover:bg-green-400/20 
                    transition-all duration-300 text-green-400 rounded-xl 
                    font-medium flex items-center gap-4 border border-green-400/30
                    shadow-lg hover:shadow-green-900/30 transform hover:scale-105
                    text-xl"
                    onClick={() => setShowPdf(true)}
        >
          <FileText size={32} className="text-green-300" />
          <span className="tracking-wide">View Farmer's Credit Report</span>
        </button>
        
        {/* Decorative elements */}
        <div className="absolute -z-10 w-24 h-24 rounded-full bg-green-500/20 blur-2xl top-12 left-12"></div>
        <div className="absolute -z-10 w-32 h-32 rounded-full bg-emerald-600/10 blur-3xl bottom-10 right-10"></div>
      </div>



        {/* Farm Location Map */}
        <div className="p-6 border-t border-gray-800">
          <h2 className="text-xl font-medium text-green-400 mb-4 flex items-center">
            <MapPin className="mr-2" size={20} /> Farm Location
          </h2>
          <div className="bg-gray-800/50 rounded-lg h-64 flex items-center justify-center border border-gray-700">
            <span className="text-gray-400">Map Placeholder (Google Maps API)</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="p-6 border-t border-gray-800 flex justify-end space-x-4 bg-black/40">
          {selectedFarmer.status === 'Pending' ? (
            <>
              <button className="px-6 py-3 bg-red-400/20 hover:bg-red-400/30 text-red-400 rounded-lg transition-colors border border-red-900 font-medium">
                Reject Loan
              </button>
              <button className="px-6 py-3 bg-green-400/20 hover:bg-green-400/30 text-green-400 rounded-lg transition-colors border border-green-900 font-medium">
                Approve Loan
              </button>
            </>
          ) : (
            <button className="px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FarmerDetail;