import React, { useState } from 'react';
import { 
  User, 
  Building, 
  CreditCard, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  Edit2, 
  Save,
  DollarSign,
  Shield,
  Briefcase,
  Clock
} from 'lucide-react';

const BankAdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Sarah Johnson",
    position: "Senior Account Manager",
    employeeId: "EMP-23456",
    email: "sarah.johnson@bankname.com",
    phone: "+1 (555) 123-4567",
    branch: "Downtown Financial Center",
    branchCode: "BRC-001",
    accessLevel: "Administrative",
    dateJoined: "March 15, 2020",
    address: "123 Financial District, New York, NY 10004",
    accountNumber: "******7890",
    routingNumber: "******1234",
    department: "Corporate Banking",
    workHours: "Mon-Fri: 9:00 AM - 5:00 PM"
  });

  const [formData, setFormData] = useState({...profileData});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    setProfileData({...formData});
    setIsEditing(false);
  };

  const toggleEdit = () => {
    if (isEditing) {
      // Discard changes
      setFormData({...profileData});
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex flex-col min-h-screen mt-[6rem] bg-black text-white">
      {/* Header */}
      
      
      {/* Main Content */}
      <main className="flex-grow p-6 md:p-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Profile Card */}
            <div className="lg:w-1/3 backdrop-blur-lg bg-black bg-opacity-30 border border-gray-800 rounded-xl p-6 h-fit">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-green-900 flex items-center justify-center mb-4">
                  <User size={64} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{profileData.name}</h2>
                <p className="text-green-400 mb-2">{profileData.position}</p>
                <div className="flex items-center mb-4">
                  <Shield size={16} className="mr-2 text-green-400" />
                  <p className="text-gray-300 text-sm">{profileData.accessLevel} Access</p>
                </div>
                <div className="bg-gray-900 bg-opacity-50 w-full rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Employee ID</span>
                    <span className="text-white font-medium">{profileData.employeeId}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Branch Code</span>
                    <span className="text-white font-medium">{profileData.branchCode}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Date Joined</span>
                    <span className="text-white font-medium">{profileData.dateJoined}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Details Section */}
            <div className="lg:w-2/3 backdrop-blur-lg bg-black bg-opacity-30 border border-gray-800 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Employee Details</h3>
                <button 
                  onClick={toggleEdit} 
                  className="flex items-center px-4 py-2 rounded-lg bg-green-700 hover:bg-green-600 transition-all text-white"
                >
                  {isEditing ? (
                    <>
                      <Save size={16} className="mr-2" />
                      <span onClick={handleSave}>Save</span>
                    </>
                  ) : (
                    <>
                      <Edit2 size={16} className="mr-2" />
                      <span>Edit</span>
                    </>
                  )}
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Personal Details */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-green-400 border-b border-gray-800 pb-2 mb-4">Contact Information</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="text-green-400 mr-3 mt-1" size={18} />
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm mb-1">Email Address</p>
                        {isEditing ? (
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-black bg-opacity-60 border border-gray-700 rounded px-3 py-2 text-white"
                          />
                        ) : (
                          <p className="text-white">{profileData.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="text-green-400 mr-3 mt-1" size={18} />
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm mb-1">Phone Number</p>
                        {isEditing ? (
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full bg-black bg-opacity-60 border border-gray-700 rounded px-3 py-2 text-white"
                          />
                        ) : (
                          <p className="text-white">{profileData.phone}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="text-green-400 mr-3 mt-1" size={18} />
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm mb-1">Address</p>
                        {isEditing ? (
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="w-full bg-black bg-opacity-60 border border-gray-700 rounded px-3 py-2 text-white"
                          />
                        ) : (
                          <p className="text-white">{profileData.address}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Employment Details */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-green-400 border-b border-gray-800 pb-2 mb-4">Employment Information</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Building className="text-green-400 mr-3 mt-1" size={18} />
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm mb-1">Branch</p>
                        {isEditing ? (
                          <input
                            type="text"
                            name="branch"
                            value={formData.branch}
                            onChange={handleInputChange}
                            className="w-full bg-black bg-opacity-60 border border-gray-700 rounded px-3 py-2 text-white"
                          />
                        ) : (
                          <p className="text-white">{profileData.branch}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Briefcase className="text-green-400 mr-3 mt-1" size={18} />
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm mb-1">Department</p>
                        {isEditing ? (
                          <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleInputChange}
                            className="w-full bg-black bg-opacity-60 border border-gray-700 rounded px-3 py-2 text-white"
                          />
                        ) : (
                          <p className="text-white">{profileData.department}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="text-green-400 mr-3 mt-1" size={18} />
                      <div className="flex-1">
                        <p className="text-gray-400 text-sm mb-1">Working Hours</p>
                        {isEditing ? (
                          <input
                            type="text"
                            name="workHours"
                            value={formData.workHours}
                            onChange={handleInputChange}
                            className="w-full bg-black bg-opacity-60 border border-gray-700 rounded px-3 py-2 text-white"
                          />
                        ) : (
                          <p className="text-white">{profileData.workHours}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bank Account Details */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-green-400 border-b border-gray-800 pb-2 mb-4">
                  Bank Account Details
                </h4>
                
                <div className="backdrop-blur-lg bg-gray-900 bg-opacity-40 rounded-xl p-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <CreditCard className="text-green-400 mr-3" size={18} />
                      <div>
                        <p className="text-gray-400 text-sm">Account Number</p>
                        {isEditing ? (
                          <input
                            type="text"
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleInputChange}
                            className="w-full bg-black bg-opacity-60 border border-gray-700 rounded px-3 py-2 text-white"
                          />
                        ) : (
                          <p className="text-white">{profileData.accountNumber}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <DollarSign className="text-green-400 mr-3" size={18} />
                      <div>
                        <p className="text-gray-400 text-sm">Routing Number</p>
                        {isEditing ? (
                          <input
                            type="text"
                            name="routingNumber"
                            value={formData.routingNumber}
                            onChange={handleInputChange}
                            className="w-full bg-black bg-opacity-60 border border-gray-700 rounded px-3 py-2 text-white"
                          />
                        ) : (
                          <p className="text-white">{profileData.routingNumber}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
    
    </div>
  );
};

export default BankAdminProfile;