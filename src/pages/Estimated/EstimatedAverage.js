import { useNavigate } from 'react-router-dom';

export default function EstimatedAverage() {
    const navigate = useNavigate();
    return (
        <>
            <section
                data-test="page-section"
                data-section-theme=""
                className="page-section has-section-divider"
                style={{ marginTop: '5%' }}
            >
                <div
                    className="section-border"
                    data-controller="SectionDivider"
                    style={{ clipPath: "url(#section-divider-65a71425e0ad583da5cbf098)" }}
                >


                </div>
                <div className="content-wrapper" style={{ maxWidth: '100%', maxHeight: '100%', marginBottom: '5%' }}>
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="row">
                                <div className="col-md-12">
                                    <img
                                        onClick={() => navigate('/')}
                                        src="assets/content/right.png"
                                        alt="Home Image"
                                        style={{

                                            width: '100%',
                                            maxWidth: '154px', // Limit the image width
                                            height: '100%',
                                            maxHeight: '42px', // Limit the image height
                                            cursor: 'pointer',

                                        }}
                                    />
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div
                                    className="row justify-content-center align-items-center"
                                    style={{ height: "100vh", position: "relative" }}
                                >
                                    {/* Background Image */}
                                    <div className="col-12">
                                        <div
                                            className="d-flex justify-content-center align-items-center"
                                            style={{
                                                width: "100%",
                                                height: "100vh",
                                            }}
                                        >
                                            <div
                                                className="position-relative"
                                                style={{
                                                    width: "100%",
                                                    maxWidth: "807px",
                                                    height: "100%",
                                                    maxHeight: "707px",
                                                    overflow: "hidden",


                                                }}
                                            >
                                                <img
                                                    src="assets/content/estimated_average.png"
                                                    alt="Solar Background"
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </div>
                                        </div>

                                    </div>

                                    {/* Content Overlay */}
                                    <div
                                        className="col-lg-6 col-md-8 col-sm-10 position-absolute text-center"
                                        style={{
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            background: "rgba(255, 255, 255, 0.3)",
                                            width: '100%',
                                            maxWidth: '691px',
                                            height: '100%',
                                            maxHeight: '530px',
                                            padding: "30px",
                                            borderRadius: "12px",
                                            border: "2px solid #77B900",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {/* Subheading */}
                                        <p
                                            style={{
                                                color: "#77B900",
                                                fontWeight: "bold",
                                                marginBottom: "15px",
                                                fontSize: "18px",
                                                marginTop: '15%',
                                            }}
                                        >
                                            Your current Costs
                                        </p>

                                        {/* Main Heading */}
                                        <h2
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: "36px",
                                                marginBottom: "30px",
                                                color: '#fff',
                                            }}
                                        >
                                            <strong> What is Your Average <br /> Electricity Bill?</strong>
                                        </h2>

                                        {/* Slider Section */}
                                        <div
                                            className="d-flex justify-content-between align-items-center"
                                            style={{ marginBottom: "30px" }}
                                        >
                                            <span
                                                style={{
                                                    background: "#000",
                                                    color: "#fff",
                                                    padding: "5px 10px",
                                                    borderRadius: "20px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                $ 275.00
                                            </span>
                                            <div
                                                style={{
                                                    flex: "1",
                                                    marginLeft: "10px",
                                                    background: "#E0E0E0",
                                                    height: "10px",
                                                    borderRadius: "5px",
                                                    position: "relative",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: "50%", // Adjust this percentage based on the value
                                                        background: "#77B900",
                                                        height: "100%",
                                                        borderRadius: "5px",
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Next Button */}
                                        <button
                                            onClick={() => navigate('/estimatedorent')}
                                            className="btn btn-success btn-lg"
                                            style={{
                                                backgroundColor: "#77B900",
                                                border: "none",
                                                padding: "10px 30px",
                                                fontWeight: "bold",
                                                width: '396px',
                                                height: '55px',
                                                fontSize: "18px",
                                                borderRadius: "8px",
                                                marginBottom: "10px",
                                            }}
                                        >
                                            NEXT
                                        </button>

                                        {/* Footer Note */}
                                        <p
                                            style={{
                                                fontSize: "14px",
                                                color: "#555",
                                                marginTop: "10px",
                                            }}
                                        >
                                            We use this info to estimate your plan and savings!
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
