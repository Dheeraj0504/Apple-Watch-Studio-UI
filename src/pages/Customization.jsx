import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { GrApple } from "react-icons/gr";
import { BsSmartwatch } from "react-icons/bs";

import SizeSelection from '../components/SizeSelection';
import CaseSelection from '../components/CaseSelection';
import BandSelection from '../components/BandSelection';

const Customization = () => {
  const [showWatchSizeOptions, setShowWatchSizeOptions] = useState(false);
  const [selectedWatch, setSelectedWatch] = useState("Apple Watch Series 10");
  const [view, setView] = useState('front');

  const [activeSelection, setActiveSelection] = useState(null);

  const [selectedSize, setSelectedSize] = useState('46mm');
  console.log(selectedSize)

  const handleWatchSizeClick = () => {
    setShowWatchSizeOptions(!showWatchSizeOptions);
  };

  const handleWatchSelect = (watch) => {
    setSelectedWatch(watch);
  };

  const toggleView = () => {
    setView((prevView) => (prevView === 'front' ? 'side' : 'front'));
  };

  const handleSizeClick = () => {
    setActiveSelection(activeSelection === 'size' ? null : 'size');
  };

  const handleCaseClick = () => {
    setActiveSelection(activeSelection === 'case' ? null : 'case');
  };

  const handleBandClick = () => {
    setActiveSelection(activeSelection === 'band' ? null : 'band');
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const getImageUrl = () => {
    return view === 'front'
      ? "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"
      : "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=S01mb3pHMHA2MzFpM1RZVVFGV0dVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzRuUWsvSndwZkZQSHB4L3lvZ1B2V3ZCbWtNN0I0OEtHSU9TYzk0a1F1ZzFERlNXbWdiWWFMSHpqd3BBNUoxU1YzdG5TRTFsUDY4WC9xSGhtcnppYkpsMA";
  };  

  return (
    <div className={`min-h-screen ${showWatchSizeOptions ? 'bg-[#32323270]' : ''} flex flex-col overflow-hidden scrollbar-none`}>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 my-4">
        <a href="/" className="flex items-center gap-1">
          <GrApple size={25} color="#1d1d1f" />
          <h1 className="font-bold text-xl text-[#1d1d1f]">WATCH</h1>
        </a>
        <div className="relative pr-10">
          <button
            onClick={handleWatchSizeClick}
            className="flex items-center text-black text-lg px-4 py-2 gap-1 hover:text-gray-700"
          >
            Collections
            <IoIosArrowDown className="text-xl" />
          </button>
          {showWatchSizeOptions && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-[20px] shadow-xl w-80 z-10 px-8 py-5">
              <button
                onClick={() => handleWatchSelect("Apple Watch Series 10")}
                className={`block w-full text-17px px-4 py-3 ${selectedWatch === "Apple Watch Series 10" ? "text-[#86868B]" : "text-[#1D1D1F]"}`}
              >
                Apple Watch Series 10
              </button>
              <hr className="border-[#86868B]" />
              <button
                onClick={() => handleWatchSelect("Apple Watch Hermes Series 10")}
                className={`block w-full text-17px px-4 py-3 ${selectedWatch === "Apple Watch Hermes Series 10" ? "text-[#86868B]" : "text-[#1D1D1F]"}`}
              >
                Apple Watch Hermes Series 10
              </button>
              <hr className="border-[#86868B]" />
              <button
                onClick={() => handleWatchSelect("Apple Watch SE")}
                className={`block w-full text-17px px-4 py-3 ${selectedWatch === "Apple Watch SE" ? "text-[#86868B]" : "text-[#1D1D1F]"}`}
              >
                Apple Watch SE
              </button>
            </div>
          )}
        </div>
        <Link
          to="/customize"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm md:text-md px-4 py-2 rounded-full shadow-md transition-all duration-300"
        >
          Save
        </Link>
      </nav>
      {/* Main Section */}
      <div className="flex flex-col items-center justify-center my-4">
        {/* Image Section */}
        <div className="w-full flex justify-center mb-4">
          <div
            className="bg-cover bg-center bg-no-repeat flex items-center justify-center w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            style={{
              backgroundImage: `url('https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM')`,
            }}
          >
            <img
              className={`${showWatchSizeOptions ? 'bg-[#32323270]' : ''} w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96`}
              src={getImageUrl()}
              alt="Apple Watch"
            />
          </div>
        </div>
        {/* Watch Details Section */}
        <div className="flex flex-col items-center justify-center gap-1 mb-10">
          <button onClick={toggleView} className="underline text-blue-600 text-sm p-0 m-0">
            {view === 'front' ? 'Side View' : 'Front View'}
          </button>
          <p className="text-[#1D1D1F] p-0 m-0">{selectedWatch}</p>
          <p className="text-[#1D1D1F] font-bold p-0 m-0">46mm Jet Black Aluminum Case with Black Solo Loop</p>
          <p className="text-[#1D1D1F] p-0 m-0">From $429</p>
        </div>
        {/* Button Section */}
        <div className="flex items-center justify-center gap-10">
          <div className="bg-[#E8E8ED] px-6 py-2 rounded-[20px] transition-all gap-2 flex items-center">
            <BsSmartwatch />            
            {activeSelection === 'size' ? <SizeSelection onSelect={handleSizeSelect} /> :(
                <button onClick={handleSizeClick} className="font-[400] text-[17px] text-[#1D1D1F]">
                Size
              </button>
            )}
          </div>
          <div className="bg-[#E8E8ED] px-6 py-2 rounded-[20px] transition-all gap-2 flex items-center">
            <BsSmartwatch />
            {activeSelection === 'case' ? <CaseSelection /> : (
              <button onClick={handleCaseClick} className="font-[400] text-[17px] text-[#1D1D1F]">
              Case
            </button>
            )}            
          </div>
          <div className="bg-[#E8E8ED] px-6 py-2 rounded-[20px] transition-all gap-2 flex items-center">
            <BsSmartwatch />
            {activeSelection === 'band' ? <BandSelection /> : (
              <button onClick={handleBandClick} className="font-[400] text-[17px] text-[#1D1D1F]">
              Band
            </button>
            )}            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;
