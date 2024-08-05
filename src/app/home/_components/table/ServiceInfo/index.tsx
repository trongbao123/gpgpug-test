import React from "react";
import "./styles.scss";

const ServiceInfoBox = () => {
    const totalService = 14
    const isServiceChangeDown = true
    return (
        <div className="service-info-box">
            <div className="service-info">
                <div className="service-label">Total Service time</div>
                <div className="service-value">
                    29<span className="unit">D</span> 16<span className="unit">Hrs</span> 46<span className="unit">Mins</span>
                </div>
            </div>
            <div className="divider"></div>
            <div className="service-info">
                <div className="service-label">Total Service count</div>
                <div className="service-value">
                    {totalService} {isServiceChangeDown ? <span className="service-change-down">▲ 1</span> : <span className="service-change-up">▲ 1</span>}
                </div>
            </div>
        </div>
    );
};

export default ServiceInfoBox;
