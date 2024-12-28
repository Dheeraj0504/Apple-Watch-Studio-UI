import React, { useState, useEffect } from 'react';

const PriceDisplay = ({ selectedCase, selectedSize, selectedBand }) => {
  console.log(selectedCase, selectedSize, selectedBand);
  const [totalPrice, setTotalPrice] = useState(0);

  const basePrice = 399; // Base price for Apple Watch

  const casePrices = {
    Aluminum: 0,
    Titanium: 100,
    "Stainless Steel": 200,
  };

  const sizePrices = {
    42: 0, 
    46: 50, 
  };

  const bandPrices = {
    "Sport Band": 0,
    "Solo Loop": 30,
    "Braided Solo Loop": 50,
    "Leather Link": 80,
  };

  useEffect(() => {
    // Calculate the total price based on selected options
    const casePrice = casePrices[selectedCase.name] || casePrices["Aluminum"];
    const sizePrice = sizePrices[selectedSize] || sizePrices[42];
    const bandPrice = bandPrices[selectedBand.name] || bandPrices["Sport Band"];

    const calculatedPrice = basePrice + casePrice + sizePrice + bandPrice;
    setTotalPrice(calculatedPrice);
  }, [selectedCase, selectedSize, selectedBand]);
  
  return (
    <div className="price-display">
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default PriceDisplay;