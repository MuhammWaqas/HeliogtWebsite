import { useNavigate } from 'react-router-dom';

export default function Estimated() {
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
                                        HOW Much Your <br />
                                        SOLAR will COST
                                    </h3>
                                    <p>What is Your Address?</p>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter a valid address "
                                        style={{
                                            width: '100%',
                                            maxWidth: '370px',
                                            height: '100%',
                                            maxHeight: '56px',
                                            margin: '10px 0',
                                            padding: '10px',
                                            background: 'rgba(217, 217, 217, 1)',
                                            border: '1px solid rgba(147, 204, 15, 0.3)',
                                            borderRadius: '10px',
                                            textAlign: 'center',
                                            fontSize: '12px',
                                        }}
                                    />
                                    <div style={{ marginTop: '15px' }}>
                                        <a
                                            onClick={() => navigate('/estimatedaddress')}
                                            className="button-elementeds"
                                            style={{
                                                display: 'inline-block',
                                                textDecoration: 'none',

                                                fontWeight: '600',
                                            }}
                                        >
                                            Submit
                                        </a>
                                    </div>
                                    <ul style={{ marginTop: '30%', listStyleType: 'disc', textAlign: 'left' }}>
                                        <li>Up 100% Energy Cost Savings</li>
                                        <li>Reduce Your Carbon Footprint</li>
                                        <li>Increased Home Value</li>
                                    </ul>
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
