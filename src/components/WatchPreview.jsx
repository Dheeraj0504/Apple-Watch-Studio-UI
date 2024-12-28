import React from 'react';

const WatchPreview = ({ selectedCase, selectedSize, selectedBand }) => {
  // Define image paths for different case and band combinations
  // console.log(selectedCase, selectedSize, selectedBand);
  const caseImages = {
    Aluminum: '/images/png-clipart-iphone-6s-apple-watch-series-2-ipad-pro-apple-apple-watch-aluminum-metal-case-watch-accessory-mobile-phone-thumbnail.png',
    Titanium: '/images/MC7J4ref_FV99_VW_34FR+watch-case-46-titanium-natural-cell-s10_VW_34FR+watch-face-46-titanium-natural-s10_VW_34FR.png',
    "Stainless Steel": '/images/png-transparent-apple-watch-series-2-stainless-steel-apple-watch-watch-accessory-accessories-steel.png',
  };

  const bandImages = {
    "Solo Loop": '/images/MY7N3ref.jpg',
    "Braided Solo Loop": '/images/MYGD3ref.jpg',
    "Sport Band": '/images/png-clipart-apple-watch-series-2-apple-watch-series-3-nike-sports-watch-band-electronics-sport-thumbnail.png',
    "Leather Link": '/images/Mustard-Poppy-Leather-Link-Apple-WatchBand-vw.avif',
  };

  // Determine the image to display based on the selected options
  const watchCaseImage = caseImages[selectedCase.name] || caseImages['Aluminum']; // Default to Aluminum case
  const watchBandImage = bandImages[selectedBand.name] || bandImages['Sport Band']; // Default to Sport Band
  const watchSize = selectedSize === 46 ? '46mm' : '42mm'; // Assuming the size can be 42mm or 46mm

  return (
    <div className="watch-preview-container">
      <h2>Watch Preview ({watchSize})</h2>
      <div className="watch-preview">
        <img
          src={watchCaseImage}
          alt={`Apple Watch ${watchSize} ${selectedCase.name}`}
          className="watch-case"
        />
        <img
          src={watchBandImage}
          alt={`Apple Watch ${watchSize} ${selectedBand.name}`}
          className="watch-band"
        />
      </div>
      <p className="selected-options">
        {selectedCase.name} Case | {watchSize} | {selectedBand.name} Band
      </p>
    </div>
  );
};

export default WatchPreview;