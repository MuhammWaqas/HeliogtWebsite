import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Slider() {

    useEffect(() => {

        AOS.init({ duration: 1000 });
        // Initialize the Bootstrap carousel
        const myCarousel = document.querySelector('#recipeCarousele');
        // const carousel = new bootstrap.Carousel(myCarousel, {
        //   interval: 100000
        // });

        // Clone items for the carousel
        const carouselItems = document.querySelectorAll('.carousel .carousel-item');
        const minPerSlide = 3;

        carouselItems.forEach((item) => {
            let next = item.nextElementSibling;
            if (!next) {
                next = item.parentNode.firstElementChild;
            }
            const firstChild = next.firstElementChild.cloneNode(true);
            item.appendChild(firstChild);

            for (let i = 0; i < minPerSlide; i++) {
                next = next.nextElementSibling;
                if (!next) {
                    next = item.parentNode.firstElementChild;
                }
                const nextChild = next.firstElementChild.cloneNode(true);
                item.appendChild(nextChild);
            }
        });
    }, []);

    return (
        <div data-aos="fade-up">
            <div className="curve-line top-curve" style={{ marginTop: '3%' }}></div>
            <div className="container-fluid text-center my-3">
                <div className="row mx-auto my-auto justify-content-center" style={{ gap: '10px' }}>
                    <div id="recipeCarousele" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner" role="listbox" style={{ marginTop: '2%' }}>
                            <div className="carousel-item active">
                                <div className="col-12 col-md-3">
                                    <img
                                        src={'assets/content/image.png'}
                                        className="img-fluid" // Bootstrap class for responsive images
                                        alt="Slide 1"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-12 col-md-3">
                                    <img
                                        src={'assets/content/curves_img.png'}
                                        className="img-fluid" // Bootstrap class for responsive images
                                        alt="Slide 2"

                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-12 col-md-3">
                                    <img
                                        src={'assets/content/curves_imge.png'}
                                        className="img-fluid" // Bootstrap class for responsive images
                                        alt="Slide 3"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-12 col-md-3">
                                    <img
                                        src={'assets/content/curves_image.png'}
                                        className="img-fluid" // Bootstrap class for responsive images
                                        alt="Slide 4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="curve-line bottom-curve" style={{ marginTop: '-2%' }}></div>

            <style jsx>{`
                @media (max-width: 576px) {
                    #recipeCarousele .carousel-item {
                        height: 200px; // Set a specific height for mobile view
                    }
                    #recipeCarousele img {
                        object-fit: cover; // Ensure the image covers the area
                        height: 100%; // Fill the height
                    }
                }
                @media (min-width: 577px) {
                    #recipeCarousele .carousel-item {
                        height: 300px; // Set a specific height for larger screens
                    }
                    #recipeCarousele img {
                        object-fit: cover; // Ensure the image covers the area
                        height: 100%; // Fill the height
                    }
                }
            `}</style>
        </div>
    );
}