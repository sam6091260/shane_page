import "./styles/App.css";
import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Work from "./components/Work";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import DetailPoster from "./pages/DetailPoster";
import DetailMamba from "./pages/DetailMamba";
import DetailFangZui from "./pages/DetailFangZui";
import Products from "./pages/Products";

function App() {
  const workRef = useRef(null);
  const scrollToWork = () => {
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
        <Route path="/detail/:key" element={<Products />} />
        {/* <Route path="/detail/poster" element={<DetailPoster />} />
        <Route path="/detail/mamba" element={<DetailMamba />} />
        <Route path="/detail/fangzui" element={<DetailFangZui />} /> */}
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
