import { useNavigate } from 'react-router-dom';

export default function EstimatedRevolutation() {
    const navigate = useNavigate();
    return (
        <>
            <section
                data-test="page-section"
                className="page-section has-section-divider"
                style={{ marginTop: "5%" }}
            >
                <div
                    className="section-border"
                    data-controller="SectionDivider"
                    style={{ clipPath: "url(#section-divider-65a71425e0ad583da5cbf098)" }}
                ></div>
                <div
                    className="content-wrapper"
                    style={{ maxWidth: "100%", maxHeight: "100%", marginBottom: "5%" }}
                >
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
                                    {/* Background Section */}
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
                                                    alt="Background"
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
                                            width: "100%",
                                            maxWidth: "691px",
                                            height: '100%',
                                            maxHeight: '600px',
                                            borderRadius: "12px",
                                            border: "2px solid #77B900",
                                            overflow: "hidden",
                                        }}
                                    >

                                        {/* Main Heading */}
                                        <h2
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: "40px",
                                                marginBottom: "30px",
                                                color: '#fff',
                                                marginTop: '5%',
                                            }}
                                        >
                                            How Can Revolution <br />
                                            Solar Contact You?
                                        </h2>
                                        <div style={{}}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="First Name"
                                                style={{
                                                    width: '100%',
                                                    maxWidth: '450px',
                                                    maxHeight: '60px',
                                                    padding: '15px',
                                                    background: 'rgba(217, 217, 217, 1)',
                                                    border: '1px solid rgba(147, 204, 15, 0.3)',
                                                    borderRadius: '10px',
                                                    color: 'rgba(145, 145, 145, 1)',
                                                    fontSize: '12px',
                                                    marginLeft: '16%',
                                                }}
                                            />
                                        </div>

                                        <div style={{ marginTop: '2%' }}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Last Name"
                                                style={{
                                                    width: '100%',
                                                    maxWidth: '450px',
                                                    maxHeight: '60px',
                                                    padding: '15px',
                                                    background: 'rgba(217, 217, 217, 1)',
                                                    border: '1px solid rgba(147, 204, 15, 0.3)',
                                                    borderRadius: '10px',
                                                    color: 'rgba(145, 145, 145, 1)',
                                                    fontSize: '12px',
                                                    marginLeft: '16%',
                                                }}
                                            />
                                        </div>
                                        <div style={{ marginTop: '2%' }}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Phone"
                                                style={{
                                                    width: '100%',
                                                    maxWidth: '450px',
                                                    maxHeight: '60px',
                                                    padding: '15px',
                                                    background: 'rgba(217, 217, 217, 1)',
                                                    border: '1px solid rgba(147, 204, 15, 0.3)',
                                                    borderRadius: '10px',
                                                    color: 'rgba(145, 145, 145, 1)',
                                                    fontSize: '12px',
                                                    marginLeft: '16%',
                                                }}
                                            />
                                        </div>
                                        <div style={{ marginTop: '2%' }}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Email"
                                                style={{
                                                    width: '100%',
                                                    maxWidth: '450px',
                                                    maxHeight: '60px',
                                                    padding: '15px',
                                                    background: 'rgba(217, 217, 217, 1)',
                                                    border: '1px solid rgba(147, 204, 15, 0.3)',
                                                    borderRadius: '10px',
                                                    color: 'rgba(145, 145, 145, 1)',
                                                    fontSize: '12px',
                                                    marginLeft: '16%',
                                                }}
                                            />
                                        </div>

                                        {/* Next Button */}
                                        <button
                                            onClick={() => navigate('/finalresult')}
                                            className="btn btn-success btn-lg"
                                            style={{
                                                backgroundColor: "#77B900",
                                                border: "none",
                                                padding: "10px 30px",
                                                width: '376px',
                                                height: '55px',
                                                fontSize: "18px",
                                                borderRadius: "8px",
                                                marginTop: "20px",
                                                color: 'rgba(238, 238, 238, 1)',
                                            }}
                                        >
                                            Show me the numbers
                                        </button>
                                        <p style={{ fontSize: '10px', marginTop: '2%', textAlign: 'center', color: 'rgba(255, 255, 255, 0.85)' }}>By submitting your information, you consent for Revolution Solar directly or
                                            through its approved partner sunset to contact you from time-to-time by
                                            telephone, text, automated technology, calls from artificial voices, email and/or
                                            direct mail with information and offers about products and services that might
                                            interest me. This consent is not required to make a purchase. Reply ‘STOP’ to
                                            opt-out at any time. Clicking the button above constitutes your electronic
                                            signature. Privacy Policy</p>
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
