import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col overflow-hidden scrollbar-none">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 md:p-10">
        <a href="/" className="flex items-center">
          <img
            className="w-20"
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844"
            alt="Apple Watch"
          />
        </a>
      </nav>
      {/* Main Section */}
      <div className="flex flex-col items-start md:items-start justify-center px-6 md:px-40 lg:px-80 mt-10 md:mt-20">
        {/* Content */}
        <div className="text-left md:text-left max-w-2xl">
          <h1 className="text-gray-800 text-lg font-medium mb-2">Apple Watch Studio</h1>
          <p className="text-gray-900 font-bold text-3xl md:text-5xl leading-tight mb-4">
            Choose a case.
          </p>
          <p className="text-gray-900 font-bold text-3xl md:text-5xl leading-tight mb-4">
            Pick a band.
          </p>
          <p className="text-gray-900 font-bold text-3xl md:text-5xl leading-tight mb-6">
            Create your own style.
          </p>
          <div className="flex items-start  md:justify-start">
            <Link
              to="/customize"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-6 py-3 rounded-[30px] shadow-md transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-2 flex justify-center w-full">
          <div
            className="bg-cover bg-center bg-no-repeat flex items-center justify-center w-80 md:w-[400px] lg:w-[600px] md:h-[400px] lg:h-[600px]"
            style={{
              backgroundImage:
                "url('https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM')",
            }}
          >
            <img
              className="w-80 md:w-[400px] lg:w-[600px] md:h-[400px] lg:h-[600px]"
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"
              alt="Apple Watch"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
