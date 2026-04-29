/**
 * @file CustomCursor.jsx
 * @description 自訂滑鼠游標組件。將系統預設滑標替換為品牌指示式游標。
 *   特殊行為：
 *   - 滑鼠拖曳時顯示点擊動畫
 *   - 尼輪背景至首頁的作品區塊（.work-bottom）時，
 *     游標擴大並顯示 "more" 文字
 *   - 路由切換時重置狀態並清除快取 DOM ref
 */
import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/CustomCursor.css';

/**
 * CustomCursor — 自訂滑鼠游標
 *
 * 使用 workElementRef 快取 .work-bottom 的 DOM 元素，
 * 避免在每次 mousemove 事件中反覆呼叫 querySelector（效能優化）。
 * Lightbox 打開時不顯示 "more" 標記。
 */
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOverWork, setIsOverWork] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef(null);
  const workElementRef = useRef(null); // 快取 .work-bottom 元素
  const location = useLocation();

  // 當路由改變時重置狀態，並清除快取的 DOM ref
  useEffect(() => {
    setIsOverWork(false);
    workElementRef.current = null; // 路由切換後重置快取
  }, [location.pathname]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // 檢查是否在 Lightbox 內（Lightbox 出現頻率低，保留即時查詢）
      if (document.querySelector('.yarl__root')) {
        setIsOverWork(false);
        return;
      }

      // 使用快取的 ref — 避免每次 mousemove 都呼叫 querySelector
      if (!workElementRef.current) {
        workElementRef.current = document.querySelector('.work-bottom');
      }

      const workElement = workElementRef.current;
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

