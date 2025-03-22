import React from 'react';
import { FaLeaf, FaChartLine, FaHandshake, FaShieldAlt, FaDatabase, FaMapMarkedAlt, FaCloudSunRain, FaSeedling, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const Home = () => {
  

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section with Parallax Effect */}
      <header className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* <video 
            className="w-full h-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/api/placeholder/720/480" type="video/mp4" />
          </video> */}

          <img src="https://img.freepik.com/free-photo/african-man-harvesting-vegetables_23-2151441210.jpg?t=st=1742661263~exp=1742664863~hmac=f3cc5cbadb629b52cc07f8d895e201b851ecce92f6b403d94ebeed897ecc8ca8&w=1380"  className="w-full h-full object-cover opacity-40" alt="" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
        
          
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Redefining <span className="text-green-400">Credit Access</span> For Farmers
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Our AI-powered platform evaluates agricultural potential using GIS data, weather patterns, and soil health to create fair, accurate credit scores for farmers.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#demo" className="px-8 py-3 bg-green-500 text-black font-medium rounded-full hover:bg-green-400 transition-colors text-center">
                Get Started
              </a>
              <a href="#how-it-works" className="px-8 py-3 backdrop-blur-md bg-white/10 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                Learn More <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Powerful <span className="text-green-400">Features</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with agricultural expertise to provide fair credit evaluation for farmers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all hover:transform hover:scale-105">
              <div className="w-14 h-14 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
                <FaMapMarkedAlt className="text-green-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">GIS Data Integration</h3>
              <p className="mt-2 text-gray-400">
                Leverages geographical information systems to analyze land quality, location advantages, and agricultural potential.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all hover:transform hover:scale-105">
              <div className="w-14 h-14 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
                <FaCloudSunRain className="text-green-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">Weather Prediction</h3>
              <p className="mt-2 text-gray-400">
                Incorporates historical weather data and forecasts to assess climate-related risks and opportunities.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all hover:transform hover:scale-105">
              <div className="w-14 h-14 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
                <FaSeedling className="text-green-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">Soil Health Analysis</h3>
              <p className="mt-2 text-gray-400">
                Evaluates soil quality metrics to determine land productivity and sustainable farming potential.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all hover:transform hover:scale-105">
              <div className="w-14 h-14 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
                <FaChartLine className="text-green-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">AI-Powered Scoring</h3>
              <p className="mt-2 text-gray-400">
                Our machine learning algorithms analyze multiple data points to create comprehensive risk assessments.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all hover:transform hover:scale-105">
              <div className="w-14 h-14 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
                <FaDatabase className="text-green-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">Crop Yield Prediction</h3>
              <p className="mt-2 text-gray-400">
                Predicts future crop yields based on historical data, crop selection, and environmental factors.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all hover:transform hover:scale-105">
              <div className="w-14 h-14 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
                <FaShieldAlt className="text-green-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold">Regulatory Compliance</h3>
              <p className="mt-2 text-gray-400">
                Built with privacy and regulatory requirements in mind, ensuring data security and legal compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              How <span className="text-green-400">It Works</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Our platform seamlessly connects farmers with financial institutions through a data-driven approach.
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-green-400/30 hidden md:block"></div>
            
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
                  <h3 className="text-2xl font-semibold mb-4">Data Collection</h3>
                  <p className="text-gray-400">
                    Our system collects geographic information, soil samples, historical crop data, and weather patterns relevant to the farmer's location.
                  </p>
                </div>
                <div className="md:w-14 relative">
                  <div className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center z-10 relative">
                    <span className="text-black font-bold">1</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 text-center md:text-left">
                  <div className="backdrop-blur-md bg-white/5  rounded-xl p-6 hidden md:block">
                    <img src="https://img.freepik.com/free-psd/3d-pie-chart-with-information_23-2148938937.jpg?t=st=1742645583~exp=1742649183~hmac=c1bfeea2ed71092a158a35995164ed6b13310d510176f5a9a1620eccca057a8a&w=826" alt="Data Collection" className="rounded-lg w-[60%] h-[60%]" />
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right order-2 md:order-1">
                  <div className="backdrop-blur-md bg-white/5  rounded-xl p-6 hidden md:block">
                    <img src="https://img.freepik.com/free-photo/ai-chip-artificial-intelligence-future-technology-innovation_53876-129780.jpg?uid=R156890440&ga=GA1.1.2129920821.1675355759&semt=ais_hybrid" alt="AI Analysis" className="rounded-lg w-[60%] h-[60%]" />
                  </div>
                </div>
                <div className="md:w-14 relative order-1 md:order-2">
                  <div className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center z-10 relative">
                    <span className="text-black font-bold">2</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 text-center md:text-left order-3">
                  <h3 className="text-2xl font-semibold mb-4">AI Analysis</h3>
                  <p className="text-gray-400">
                    Our advanced algorithms analyze multiple data points to create a comprehensive risk assessment and creditworthiness profile.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
                  <h3 className="text-2xl font-semibold mb-4">Credit Score Generation</h3>
                  <p className="text-gray-400">
                    A transparent, agriculture-specific credit score is generated with detailed insights into strengths and risk factors.
                  </p>
                </div>
                <div className="md:w-14 relative">
                  <div className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center z-10 relative">
                    <span className="text-black font-bold">3</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 text-center md:text-left">
                  <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 hidden md:block">
                    <img src="https://img.freepik.com/free-photo/credit-score-financial-banking-economy-concept_53876-132302.jpg?t=st=1742645853~exp=1742649453~hmac=9384b680775407930e1a810be1d731973c5ab425f5c1d23fd55fe57aebf3c1e8&w=996" alt="Credit Score Generation" className="rounded-lg w-[60%] h-[60%]" />
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right order-2 md:order-1">
                  <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 hidden md:block">
                    <img src="https://img.freepik.com/free-photo/young-farmer-taking-care-his-business_329181-15993.jpg?t=st=1742645920~exp=1742649520~hmac=80bfae11126d8ece0553408a0f14652118f1d2062a48f4fa2509d6676bcc91ca&w=1380" alt="Financial Institution Review" className="rounded-lg w-[60%] h-[60%]" />
                  </div>
                </div>
                <div className="md:w-14 relative order-1 md:order-2">
                  <div className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center z-10 relative">
                    <span className="text-black font-bold">4</span>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 text-center md:text-left order-3">
                  <h3 className="text-2xl font-semibold mb-4">Financial Institution Review</h3>
                  <p className="text-gray-400">
                    Banks and NBFCs receive detailed credit reports with customized recommendations for loan terms based on the farmer's profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Success <span className="text-green-400">Stories</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              See how our platform is transforming agricultural financing across India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-8 border border-green-400/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden mr-4">
                  <img src="https://img.freepik.com/free-photo/confident-young-man-walking-european-city-street_158595-4692.jpg?t=st=1742645967~exp=1742649567~hmac=3fa4a0280bfd6724e233e6d722354d37120e20509ccacc469e0ab8ea747a7239&w=740" alt="Farmer portrait" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">Rajesh Patel</h4>
                  <p className="text-green-400 text-sm">Rice Farmer, Gujarat</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Despite having no formal credit history, FarmCredit helped me secure a loan for irrigation equipment by showcasing my land's potential and historical crop yields."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-8 border border-green-400/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img src="https://img.freepik.com/free-photo/confident-cheerful-young-businesswoman_1262-20881.jpg?t=st=1742646047~exp=1742649647~hmac=d754e0d4ab46ad962f544e40805ab35e926c8f40f92f6183e3a7ee10e5414926&w=740" alt="Bank manager portrait" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">Priya Sharma</h4>
                  <p className="text-green-400 text-sm">Rural Bank Manager, Maharashtra</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The detailed risk assessments have allowed our bank to expand our agricultural loan portfolio by 40% while maintaining the same risk profile."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-8 border border-green-400/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden mr-4">
                  <img src="https://img.freepik.com/free-photo/cheerful-indian-man_1098-18167.jpg?t=st=1742646021~exp=1742649621~hmac=e61547ce28b6e891e20589316198c28aa8d16bceb626b90c2ad70235de6b580b&w=740" alt="Cooperative leader portrait" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">Arun Verma</h4>
                  <p className="text-green-400 text-sm">Farmers' Cooperative, Punjab</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Our cooperative has seen loan approval rates increase by 65% since adopting FarmCredit, giving our members access to fair financing options."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Trusted <span className="text-green-400">Partners</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We collaborate with leading financial institutions and agricultural organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["https://lakhpaticdn.lokos.in/lakhpati/wp-content/uploads/2024/07/NABARD_LOGO2.jpg", 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="backdrop-blur-md bg-white/5 rounded-xl p-6 flex items-center justify-center h-32">
                <img src="/api/placeholder/160/80" alt={`Partner logo ${i}`} className="max-h-12 opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request */}
      <section id="demo" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="backdrop-blur-md bg-green-400/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border border-green-400/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Agricultural Financing?</h2>
                <p className="text-gray-300 mb-6">
                  Schedule a personalized demo to see how our platform can work for your organization.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Personalized platform tour', 'Custom implementation plan', 'ROI analysis', 'Integration options'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="backdrop-blur-md bg-black/30 rounded-xl p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input type="text" className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Organization</label>
                    <input type="text" className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input type="tel" className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" />
                  </div>
                  
                  <button type="submit" className="w-full py-3 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors mt-4">
                    Request Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Home;
