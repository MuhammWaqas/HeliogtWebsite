import React from 'react';
import BoxesNext from './BoxesNext';
import SolarEstimated from './SolarEstimated';
import Graph from './Graph';
import Footer from './Footer';

export default function EstimatedFinalPage() {
    return (
        <>
            <section style={{ position: 'relative', height: '100vh' }}>
                <div className="section-border position-absolute" style={{ zIndex: -1, width: '100%', height: '100%' }}>
                    <div className="section-background position-absolute" style={{ width: '100%', height: '100%',marginBottom: '30%' }}>
                        <img
                            alt="Background"
                            src="assets/content/home.png"
                            className="w-100 h-100 object-fit-cover"
                            style={{ display: "block", height: '100%', width: '100%', objectFit: 'cover' }}
                        />
                        <div
                            className="section-background-overlay position-absolute"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", pointerEvents: "none", width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
                {/* Content */}
                <div className="content-wrapper" style={{ paddingTop: "8%", textAlign: "center" }}>
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="fluid-engine fe-6306b61e7c15d41002590cff">
                                <div className="fe-block fe-block-6306b61e05bbd64a751c5451">
                                   
                                       
                                            <div className="sqs-html-content">
                                                <div className="parent-container" style={{ position: 'relative', height: '300px' }}>
                                                    <div style={{ marginTop: '-8%' }}>
                                                        <img src={'assets/content/favicon-196x196.png'} alt="Favicon" />
                                                    </div>
                                                    <p style={{ textAlign: 'center', color: 'rgba(238, 238, 238, 1)' }}>Hey!</p>
                                                    <h2 style={{ textAlign: 'center', color: 'rgba(238, 238, 238, 1)', fontSize: '36px', fontWeight: '600' }}>
                                                        Check Out Your Free Solar Estimate!
                                                    </h2>
                                                    <p style={{ textAlign: 'center', color: 'rgba(238, 238, 238, 1)' }}>
                                                        Tailor made for you using a flat-rate to save you money!
                                                    </p>

                                                    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh", marginTop: '-12%' }}>
                                                        <div className="card text-center p-4" style={{ width: '100%', maxWidth: '500px', height: '100%', maxHeight: '250px', background: "rgba(255, 255, 255, 0.4)", border: "2px solid #77B900", borderRadius: 12, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
                                                            {/* Icon */}
                                                            <div style={{ marginBottom: 10 }}>
                                                                <img src="assets/content/final_solar.png" alt="Solar Panel Icon" style={{ width: 60, height: 50 }} />
                                                            </div>
                                                            {/* Main Text */}
                                                            <h2 style={{ color: "#001B71", fontWeight: "bold" }}>$84*</h2>
                                                            <p style={{ fontSize: '28px', color: "#001B71", fontWeight: "bold", marginBottom: 20 }}>
                                                                Monthly Payment
                                                            </p>
                                                            {/* Subtext */}
                                                            <p style={{ fontSize: '12px', color: "black" }}>
                                                                *Estimated cost with financing a 100% energy bill offset. Keep reading to learn more about your system, savings, and additional bonuses.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BoxesNext />
            <SolarEstimated />
            <Graph />
            <Footer />
        </>
    )
}
