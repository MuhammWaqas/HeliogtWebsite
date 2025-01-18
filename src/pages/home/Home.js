import React from "react";
import Slider from "./Slider";
import Boxs from "./Boxs";
import Button from "./Button";
import CurvedSection from "./CurvedSection";
import SaveSolar from "./SaveSolar";
import SolarConsultation from "./SolarConsultation";
import GoingSolar from "./GoingSolar";
import SolarService from "./SolarService";
import Boxes from "./Boxes";
import SolarInstallition from "./SolarInstallition";
import OutstandingSection from "./OutstandingSection";
import OurReview from "./OurReview";
import OurLocation from "./OurLocation";
import WhatMore from "./WhatMore";
import BrandImg from "./BrandImg";


const Home = () => {

    return (
        <>
            <section >

                <div
                    className="section-border position-absolute"
                    style={{ zIndex: -1 }}
                >
                    <div className="section-background position-absolute">
                        <img
                            alt="Background"
                            src="assets/content/home.png"
                            className="w-100 object-fit-cover"
                            style={{ display: "block", height: '100vh' }}
                        />
                        <div
                            className="section-background-overlay position-absolute"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", pointerEvents: "none" }}
                        />
                    </div>
                </div>
                {/* Content */}
                <div
                    className="content-wrapper position-relative"
                    style={{ zIndex: 10, paddingTop: "8%", textAlign: "center" }}
                >
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="fluid-engine fe-6306b61e7c15d41002590cff">
                                <div className="fe-block fe-block-6306b61e05bbd64a751c5451">
                                    <div
                                        className="sqs-block html-block sqs-block-html"

                                    >
                                        <div className="sqs-block-content">
                                            <div className="sqs-html-content">
                                                <h2>
                                                    <strong className="text-accents">
                                                        Solar  </strong>
                                                    <strong className="text-accente">Power</strong>
                                                </h2>
                                                <p style={{ textAlign: "center", color: '#fff' }}>
                                                    Installing a greener future for the
                                                    <span className="text-accent" style={{ color: ' #B3EF27' }}> earth </span> and your
                                                    <span className="text-accent" style={{ color: ' #B3EF27' }}> wallet </span>.
                                                </p>
                                                <div className="sqs-block-content" >
                                                    <div style={{ marginBottom: '15%' }}>
                                                        <a href="/ " className="button-elements"
                                                            style={{ textDecoration: 'none' }}>
                                                            Get An Estimate
                                                        </a>
                                                    </div>
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


            <section className="page-section" style={{ marginTop: '-7%' }}>

                <div className="content-wrapper py-5" style={{ backgroundColor: '#D9D9D9', maxWidth: '100%', maxHeight: '100%' }}>

                    <div data-fluid-engine="true">
                        <div className="row" style={{ marginTop: '3%' }}>
                            <div className="col-md-6">
                                <div className="sqs-html-content" style={{ marginTop: '5%' }}>
                                    <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px' }}>
                                        Go <span style={{ color: 'rgba(147, 204, 15, 1)' }}>solar</span> with Helio GreenTech
                                    </h3>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px' }}>
                                        Helio GreenTech is a top rated, locally owned and operated
                                        solar installer in Kansas City servicing Kansas and Missouri.
                                        We are committed to building a sustainable future that’s
                                        beneficial environmentally and financially for all. Installing
                                        solar has never been an easier choice. With rising utility
                                        costs solar can offer lower payments than what you are
                                        paying today. Deciding to go solar means you have cleaner
                                        energy and more affordable bills. Get a free quote to see
                                        how much you can save by installing solar today.
                                    </p>
                                </div>



                            </div>

                            <div className="col-md-6">

                                <div className="video-container">
                                    <div className="styled-box" style={{ height: '50vh', width: '90%' }}>
                                        <iframe
                                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                            frameBorder="0"
                                            allowFullScreen
                                            title="Solar Consultation Video"
                                            style={{ width: '100%', height: '100%' }}
                                        ></iframe>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Slider />
            <Boxs />
            <Button />
            <CurvedSection />
            <SaveSolar />

            <SolarConsultation />
            <GoingSolar />
            <SolarService />
            <Boxes />
            <SolarInstallition />
            <OutstandingSection />
            <OurReview />


            <section>
                <div className="container calendar-container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="calendly-wrapper">


                                <div className="calendly-spinner">
                                    <div className="calendly-bounce1" />
                                    <div className="calendly-bounce2" />
                                    <div className="calendly-bounce3" />
                                </div>
                                <div className="top-arrow" />
                                <iframe
                                    src="https://calendly.com/d/cpfm-7xj-8w6/solar-consultation-residential-home-visit?embed_domain=www.heliogt.com&embed_type=Inline&hide_gdpr_banner=1&text_color=34337d&primary_color=6ba80a"
                                    style={{ position: "relative", minWidth: 320, height: 700 }}
                                    title="Select a Date & Time - Calendly"
                                ></iframe>
                                <div className="left-shadow" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <OurLocation />
            <WhatMore />
            <BrandImg />

        </>
    );
};

export default Home;