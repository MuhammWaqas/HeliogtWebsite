import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AppContext } from '../StateManagement/Context'; // Adjust the import path as necessary
import axios from 'axios'; // Import Axios

export default function EstimatedRevolutation() {
    const navigate = useNavigate();
    const { data, setData } = useContext(AppContext); // Use context to get data

    // Local state to manage user input
    const [userInfo, setUserInfo] = useState({
        first_name: data.userInfo.firstName || '',
        last_name: data.userInfo.lastName || '',
        email: data.userInfo.email || '',
        phone: data.userInfo.phone || '',
        street: data.locationInfo?.street || '',
        city: data.locationInfo?.city || '',
        state: data.locationInfo?.state || '',
        country: data.locationInfo?.country || '',
        zipcode: data.locationInfo?.postalCode || '',
        description: '',
        lat: data.locationInfo?.geo[0] || '',
        lon: data.locationInfo?.geo[1] || '',
        country_iso: data.locationInfo?.country_iso || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prev => ({
            ...prev,
            [name]: value // Update the corresponding field in userInfo
        }));
    };

    const handleSubmit = async () => {
        setData(prevData => ({
            ...prevData,
            userInfo: userInfo // Save user info in context
        }));

        console.log('User  Info:', userInfo); // Log the user info

        try {
            // POST request to the specified URL
            const response = await axios.post('https://kcsundial.com/api/capture', userInfo);
            console.log('Response:', response.data); // Log the response data
            navigate('/finalresult'); // Navigate to the next page
        } catch (error) {
            console.error('Error posting data:', error); // Log any errors
        }
    };

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
                                            width: "90%", // Use percentage for responsiveness
                                            maxWidth: "691px",
                                            height: 'auto', // Allow height to adjust based on content
                                            maxHeight: '600px',
                                            borderRadius: "12px",
                                            border: "2px solid #77B900",
                                            overflow: "hidden",
                                            padding: '20px', // Add padding for better spacing
                                        }}
                                    >

                                        {/* Main Heading */}
                                        <h2
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: "2rem", // Use rem for better scalability
                                                marginBottom: "30px",
                                                color: '#fff',
                                                marginTop: '5%',
                                            }}
                                        >
                                            How Can Revolution <br />
                                            Solar Contact You?
                                        </h2>

                                        {/* Visible Input Fields */}
                                        <div style={{ alignItems: 'center' }}>
                                            {['first_name', 'last_name', 'phone', 'email'].map((field, index) => (
                                                <div key={index} style={{ marginTop: '2%' }}>
                                                    <input
                                                        type="text"
                                                        name={field} // Set the name attribute to match the state
                                                        value={userInfo[field]} // Bind the input value to state
                                                        onChange={handleChange} // Handle input change
                                                        className="form-control"
                                                        placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/_/g, ' ')} // Capitalize placeholder
                                                        style={{
                                                            width: '90%',
                                                            padding: '15px',
                                                            marginLeft: '7%',
                                                            background: 'rgba(217, 217, 217, 1)',
                                                            border: '1px solid rgba(147, 204, 15, 0.3)',
                                                            borderRadius: '10px',
                                                            color: 'rgba(145, 145, 145, 1)',
                                                            fontSize: '12px',
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Hidden Input Fields */}
                                        <input type="hidden" name="street" value={userInfo.street} />
                                        <input type="hidden" name="city" value={userInfo.city} />
                                        <input type="hidden" name="state" value={userInfo.state} />
                                        <input type="hidden" name="country" value={userInfo.country} />
                                        <input type="hidden" name="zipcode" value={userInfo.zipcode} />
                                        <input type="hidden" name="description" value={userInfo.description} />
                                        <input type="hidden" name="lat" value={userInfo.lat} />
                                        <input type="hidden" name="lon" value={userInfo.lon} />
                                        <input type="hidden" name="country_iso2" value={userInfo.country_iso2} />

                                        {/* Next Button */}
                                        <button
                                            onClick={handleSubmit} // Call the submit handler
                                            className="btn btn-success btn-lg"
                                            style={{
                                                backgroundColor: "#77B900",
                                                border: "none",
                                                padding: "10px 30px",
                                                width: '100%', // Make button full width
                                                maxWidth: '376px', // Limit max width
                                                height: '55px',
                                                fontSize: "18px",
                                                borderRadius: "8px",
                                                marginTop: "20px",
                                                color: 'rgba(238, 238, 238, 1)',
                                            }}
                                        >
                                            Show me the numbers
                                        </button>

                                        <p style={{ fontSize: '10px', marginTop: '2%', textAlign: 'center', color: 'rgba(255, 255, 255, 0.85)' }}>
                                            By submitting your information, you consent for Revolution Solar directly or
                                            through its approved partner sunset to contact you from time-to-time by
                                            telephone, text, automated technology, calls from artificial voices, email and/or
                                            direct mail with information and offers about products and services that might
                                            interest me. This consent is not required to make a purchase. Reply ‘STOP’ to
                                            opt-out at any time. Clicking the button above constitutes your electronic
                                            signature. Privacy Policy
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}