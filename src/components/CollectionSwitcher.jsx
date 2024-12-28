import { useState } from 'react';

const CollectionSwitcher = ({ setCollection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const collections = [
    { name: 'Series 10', image: '/images/MXLJ3ref_VW_34FR+watch-case-42-aluminum-jetblack-nc-s10_VW_34FR+watch-face-42-aluminum-jetblack-s10_VW_34FR (1).jpg' },
    { name: 'Hermès', image: '/images/MP000000016577285_1316Wx1468H_202406301656021.avif' },
    { name: 'SE', image: '/images/MYJ83_VW_34FR+watch-case-40-aluminum-silver-nc-se_VW_34FR+watch-face-40-aluminum-silver-se_VW_34FR.jpg' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCollectionChange = (collection) => {
    setCollection(collection);
    setIsOpen(false);
  };

  return (
    <div className="collection-switcher">
      <button onClick={toggleDropdown} className="dropdown-button">
        Switch Collection
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {collections.map((collection) => (
            <div
              key={collection.name}
              className="dropdown-item"
              onClick={() => handleCollectionChange(collection)}
            >
              <img src={collection.image} alt={collection.name} />
              <span>{collection.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionSwitcher;