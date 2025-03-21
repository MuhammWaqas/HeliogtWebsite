import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Slider() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        const myCarousel = document.querySelector('#recipeCarousele');
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
            <h2 style={{ textAlign: 'center',marginTop: '8%' }}> <strong>Our Gallery</strong></h2>
            <div className="curve-line top-curve" style={{ marginTop: '3%' }}></div>
            <div className="container-fluid text-center my-3">
               
                <div className="row mx-auto my-auto justify-content-center" style={{ gap: '10px' }}>
                    <div id="recipeCarousele" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner" role="listbox" style={{ marginTop: '2%' }}>
                            <div className="carousel-item active">
                                <div className="col-12 col-md-3">
                                    <img
                                        src={'assets/content/image.png'}
                                        className="img-fluid"
                                        alt="Slide 1"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-12 col-md-3">
                                    <img
                                        src={'assets/content/curves_img.png'}
                                        className="img-fluid"
                                        alt="Slide 2"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-12 col-md-3">
                                    <img
                                        src={'assets/content/curves_imge.png'}
                                        className="img-fluid"
                                        alt="Slide 3"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-12 col-md-3">
                                    <img
                                        src={'assets/content/curves_image.png'}
                                        className="img-fluid"
                                        alt="Slide 4"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Next and Previous buttons */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#recipeCarousele" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#recipeCarousele" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="curve-line bottom-curve" style={{ marginTop: '2%' }}></div>

            <style jsx>{`
                @media (max-width: 576px) {
                    #recipeCarousele .carousel-item {
                        height: 200px;
                    }
                    #recipeCarousele img {
                        object-fit: cover;
                        height: 100%;
                    }
                }
                @media (min-width: 577px) {
                    #recipeCarousele .carousel-item {
                        height: 300px;
                    }
                    #recipeCarousele img {
                        object-fit: cover;
                        height: 100%;
                    }
                }
            `}</style>
        </div>
    );
}