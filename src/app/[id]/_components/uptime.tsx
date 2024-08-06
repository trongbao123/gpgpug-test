import Image from "next/image";

const UpTime = () => {
    return (
        <div className="uptime">
            <div className="uptime-bg">
                <div className="uptime-text">
                    <h2>Uptime</h2>
                    <p>99% Last 24 hours</p>
                </div>
                <div className="uptime-line">
                    {Array.from({ length: 25 }, (_, index) => {
                        return <div key={index} className="uptime-line-item"></div>;
                    })}
                </div>
            </div>
            <div className="uptime-bg">
                <div className="uptime-text">
                    <h2>PoT Reward</h2>
                </div>
                <div className="uptime-pot">
                    <p>3,463,000</p>
                    <Image src={"/images/icon-footer.svg"} alt="icon-footer" width={18} height={17} />
                </div>
            </div>
            <div className="uptime-bg">
                <div className="uptime-total">
                    <div className="uptime-total-item">
                        <h1>Total Service time</h1>
                        <p>29D 16Hrs 46Mins</p>
                    </div>
                    <div className="uptime-total-item">
                        <h1>Total Service count</h1>
                        <div className="count">
                            <p>14</p>
                            <Image src={"/images/arrowtop.svg"} alt="arrowtop" width={10} height={10} />
                            <span>1</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uptime-bg">
                <div className="uptime-text">
                    <h2>Hire Fee</h2>
                </div>
                <div className="uptime-pot">
                    <p>942,003</p>
                    <Image src={"/images/free.svg"} alt="icon-footer" width={24} height={24} />
                </div>
            </div>
        </div>
    );
};

export default UpTime;
