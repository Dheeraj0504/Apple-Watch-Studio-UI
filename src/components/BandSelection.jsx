import React from 'react';

const BandSelection = () => {
  const bands = [
    { name: 'Stainless Steel', image: '/images/image (3).png' },
    { name: 'Sport Loop', image: '/images/image (5).png' },
    { name: 'Sport Band', image: '/images/image (3).png' },
    { name: 'FineWoven', image: '/images/image (5).png' },
    { name: 'Braided Solo Loop', image: '/images/image (3).png' },
    { name: 'Solo Loop', image: '/images/image (5).png' },
    { name: 'Nike Sport Loop', image: '/images/image (3).png' },
    { name: 'Nike Sport Band', image: '/images/image (5).png' },
  ];

  return (
    <div className="band-selection flex items-center justify-between">
      {bands.map((band) => (
        <div key={band.name} className="mx-2">
          <span>{band.name}</span>
        </div>
      ))}
    </div>
  );
};

export default BandSelection;