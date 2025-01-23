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
import Careers from "./pages/Careers/Careers";
import SolarNews from "./pages/SolarNews/SolarNews";
import ContactUs from "./pages/ContactUs/ContactUs";
import Estimated from "./pages/Estimated/Estimated";
import EstimatedAddress from "./pages/Estimated/EstimatedAddress";
import EstimatedAverage from "./pages/Estimated/EstimatedAverage";
import EstimatedORent from "./pages/Estimated/EstimatedORent";
import EstimatedAppartment from "./pages/Estimated/EstimatedAppartment";
import EstimatedRevolutation from "./pages/Estimated/EstimatedRevolutation";
import FinalResult from "./pages/FinalResult/FinalResult"


function App() {
  return (
    <Router>
      <div className="App">
        {/* Conditional rendering of Header and Footer */}
        <Routes>
          {/* Routes that include Header and Footer */}
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <main id="page" role="main">
                  <article className="sections" id="sections">
                    <Home />
                  </article>
                </main>
                <Footer />
              </>
            } 
          />
          <Route 
            path="/about-us" 
            element={
              <>
                <Header />
                <main id="page" role="main">
                  <article className="sections" id="sections">
                    <AboutUs />
                  </article>
                </main>
                <Footer />
              </>
            } 
          />
          <Route 
            path="/services" 
            element={
              <>
                <Header />
                <main id="page" role="main">
                  <article className="sections" id="sections">
                    <Services />
                  </article>
                </main>
                <Footer />
              </>
            } 
          />
          <Route 
            path="/gosolar" 
            element={
              <>
                <Header />
                <main id="page" role="main">
                  <article className="sections" id="sections">
                    <GoSolar />
                  </article>
                </main>
                <Footer />
              </>
            } 
          />
          <Route 
            path="/financing" 
            element={
              <>
                <Header />
                <main id="page" role="main">
                  <article className="sections" id="sections">
                    <FinancingSection />
                  </article>
                </main>
                <Footer />
              </>
            } 
          />
          <Route 
            path="/faq" 
            element={
              <>
                <Header />
                <main id="page" role="main">
                  <article className="sections" id="sections">
                    <Faqs />
                  </article>
                </main>
                <Footer />
              </>
            } 
          />
          <Route 
            path="/careers" 
            element={
              <>
                <Header />
                <main id="page" role="main">
                  <article className="sections" id="sections">
                    <Careers />
                  </article>
                </main>
                <Footer />
              </>
            } 
          />
          <Route 
            path="/solar-news" 
            element={
              <>
                <Header />
                <main id="page" role="main">
                  <article className="sections" id="sections">
                    <SolarNews />
                  </article>
                </main>
                <Footer />
              </>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <>
                <Header />
                <main id="page" role="main">
                  <article className="sections" id="sections">
                    <ContactUs />
                  </article>
                </main>
                <Footer />
              </>
            } 
          />
          {/* Route for Estimated page without Header and Footer */}
          <Route path="/estimated" element={<Estimated />} />
          <Route path="/estimatedaddress" element={<EstimatedAddress />} />
          <Route path="/estimatedaverage" element={<EstimatedAverage />} />
          <Route path="/estimatedorent" element={<EstimatedORent />} />
          <Route path="/estimatedappartment" element={<EstimatedAppartment />} />
          <Route path="/estimatedrevolutation" element={<EstimatedRevolutation />} />
          <Route path="/finalresult" element={<FinalResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;