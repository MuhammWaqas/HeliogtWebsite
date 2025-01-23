import React from 'react';
import SolarEnvironmental from './SolarEnvironmental';
import SolarNewsPart1 from './SolarNewsPart1';
import SolarNewsPart2 from './SolarNewsPart2';
import SolarNewsPart3 from './SolarNewsPart3';
import SolarNewsPart4 from './SolarNewsPart4';

export default function SolarNews() {
    return (
        <>
            <section className="page-section">
                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <div data-fluid-engine="true">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sqs-html-content">
                                    <p>3/7/24</p>
                                    <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px' }}>
                                        <strong>Navigating Evergy's New Rate Plans: </strong>Understanding the Impact on <br />
                                        Your Electric Bill
                                    </h3>
                                    <a class="blog-more-link" href="/" 
                                    style={{marginTop: '3%'}}>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SolarEnvironmental />
            <SolarNewsPart1 />
            <SolarNewsPart2 />
            <SolarNewsPart3 />
            <SolarNewsPart4 />
        </>

    )
}
