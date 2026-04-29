/**
 * @file Gallery.jsx
 * @description 相簿頁面組件。使用 react-masonry-css 爆布流展示所有作品的圖片，
 *   點擊圖片刹要至對應作品詳情頁。路由狀態包含 from: 'gallery'，
 *   供詳情頁察測後退御回相簿。
 */
import React from 'react';
import Masonry from 'react-masonry-css';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_DATA } from "../../constants";
import '../styles/Gallery.css';

/**
 * Gallery — 相簿頁面，不接受任何 props。
 *
 * breakpointColumns 定義噪布流斷點：預設 4 欄，逐步縮至手機單欄。
 */
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