import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap'; // Import Bootstrap JS

export default function OurReview() {
    useEffect(() => {
        // Initialize the Bootstrap carousel
        const myCarousel = document.querySelector('#recipeCarousel');
        // const carousel = new bootstrap.Carousel(myCarousel, {
        //   interval: 100000
        // });

        // Clone items for the carousel
        const carouselItems = document.querySelectorAll('.carousel .carousel-item');
        const minPerSlide = 4;

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
            <h2 style={{ textAlign: 'center',marginTop: '8%' }}> <strong>Our REVIEW</strong></h2>
            <div className="container text-center my-3">
                <div
                    className="row mx-auto my-auto justify-content-center"
                    style={{
                        gap: "10px", // Set gap between cards
                    }}
                >
                    <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="col-md-4">
                                    <div className="testimonial">
                                        <div className="testimonial-img">
                                            <img src="https://source.unsplash.com/random/600x600" alt="" />
                                        </div>
                                        <div className="testimonial-name">Full name</div>
                                        <div className="testimonial-rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s,
                                        </p>
                                    </div>


                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-4">
                                    <div className="testimonial">
                                        <div className="testimonial-img">
                                            <img src="https://source.unsplash.com/random/600x600" alt="" />
                                        </div>
                                        <div className="testimonial-name">Full name</div>
                                        <div className="testimonial-rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-4">
                                    <div className="testimonial">
                                        <div className="testimonial-img">
                                            <img src="https://source.unsplash.com/random/600x600" alt="" />
                                        </div>
                                        <div className="testimonial-name">Full name</div>
                                        <div className="testimonial-rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-4">
                                    <div className="testimonial">
                                        <div className="testimonial-img">
                                            <img src="https://source.unsplash.com/random/600x600" alt="" />
                                        </div>
                                        <div className="testimonial-name">Full name</div>
                                        <div className="testimonial-rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-4">
                                    <div className="testimonial">
                                        <div className="testimonial-img">
                                            <img src="https://source.unsplash.com/random/600x600" alt="" />
                                        </div>
                                        <div className="testimonial-name">Full name</div>
                                        <div className="testimonial-rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-4">
                                    <div className="testimonial">
                                        <div className="testimonial-img">
                                            <img src="https://source.unsplash.com/random/600x600" alt="" />
                                        </div>
                                        <div className="testimonial-name">Full name</div>
                                        <div className="testimonial-rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s,
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev bg-transparent w-aut"
                            href="#recipeCarousel"
                            role="button"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                        </a>
                        <a
                            className="carousel-control-next bg-transparent w-aut"
                            href="#recipeCarousel"
                            role="button"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}