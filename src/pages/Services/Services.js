import React from 'react';
import OurServices from './OurServices';
import ServicesFaqs from './ServicesFaqs';
import WhatMore from '../home/WhatMore';
import BrandImg from '../home/BrandImg';
import ServicesLocation from './ServicesLocation';

export default function Services() {
    return (
        <>

            <section className="page-section has-section-divider"  >
                <div className="content-wrapper" style={{ maxWidth: '100%', maxHeight: '100%', marginBottom: '5%' }}>
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="row">
                                <div className="col-md-4">
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '100vh', // Full height of the viewport (adjust as needed)
                                            width: '100%', // Full width of the container

                                        }}
                                    >
                                        <img
                                            src="assets/content/service_img1.jpg"
                                            alt="Home Image"
                                            style={{
                                                display: 'block',
                                                objectFit: 'cover',
                                                width: '351px',
                                                height: '481px',
                                                border: '2px solid lightgreen',
                                                borderRadius: '0px 100px 0px 100px'
                                            }}
                                        />
                                    </div>
                                    <div style={{ marginTop: '5%' }}>
                                        <h4>Residential</h4>
                                        <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', color: 'rgba(0, 0, 0, 1)' }}>
                                            As a local leader in the solar industry across Kansas,
                                            Missouri, and the vibrant Kansas City area, our team
                                            of experts designs and installs solar systems customi-
                                            zed for your home, ensuring maximum efficiency and
                                            savings. From sunny Kansas to vibrant Missouri, we've
                                            brightened countless homes with clean, renewable
                                            energy. Learn more about the ITC tax credits in 2024
                                            and recently renewed by the inflation reduction act
                                            IRA.
                                        </p>
                                    </div>


                                </div>
                                <div className="col-md-4">
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '100vh', // Full height of the viewport (adjust as needed)
                                            width: '100%', // Full width of the container

                                        }}
                                    >
                                        <img
                                            src="assets/content/service_img.jpg"
                                            alt="Home Image"
                                            style={{
                                                display: 'block',
                                                objectFit: 'cover',
                                                width: '351px',
                                                height: '481px',
                                                border: '2px solid lightgreen',
                                                borderRadius: '0px 100px 0px 100px'
                                            }}
                                        />
                                    </div>
                                    <div style={{ marginTop: '5%' }}>
                                        <h4>Commercial Solar</h4>
                                        <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', color: 'rgba(0, 0, 0, 1)' }}>
                                            Learn more about the benefits of going solar for your
                                            business with Helio GreenTech, we can help you qualify
                                            your business for programs like the Rural Energy for
                                            America Program (REAP) grant, and The Modified
                                            Accelerated Cost Recovery System (MACRS) with
                                            programs and tax incentives like the 30% Investment
                                            Tax Credits that the IRA extended the provisions of the
                                            Solar Investment Tax Credit (ITC is your gateway to
                                            affordable solar solutions.
                                        </p>
                                    </div>

                                </div>
                                <div className="col-md-4">
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '100vh', // Full height of the viewport (adjust as needed)
                                            width: '100%', // Full width of the container

                                        }}
                                    >
                                        <img
                                            src="assets/content/service_img2.jpg"
                                            alt="Home Image"
                                            style={{
                                                display: 'block',
                                                objectFit: 'cover',
                                                width: '351px',
                                                height: '481px',
                                                border: '2px solid lightgreen',
                                                borderRadius: '0px 100px 0px 100px'
                                            }}
                                        />
                                    </div>
                                    <div style={{ marginTop: '5%' }}>
                                        <h4>Solar Repair and EV Chargers</h4>
                                        <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', color: 'rgba(0, 0, 0, 1)' }}>
                                            Our solar solutions are thoughtfully crafted to cater
                                            to the specific requirements, guaranteeing peak
                                            performance and efficiency. When you opt for our
                                            services, you're selecting a partner deeply embed-
                                            ded within your community. Whether it's installing
                                            EV chargers, addressing reinstallation and reroofing
                                            needs due to storm or hail damage, or assisting
                                            with system repairs and upgrades, we are your
                                            dedicated service provider across  Kansas and
                                            Missouri.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <OurServices />
            <ServicesFaqs />
            <WhatMore />
            <ServicesLocation />
            <BrandImg />
           
        </>
    )
}
