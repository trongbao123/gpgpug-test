import Image from "next/image";
import DeviceHistory from "./device-history";

type Props = {
    state: string;
};
const HireStatus: React.FC<Props> = ({ state }) => {
    return (
        <div className="hire-status">
            <div className="left">
                <div className="power">
                    <div className="power-title">G-Power</div>
                    <p>321,466</p>
                </div>
                <div className="left-hire">Hire Status</div>
                <div className="img-word">
                    <Image src={"/images/word.svg"} alt="word" width={272} height={180} />
                </div>
                <div className="left-status">
                    <div className="left-status-item hire">Hire</div>
                    <div className="left-status-item ready">Ready</div>
                    <div className="left-status-item pending">Pending</div>
                </div>
                {/* device condition */}
                <div className="condition">
                    <div className="left-device">Device Condition</div>
                    <div className="left-good">Good</div>
                    <div className="left-description">
                        <div className="left-description-temp pb">
                            <p className="left-description-temp-1">Temperature</p>
                            <p className="left-description-temp-2">70°C</p>
                        </div>
                        <div className="left-description-temp">
                            <p className="left-description-temp-1">Memory Usage</p>
                            <p className="left-description-temp-2">5.45GB</p>
                        </div>
                    </div>
                </div>
                {/* Network Speed */}
                <div className="network">
                    <div className="left-device">Network Speed</div>
                    <div className="network-high">
                        <Image src={"/images/high.svg"} alt="high" width={36} height={36} />
                        <p>High</p>
                    </div>
                    <div className="left-description">
                        <div className="left-description-temp pb">
                            <p className="left-description-temp-1">Upload</p>
                            <p className="left-description-temp-2">452.54/mb</p>
                        </div>
                        <div className="left-description-temp">
                            <p className="left-description-temp-1">Download</p>
                            <p className="left-description-temp-2">72.82/mb</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* device history */}
            <div className="history">
                <p>Device History</p>
                <div className="history-item">3</div>
            </div>

            <DeviceHistory state={state} />
        </div>
    );
};

export default HireStatus;
