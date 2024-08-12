import Image from "next/image";
import "./index.scss";
const Congratulations = () => {
    return (
        <div className="congratulations">
            <div className="congratulations-header">Congratulations</div>
            <div className="congratulations-title">The device has been successfully connected!</div>
            <div className="congratulations-body">
                <p>Onlyone-mac</p>
                <div className="congratulations-body-item-icon">
                    <Image src={"/images/device.svg"} alt="logo" width={20} height={20} />
                    RTX 4000 SFF Ada Generation
                </div>
                <div className="congratulations-body-item-icon">
                    <span>Device ID:</span> 54FD432FCAJ
                </div>
            </div>
        </div>
    );
};

export default Congratulations;
