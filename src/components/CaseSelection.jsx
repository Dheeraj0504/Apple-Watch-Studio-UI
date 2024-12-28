import React from 'react';

const CaseSelection = () => {
  const cases = [
    { name: 'Aluminum', image: '/images/image (2).png' },
    { name: 'Titanium', image: '/images/image (4).png' }
  ];

  return (
    <div className="case-selection flex items-center justify-between">
      {cases.map((caseItem) => (
        <div key={caseItem.name} className="mx-2">          
          <span>{caseItem.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CaseSelection;