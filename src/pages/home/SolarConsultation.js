import React from 'react';

export default function SolarConsultation() {
    return (
        <div>
            <section
                data-test="page-section"
                style={{ marginLeft: '4%' }}
                className="page-section"
            >
                <div className="section-border">
                    <div className="section-background"></div>
                </div>
                <div className="content-wrapper" style={{ maxWidth: '100%', maxHeight: 'auto' }}>
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="row py-4 align-items-stretch"> {/* Added align-items-stretch */}
                                <div className="col-md-6">
                                    <div className="sqs-html-content h-100"> {/* Added h-100 to ensure full height */}
                                        <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '24px' }}>
                                            <strong>Free Solar Consultation</strong>
                                        </h3>
                                        <p style={{ whiteSpace: "pre-wrap", fontSize: '17px' }}>
                                            Going solar with Helio GreenTech starts with an
                                            appointment where we can discuss your goals,
                                            your energy needs, and your site conditions to
                                            help you discover if solar is a good fit. There’s
                                            no cost or obligation to visit with our professional
                                            solar team members to find out if solar is a good
                                            fit for you. Our team will inspect your roof, attic, and
                                            existing electrical, to help spot any issues. We will
                                            provide a same-day quote with upfront pricing,
                                            financing options, and potential savings. Learn more by watching the video, and book an appointment today.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="video-container h-100"> {/* Added h-100 to ensure full height */}
                                        <div className="video-frame" style={{ width: '95%', height: '100%' }}>
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
                            </div> {/* End of row */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}