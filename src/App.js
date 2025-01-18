import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Services from "./pages/Services/Services";
import GoSolar from "./pages/GoSolar/GoSolar";
import FinancingSection from "./pages/Financing/FinancingSection";
import Faqs from "./pages/Faqs/Faqs";

function App() {
  return (
    <Router>

      <div className="App">

        <Header />
        <main id="page" role="main">
          <article className="sections" id="sections" >
            <Routes>
              <Route path="/" element={ <Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services-solar" element={<Services />} />
              <Route path="/gosolar" element={<GoSolar />} />
              <Route path="/financing" element={<FinancingSection />} />
              <Route path="/faq" element={<Faqs />} />
            </Routes>
          </article>

        </main>
        <Footer />
      </div>


    </Router>
  );
}

export default App;
