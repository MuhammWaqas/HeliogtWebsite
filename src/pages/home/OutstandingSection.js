import React from 'react'

export default function OutstandingSection() {
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
                            <div className="row">
                                <div className="col-md-6 d-flex"> {/* Use d-flex to enable flexbox on this column */}
                                    <div className="fe-block fe-block-yui_3_17_2_1_1661384183313_131397 w-100"> {/* w-100 to make it full width */}
                                        <img
                                            className='rounded mx-auto d-block'
                                            src='assets/content/outstanding_sec.png'
                                            style={{ width: '100%', height: '70%', objectFit: 'cover' }} // Use objectFit to maintain aspect ratio
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6" style={{ marginTop: '-6%' }}>
                                    <div className="fe-block fe-block-6306ba380f394d4b88505c5c">
                                        <div
                                            className="sqs-block html-block sqs-block-html"
                                            id="block-6306ba380f394d4b88505c5c"
                                        >
                                            <div className="sqs-block-content">
                                                <div className="sqs-html-content">
                                                    <h2 style={{ textAlign: "left", whiteSpace: "pre-wrap", marginTop: '10%', fontSize: '24px',fontWeight: '500' }}>
                                                        Outstanding <span style={{color: 'rgba(147, 204, 15, 1)'}}>Solar</span> Service
                                                    </h2>
                                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '15px' }}>
                                                        We aim to provide a range of fantastic solar services to clients
                                                        near Kansas City, MO. Our professionals are skilled, reliable, and
                                                        ready to go the extra mile to ensure every client gets the solar
                                                        system that they deserve.Above all we want you to be thrilled
                                                        to go solar.
                                                    </p>
                                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '15px' }}>
                                                        We know that solar is good for the planet, it's good for your
                                                        wallet, and it's a system you can trust. <strong>We keep working for
                                                        you after the system is installed.</strong>
                                                    </p>
                                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '15px' }}>
                                                        We are your energy partner every step of the way. We file any
                                                        local rebates for you, we file to have your meter exchanged,
                                                        help you get permission to operate as quick as possible so
                                                        your system can start saving you money, you have full access
                                                        and transparent monitoring of your system, and though the
                                                        system should be maintenance free should something need
                                                        our attention we are there. <span style={{color: 'rgba(147, 204, 15, 1)'}}>CALL NOW</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div> {/* End of row */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
