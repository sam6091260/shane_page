import "./styles/App.css";
import React, { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Work from "./components/Work";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Products from "./pages/Products";
import Form from "./components/Form";
import ToastProvider from "./components/ToasterProvider";

function App() {
  const workRef = useRef(null);
  const formRef = useRef(null);
  const scrollToWork = () => {
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 導覽列 */}
      <Nav scrollToWork={scrollToWork} scrollToForm={scrollToForm} />

      <Routes>
        <Route
          path="/"
          element={<AllComponents workRef={workRef} formRef={formRef} />}
        />
        <Route path="/detail/:key" element={<Products />} />
      </Routes>
      {/* 頁尾 */}
      <Footer />
    </>
  );
}

function AllComponents({ workRef, formRef }) {
  return (
    <div>
      <ToastProvider />
      <Landing />
      <Work workRef={workRef} />
      <Form formRef={formRef} />
    </div>
  );
}

export default App;
