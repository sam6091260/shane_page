import React from 'react';
import Masonry from 'react-masonry-css';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_DATA } from "../../constans";
import '../styles/Gallery.css';

const Gallery = () => {
  const navigate = useNavigate();
  
  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  const handleImageClick = (productKey) => {
    navigate(`/detail/${productKey}`, { state: { from: 'gallery' } });
  };


  return (
    <div className="gallery-container">
      <h1>" Work Gallery "</h1>
      <Masonry
        breakpointCols={breakpointColumns}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {PRODUCT_DATA.map((product) => (
          product.images.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => handleImageClick(product.key)}
            >
              <img src={image.src} alt={product.title} />
              <h3>{product.title}</h3>
            </div>
          ))
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery; 