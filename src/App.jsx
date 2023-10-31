import "./styles/App.css";
import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Work from "./pages/Work";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import Landing from "./pages/Landing";
import DetailPoster from "./DetailPoster";
import DetailMamba from "./DetailMamba";
import DetailFangZui from "./DetailFangZui";

function App() {
  const workRef = useRef(null);
  const scrollToWork = () => {
    // 使用scrollIntoView滚动到"work"区域
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 導覽列 */}
      <Nav scrollToWork={scrollToWork} />

      <Routes>
        <Route path="/" element={<AllComponents workRef={workRef} />} />
        <Route path="/detail/poster" element={<DetailPoster />} />
        <Route path="/detail/mamba" element={<DetailMamba />} />
        <Route path="/detail/fangzui" element={<DetailFangZui />} />
      </Routes>

      {/* 頁尾 */}
      <Footer />
    </>
  );
}

function AllComponents({ workRef }) {
  return (
    <div>
      <Landing />
      <Work workRef={workRef} />
    </div>
  );
}

export default App;
