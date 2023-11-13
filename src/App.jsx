import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Hiro from "./pages/Hiro";
import Footer from "./Sections/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Hiro/>} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Features" element={<Features />} />
        </Routes>
        <Footer/>
    </BrowserRouter>

    </>

  );
}

export default App;
