import React, { useState, useEffect } from 'react';
import AboutGalleryPart4 from './AboutGalleryPart4';
import AboutGalleryPart5 from './AboutGalleryPart5';
import AboutGalleryPart6 from './AboutGalleryPart6';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutGallery() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Animation duration: 1000ms, runs once
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        { src: "assets/content/best_in.png", name: "Benjamin", role: "Developer" },
        { src: "assets/content/img.jpeg", name: "Alice", role: "Designer" },
        { src: "assets/content/img1.jpeg", name: "John", role: "Manager" },
        { src: "assets/content/img2.png", name: "Sarah", role: "Marketing" },
        { src: "assets/content/img3.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_4.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_5.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_6.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_7.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_8.png", name: "Michael", role: "Sales" },
        { src: "assets/content/img_9.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_10.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_11.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_12.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_13.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_14.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_15.png", name: "Michael", role: "Sales" },
        { src: "assets/content/img_16.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_17.png", name: "Michael", role: "Sales" },
        { src: "assets/content/img_18.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_19.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_20.jpg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_21.png", name: "Michael", role: "Sales" },
        { src: "assets/content/img_22.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_23.jpg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_24.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_25.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_26.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img3.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_4.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_5.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_13.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_14.jpeg", name: "Michael", role: "Sales" },
        { src: "assets/content/img_15.png", name: "Michael", role: "Sales" },
        { src: "assets/content/img_16.jpeg", name: "Michael", role: "Sales" },



    ];

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            <section>
                <div className="section-border position-absolute" style={{ zIndex: -1 }}>
                    <div className="section-background position-absolute">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-100 object-fit-cover"
                            style={{ display: "block", height: "80vh", objectFit: "cover" }}
                        >
                            <source src="https://joinarc.io/wp-content/uploads/2024/06/AdobeStock_759054931.mp4" type="video/mp4" />
                        </video>
                        <div
                            className="section-background-overlay position-absolute"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", pointerEvents: "none" }}
                        />
                    </div>
                </div>
                {/* Content */}
                <div className="content-wrapper position-relative" style={{ zIndex: 10, paddingTop: "8%", textAlign: "center" }}>
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="fluid-engine fe-6306b61e7c15d41002590cff">
                                <div className="fe-block fe-block-6306b61e05bbd64a751c5451">
                                    <div className="sqs-block html-block sqs-block-html">
                                        <div className="sqs-block-content">
                                            <div className="sqs-html-content">
                                                <div className="parent-container" style={{ position: 'relative', height: '300px' }}>
                                                    <h2 className="text-bottom-left">
                                                        <strong className="text-accentes"> Our</strong>
                                                        <strong className="text-accented"> Gallery </strong>
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

            <div className="containers" style={{ marginTop: '3%' }}>
                {images.map((image, index) => (
                    <div className="box" key={index} onClick={() => openModal(index)} data-aos="fade-up">
                        <div className='containers'>

                            <div className="product-box">
                                <div className="product-opacity"></div>
                                <img src={image.src} alt={image.name} style={{ cursor: 'pointer' }} />
                                <div className="product-content" >
                                    <h1 className="text-center">{image.name}</h1>
                                    <span className="text-center" style={{ textAlign: 'center' }}>{image.role}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isOpen && (
                <div className="modal" style={modalStyles}>
                    <span onClick={closeModal} style={closeButtonStyles}>&times;</span>
                    <img src={images[currentImageIndex].src} alt="" style={modalImageStyles} />
                    <h2 style={{ color: 'white', marginTop: '35%', textAlign: 'center' }}>
                        {images[currentImageIndex].name}
                    </h2>
                    <button onClick={prevImage} style={{ ...navButtonStyles, ...prevButtonStyles }}>&lt;</button>
                    <button onClick={nextImage} style={{ ...navButtonStyles, ...nextButtonStyles }}>&gt;</button>
                </div>
            )}

            <AboutGalleryPart4 />
            <AboutGalleryPart5 />
            <AboutGalleryPart6 />
        </>
    );
}

// Styles for the modal
const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
};

const modalImageStyles = {
    maxWidth: '90%',
    maxHeight: '90%',
};

const closeButtonStyles = {
    position: 'absolute',
    top: '20px',
    right: '30px',
    color: 'white',
    fontSize: '30px',
    cursor: 'pointer',
};

const navButtonStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '20px',
};

const prevButtonStyles = {
    left: '10px', // Position the previous button on the left
};

const nextButtonStyles = {
    right: '10px', // Position the next button on the right
};

// Add hover effect for the overlay
const employeeDetailsStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    opacity: 0,
    transition: 'opacity 0.3s',
};

const employeeImageStyle = {
    position: 'relative',
    cursor: 'pointer',
};

const employeeImageHoverStyle = {
    ...employeeImageStyle,
    '&:hover .employee-details': {
        opacity: 1,
    },
};