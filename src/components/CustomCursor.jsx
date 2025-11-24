import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/CustomCursor.css';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOverWork, setIsOverWork] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef(null);
  const location = useLocation();

  // 當路由改變時重置狀態
  useEffect(() => {
    setIsOverWork(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // 檢查是否在 Lightbox 內
      const isInLightbox = document.querySelector('.yarl__root');
      
      // 如果在 Lightbox 內，不顯示 more
      if (isInLightbox) {
        setIsOverWork(false);
        return;
      }

      // 檢查鼠標是否在 work 區塊上
      const workElement = document.querySelector('.work-bottom');
      if (workElement) {
        const rect = workElement.getBoundingClientRect();
        const isInWork = (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
        setIsOverWork(isInWork);
      } else {
        // 如果找不到 work-bottom 元素，設為 false
        setIsOverWork(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${isOverWork ? 'over-work' : ''} ${isClicking ? 'clicking' : ''} ${!isVisible ? 'hidden' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {isOverWork && <span className="cursor-text">more</span>}
      </div>
    </>
  );
}

export default CustomCursor;

