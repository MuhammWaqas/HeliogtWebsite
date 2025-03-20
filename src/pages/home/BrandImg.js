import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default function BrandImg() {
    useEffect(() => {
        // Initialize the Bootstrap carousel
        const myCarousel = document.querySelector('#recipeCarousels');
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
        <>
            <section className="page-section" style={{marginTop: '5%'}}>
                <div className="section-border" data-controller="SectionDivider" style={{ clipPath: "url(#section-divider-65a6b757d33ea3703d6aa7aa)" }}>
                    <div className="section-background"></div>
                </div>

                <div className="content-wrapper" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="container text-center my-3">
                                <div className="row mx-auto my-auto justify-content-center" style={{ gap: '10px' }}>
                                    <div id="recipeCarousels" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item active">
                                                <div className="col-12 col-md-3 mb-3"> {/* Full width on small screens */}
                                                    <div
                                                        className="card text-center d-flex align-items-center justify-content-center"
                                                        style={{ height: '200px', border: 'none' }}
                                                    >
                                                        <img
                                                            src={'assets/content/google.png'}
                                                            className="img-fluid" // Bootstrap class for responsive images
                                                            alt="Google"
                                                            style={{
                                                                maxHeight: '100%',
                                                                objectFit: 'contain',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="col-12 col-md-3 mb-3">
                                                    <div
                                                        className="card text-center d-flex align-items-center justify-content-center"
                                                        style={{ height: '200px', border: 'none' }}
                                                    >
                                                        <img
                                                            src={'assets/content/bestcompany.png'}
                                                            className="img-fluid"
                                                            alt="Best Company"
                                                            style={{
                                                                maxHeight: '100%',
                                                                objectFit: 'contain',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="col-12 col-md-3 mb-3">
                                                    <div
                                                        className="card text-center d-flex align-items-center justify-content-center"
                                                        style={{ height: '200px', border: 'none' }}
                                                    >
                                                        <img
                                                            src={'assets/content/moseia.png'}
                                                            className="img-fluid"
                                                            alt="Moseia"
                                                            style={{
                                                                maxHeight: '100%',
                                                                objectFit: 'contain',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="col-12 col-md-3 mb-3">
                                                    <div
                                                        className="card text-center d-flex align-items-center justify-content-center"
                                                        style={{ height: '200px', border: 'none' }}
                                                    >
                                                        <img
                                                            src={'assets/content/nabcep.png'}
                                                            className="img-fluid"
                                                            alt="NABCEP"
                                                            style={{
                                                                maxHeight: '100%',
                                                                objectFit: 'contain',
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="col-12 col-md-3 mb-3">
                                                    <div
                                                        className="card text-center d-flex align-items-center justify-content-center"
                                                        style={{ height: '200px', border: 'none' }}
                                                    >
                                                        <img
                                                            src={'assets/content/elite.png'}
                                                            className="img-fluid"
                                                            alt="Elite"
                                                            style={{
                                                                maxHeight: '100%',
                                                                objectFit: 'contain',
                                                            }}
                                                        />
                                                    </div>
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
        </>
    );
}