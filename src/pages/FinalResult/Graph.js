import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { year: '2025', solarCost: 3000, withoutSolar: 4000 },
    { year: '2026', solarCost: 3200, withoutSolar: 4200 },
    { year: '2027', solarCost: 3400, withoutSolar: 4500 },
    { year: '2028', solarCost: 3600, withoutSolar: 4800 },
    { year: '2029', solarCost: 3800, withoutSolar: 5100 },
    { year: '2030', solarCost: 4000, withoutSolar: 5400 },
    { year: '2031', solarCost: 4200, withoutSolar: 5700 },
    { year: '2032', solarCost: 4400, withoutSolar: 6000 },
    { year: '2033', solarCost: 4600, withoutSolar: 6300 },
    { year: '2034', solarCost: 4800, withoutSolar: 6600 },
    { year: '2035', solarCost: 5000, withoutSolar: 7000 },
    { year: '2040', solarCost: 6000, withoutSolar: 8000 },
    { year: '2045', solarCost: 7000, withoutSolar: 9000 },
];

export default function Graph() {
    const [chartWidth, setChartWidth] = useState(window.innerWidth > 700 ? 700 : window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setChartWidth(window.innerWidth > 1000 ? 1000 : window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <section className="page-section" style={{ marginTop: '3%' }}>
                <div className="content-wrapper py-5" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                    <div data-fluid-engine="true">
                        <div className="row">
                            <div className="col-md-6">
                                <p style={{ color: 'rgba(13, 22, 71, 1)', fontWeight: '500', fontSize: '26px' }}>Revolution Solar</p>
                                <h3 style={{ color: 'rgba(147, 204, 15, 1)', fontSize: '32px' }}><strong>30 Year Cost Analysis</strong></h3>
                            </div>
                            <div className="col-md-6">
                                <p style={{ color: 'rgba(8, 11, 29, 1)', fontSize: '16px' }}>
                                    Over the next 30 years your energy bill is likely to double in cost
                                    based on an annual 3.5% US average increase. Switching to solar
                                    can help cut those costs by over 80%!
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center" style={{ marginTop: '5%' }}>
                            <div className="col-12">
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center' }}>
                                        <BarChart
                                            width={chartWidth} // Use the state variable for width
                                            height={400}
                                            data={data}
                                            margin={{
                                                top: 20,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="year" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="solarCost" fill="#7ed321" />
                                            <Bar dataKey="withoutSolar" fill="#0a1931" />
                                        </BarChart>
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