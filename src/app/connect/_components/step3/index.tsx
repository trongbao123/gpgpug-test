import Image from "next/image";
import "./index.scss";
import Congratulations from "../congratulations";
type Props = {
    active: number;
    handleDeviceName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    deviceName: string;
    congratulation: string;
};
const Step3: React.FC<Props> = ({ active, handleDeviceName, deviceName, congratulation }) => {
    return congratulation !== "congratulation" ? (
        <div className="step3-container">
            <div className="step3">
                <div className="step3-header">
                    <p>Your connected device</p>
                </div>
                <div className="step3-body">
                    <div className="step3-body-item">
                        <div className="step3-body-item-content">GPU Chip</div>
                        <div className="step3-body-item-icon">
                            <Image src={"/images/device.svg"} alt="logo" width={20} height={20} />
                            RTX 4000 SFF Ada Generation
                        </div>
                    </div>
                    <div className="step3-body-item">
                        <div className="step3-body-item-content">Device ID</div>
                        <div className="step3-body-item-icon">54FD432FCAJ</div>
                    </div>
                </div>
            </div>
            <div className="step3">
                <div className="step3-body">
                    <div className="step3-body-item">
                        <div className="step3-body-item-content">Device Name</div>
                        <input
                            value={deviceName}
                            onChange={handleDeviceName}
                            className="step3-body-item-icon"
                            placeholder="Enter Device Name"
                        />
                    </div>
                </div>
            </div>
            <div className="step3">
                <div className="step3-body">
                    <div className="step3-body-item">
                        <div className="step3-body-item-footer">
                            <Image src={"/images/warning.svg"} alt="logo" width={24} height={24} />
                            It may take 5-10 minutes to complete the connection. If you encounter any issues with the
                            connection, please contact the support team.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Congratulations />
    );
};

export default Step3;
