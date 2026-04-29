/**
 * @file main.jsx
 * @description 應用程式入口。掛載 React 根節點、HashRouter 路由容器，
 *              並全域初始化 AOS（Animate On Scroll）動畫函式庫。
 *              AOS 以 { once: true } 模式初始化，確保每個元素的進場動畫只觸發一次。
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ once: true });


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
