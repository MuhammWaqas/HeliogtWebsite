import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FinancingPaymenst() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Animation duration: 1000ms, runs once
    }, []);

    return (
        <>
            <section className="page-section" style={{ marginTop: '3%' }}>

                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>

                    <div data-fluid-engine="true">
                        <div className="row">
                            <div className="col-md-12" data-aos="fade-up">
                                <div className="sqs-html-content">
                                    <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px' }}>
                                        <strong>Payments Less Than Your Electric Bill</strong>
                                    </h3>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', marginTop: '2%' }}>
                                        Financing is the most common way to purchase panels for your home. After your custom system is installed, you pay a
                                        monthly payment comparable to prior utility payments while you build equity in your solar energy system.<br />
                                        Purchasing a solar energy system may qualify you to receive a federal tax credit. You can choose to pocket that money,
                                        or apply it to the loan to accelerate ownership. Once you pay off the financing, there are no more payments and you pay
                                        nothing for the power produced by the system. <br />
                                        We work with several lenders so that we can offer great financing options. Consumer friendly loans provided by our solar
                                        financing partners offer several great terms and options including: <span style={{ color: '#B3EF27', }}>Get a Free Quote</span>
                                        <ul>
                                            <li>Low interest rates</li>
                                            <li>No pre-payment penalties</li>
                                            <li>Fixed payments for duration of loan, with consumer friendly re-amortization options</li>
                                            <li>No money down</li>
                                            <li>Loan options based upon qualification and can vary</li>
                                        </ul>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12" data-aos="fade-down">
                                <div className="sqs-html-content">
                                    <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px' }}>
                                        <strong>Solar Lease</strong>
                                    </h3>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', marginTop: '2%' }}>
                                        At Helio GreenTech we believe in working with partners that have our customers best interest at heart. Our lending partners,
                                        Such as Sunlight Financial and BrightOak specializes in alternative energy financing and offering unique lending solutions that
                                        fit your lifestyle. They stand for: serving others, impacting communities, and making a difference. Leasing is a great option for
                                        those who may not qualify for the tax incentive, for those who are not interested in owning the system but still want the savings
                                        and benefits of going green.

                                        <p style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px', marginTop: '2%' }}>
                                            <strong>Benefits of a lease:</strong>
                                        </p>
                                        <ul>
                                            <li>No down payment: If you lease solar panels, you generally pay $0 down—simply pay your solar panel leasing company to use
                                                the system. No maintenance: Typically, the solar leasing company takes responsibility for all repair and maintenance issues,
                                                which can mean your system is hands-off. No cost escalator!</li>
                                            <li>
                                                When choosing between buying solar panels and leasing solar systems, it's important to base the decision on your individual
                                                needs. Whether you buy or lease your system, the sooner you get started, the sooner you can reap these benefits.</li>

                                        </ul>
                                    </p>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', textAlign: 'center', marginTop: '2%' }}>
                                        THE 30% SOLAR INVESTMENT TAX CREDIT HAS BEEN EXTENDED!
                                    </p>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', marginTop: '2%' }}>
                                        The solar Investment Tax Credit (ITC) is a federal policy to support the growth of solar energy in the United States.<strong> Enacted in 2006 -</strong>
                                        it has helped create hundreds of thousands of jobs and has invested billions of dollars in the U.S. economy in the process. States
                                        require that a certain amount of energy comes from a renewable resource such as solar. Despite progress, <strong>solar energy still only
                                            represents 2.5% </strong> of energy production in the United States.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12" data-aos="fade-up">
                                <div className="sqs-html-content">
                                    <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px' }}>
                                        <strong>The IRA Inflation Reduction Act of 2022:</strong>
                                    </h3>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', marginTop: '2%' }}>
                                        There’s even more exciting news with the IRA Inflation Reduction Act of 2022 as the largest climate bill in history, with $369B in energy
                                        and climate spending there’s never been a better time to invest in the future. Find out how beneficial going solar could be for you
                                        and your home. Click here for more information on the IRA Inflation Reduction Act for the solar industry for homeowners in the Kansas
                                        City Market looking to go solar and reduce their energy costs.
                                    </p>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', marginTop: '2%' }}>
                                        Frequently Asked Questions About the ITC and Financing
                                    </p>
                                    <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px' }}>
                                        <strong>What is the Solar Investment Tax Credit?</strong>
                                    </h3>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', marginTop: '2%' }}>
                                        The Solar Investment Tax Credit (ITC) is a federal tax credit that you may be able to claim on your federal income taxes for a portion
                                        of the cost of a solar photovoltaic (PV) system. Please consult your tax advisor for any additional guidance.
                                    </p>
                                    <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px' }}>
                                        <strong>When does the Solar ITC EXPIRE or CHANGE?</strong>
                                    </h3>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', marginTop: '2%' }}>
                                        The solar investment tax credit will return to 30% of the cost of the system effective as of January 1, 2022 and remain in effect at that
                                        rate through December 31, 2032. The new tax credit will retroactively apply to any consumers who purchased and placed a solar
                                        system in service in 2022. Effective January 1, 2033, the tax credit will decrease from 30% to 26%. The tax credit will further reduce to
                                        22% effective January 1, 2034, before being fully phased out in 2035. Please consult your tax advisor for any additional guidance.
                                    </p>
                                    <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px' }}>
                                        <strong>How do I know if I’m eligible for the Solar ITC?</strong>
                                    </h3>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', marginTop: '2%' }}>
                                        You may qualify for certain federal, state, local, or other rebates, tax credits or incentives. Sunlight makes no representation or
                                        warranty as to whether any such credits will be available to you. Please consult your tax advisor for any additional guidance.
                                    </p>
                                    <h3 style={{ textAlign: "left", whiteSpace: "pre-wrap", fontSize: '30px' }}>
                                        <strong>What if I have more questions?</strong>
                                    </h3>
                                    <p style={{ whiteSpace: "pre-wrap", fontSize: '16px', marginTop: '2%' }}>
                                        You can also check out our FAQ page for more answers to commonly asked questions. We suggest getting in touch with us so we
                                        can build out a free solar design for your home. This allows us to answer questions more specifically to your home and energy
                                        needs. You can call us at 866-435-4648 or complete a quick form to request a quote.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
