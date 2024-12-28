import React from 'react';

const SizeSelection = ({ onSelect }) => {
  const sizes = ['42mm', '46mm'];

  return (
    <div className="size-selection flex items-center justify-between">
      {sizes.map((size) => (
        <button className="mx-1" key={size} onClick={() => onSelect(size)}>
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelection;
