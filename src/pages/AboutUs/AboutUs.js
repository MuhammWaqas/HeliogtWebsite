import React from 'react';
import AboutSolarInstallation from './AboutSolarInstallation';
import AboutGoingSolar from './AboutGoingSolar';
import AboutLocation from './AboutLocation';
import AboutGallery from './AboutGallery';

export default function AboutUs() {
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
                            style={{ display: "block", height: '80vh' }}
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
                                                <div className="parent-container" style={{ position: 'relative', height: '300px' }}>
                                                    <h2 className="text-bottom-left">
                                                        <strong className="text-accented">Solar </strong>
                                                        <strong className="text-accentes">for your home or business.</strong>
                                                    </h2>
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

            <AboutSolarInstallation />
            <AboutGoingSolar />
            <AboutLocation />
            <AboutGallery />
            <AboutGoingSolar />
        </>
    )
}
