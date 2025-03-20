import React from 'react';
import CareerConsultant from './CareerConsultant';

export default function Careers() {
    return (
        <>
            <section >
                <div
                    className="section-border position-absolute"
                    style={{ zIndex: -1 }}
                >
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
                <div
                    className="content-wrapper position-relative"
                    style={{ zIndex: 10, paddingTop: "8%", textAlign: "center" }}
                >
                    <div className="content">
                        <div data-fluid-engine="true">
                            <div className="fluid-engine fe-6306b61e7c15d41002590cff">
                                <div className="fe-block fe-block-6306b61e05bbd64a751c5451">
                                    <div
                                        className="sqs-block html-block sqs-block-html"

                                    >
                                        <div className="sqs-block-content">
                                            <div className="sqs-html-content">
                                                <div className="parent-container" style={{ position: 'relative', height: '300px' }}>
                                                    <h2 className="text-bottom-left">

                                                        <strong className="text-accentes">Career </strong>
                                                        <strong className="text-accented"> Opportunities </strong>
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

            <section className="page-section has-section-divider" style={{ marginTop: '-5%' }}>
                <div className="content-wrapper" style={{ maxWidth: '100%', maxHeight: '100%' }}>
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
                                                height: '358px',
                                                border: '2px solid lightgreen',
                                                borderRadius: '50px 0px 50px 0px'
                                            }}
                                        />
                                    </div>
                                    <div style={{ marginTop: '-3%' }}>
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
                                                height: '358px',
                                                border: '2px solid lightgreen',
                                                borderRadius: '50px 0px 50px 0px'
                                            }}
                                        />
                                    </div>
                                    <div style={{ marginTop: '-3%' }}>
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
                                                height: '358px',
                                                border: '2px solid lightgreen',
                                                borderRadius: '50px 0px 50px 0px'
                                            }}
                                        />
                                    </div>
                                    <div style={{ marginTop: '-3%' }}>
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

                            <div className="row">
                                <div className="col-md-2"></div>
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
                                            src="assets/content/service_img7.png"
                                            alt="Home Image"
                                            style={{
                                                display: 'block',
                                                objectFit: 'cover',
                                                width: '351px',
                                                height: '358px',
                                                border: '2px solid lightgreen',
                                                borderRadius: '50px 0px 50px 0px'
                                            }}
                                        />
                                    </div>
                                    <div style={{ marginTop: '-6%' }}>
                                        <h4>Master Electrician</h4>
                                        <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', color: 'rgba(0, 0, 0, 1)' }}>
                                            Our electricians are licensed and NABCEP
                                            certified. We are looking to hire or partner
                                            with  master electricians who install PV or
                                            are looking to get into the PV industry.
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
                                            src="assets/content/serviecs_img6.png"
                                            alt="Home Image"
                                            style={{
                                                display: 'block',
                                                objectFit: 'cover',
                                                width: '351px',
                                                height: '358px',
                                                border: '2px solid lightgreen',
                                                borderRadius: '50px 0px 50px 0px'
                                            }}
                                        />
                                    </div>
                                    <div style={{ marginTop: '-6%' }}>
                                        <h4>Install Team</h4>
                                        <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', color: 'rgba(0, 0, 0, 1)' }}>
                                            Our install teams our professional licensed
                                            and insured, with the newest and highest
                                            grade equipment in the industry. With pro-
                                            cesses in place to allow for quick, safe, and
                                            clean installs. Our teams believe in doing the
                                            job right the first time.
                                        </p>
                                    </div>

                                </div>
                                <div className="col-md-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CareerConsultant />
        </>
    )
}
