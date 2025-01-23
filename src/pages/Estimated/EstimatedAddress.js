import { useNavigate } from 'react-router-dom';

export default function EstimatedAddress() {
    const navigate = useNavigate();
    return (
        <>
            <section className="page-section">
                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>
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
                        <div className="row" style={{ display: 'flex', alignItems: 'stretch' }}>
                            <div
                                className="col-md-6"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    height: '100vh', // Ensures it centers vertically within the viewport
                                }}
                            >
                                <div className="sqs-html-content">
                                    <h3
                                        style={{
                                            whiteSpace: 'pre-wrap',
                                            fontSize: '36px',
                                            fontWeight: '600',
                                        }}
                                    >
                                        <stromg>YOUR ADDRESS</stromg>
                                    </h3>
                                    <p style={{ textAlign: 'center', marginTop: '15%' }}>604 Northeast Thames Drive, Lee's Summit,<br />
                                        MO 64086, USA</p>

                                    <div style={{ marginTop: '20%' }}>
                                        <a
                                            onClick={() => navigate('/estimatedaverage')}
                                            className="buttoned-element"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                textDecoration: 'none',
                                                fontWeight: '600',

                                            }}
                                        >
                                            That’s Right
                                            <i
                                                className="fas fa-long-arrow-alt-right"
                                                style={{
                                                    fontSize: '30px',
                                                    marginLeft: '40px', // Adds spacing between text and icon
                                                }}
                                            ></i>
                                        </a>
                                    </div>

                                    <div style={{ marginTop: '15px' }}>
                                        <a
                                            onClick={() => navigate('/estimated')}
                                            className="buttons-elemented"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                textDecoration: 'none',
                                                fontWeight: '600',
                                            }}
                                        >
                                            <i
                                                className="fas fa-long-arrow-alt-left"
                                                style={{
                                                    fontSize: '30px',
                                                    marginRight: '15px',
                                                }}
                                            ></i>
                                            That’s Not Right
                                        </a>
                                    </div>
                                </div>
                            </div>


                            <div
                                className="col-md-6"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '20px',

                                }}
                            >
                                <img className='styled-box'
                                    src="assets/content/estimated_img.png"
                                    alt="Home Image"
                                    style={{
                                        width: '100%',
                                        maxWidth: '632px', // Limit the image width
                                        height: '100%',
                                        maxHeight: '560px', // Limit the image height
                                        borderRadius: '8px', // Optional rounding for style
                                    }}
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
