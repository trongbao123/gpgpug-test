import React from "react";
import "./styles.scss";

const UptimeMonitor = () => {
    const totalBlocks = 20;
    const uptimePercentage = 99;
    const completeBlocks = Math.floor((uptimePercentage / 100) * totalBlocks);
    const incompleteBlocks = totalBlocks - completeBlocks;


    return (
        <div className="uptime-monitor">
            <div className="uptime-header">
                <span className="uptime-label">Uptime</span>
                <span className="uptime-percentage">{uptimePercentage}% Last 24 hours</span>
            </div>
            <div className="uptime-grid">
                {Array(incompleteBlocks)
                    .fill("")
                    .map((_, index) => (
                        <div key={index} className="uptime-block down"></div>
                    ))}
                {Array(completeBlocks)
                    .fill("")
                    .map((_, index) => (
                        <div key={index} className="uptime-block up"></div>
                    ))}
            </div>
        </div>
    );
};

export default UptimeMonitor;
