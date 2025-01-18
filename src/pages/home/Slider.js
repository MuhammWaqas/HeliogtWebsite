import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default function Slider() {
    useEffect(() => {
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
        <div>
            <div className="curve-line top-curve" style={{marginTop: '3%'}}></div>
            <div className="container-fluid text-center my-3">
                <div className="row mx-auto my-auto justify-content-center" style={{ gap: '10px' }}>
                    <div id="recipeCarousele" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="col-md-3 left-curved-image">
                                    <img
                                        src={'assets/content/image.png'}
                                      
                                        style={{
                                            height: '100%', // Fill the card height
                                            width: '100%', // Fill the card width

                                        }}
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-3">
                                    <img
                                        src={'assets/content/curves_img.png'}
                                        style={{
                                            height: '100%', // Fill the card height
                                            width: '100%', // Fill the card width

                                        }}
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-3">
                                    <img
                                        src={'assets/content/curves_imge.png'}
                                        style={{
                                            height: '100%', // Fill the card height
                                            width: '100%', // Fill the card width

                                        }}
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-3">
                                    <img
                                        src={'assets/content/curves_image.png'}
                                        style={{
                                            height: '100%', // Fill the card height
                                            width: '100%', // Fill the card width

                                        }}
                                    />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="curve-line bottom-curve"></div>
        </div>
    );
}