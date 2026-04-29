/**
 * @file Loading.jsx
 * @description 全屏載入中狀態組件。在頁面正在 lazy load 時，
 *   展示居中的 LOGO 圖示作為載入指示器。
 */
import React from "react";
import logo from "../assets/shhh-logo.png"

/** Loading — 全屏載入中狀態，不接受任何 props。 */
const Loading = () => {
  return (
    <div className="loading-spinner" style={{ 
      width: "10%", 
      height: "10%",
      margin: "50vh auto"
      
      }}>
      {/* <Loader2 size={80} color="white" /> */}
    <img src={logo} alt="loading" />
    </div>
  );
};

export default Loading;
