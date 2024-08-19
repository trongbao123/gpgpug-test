"use client";
import Image from "next/image";
import "./index.scss";
import Congratulations from "../congratulations";
import { useSearchParams } from "next/navigation";
import { detailDevice } from "@component/services/connect";
import { useEffect, useState } from "react";
import Notification from "@component/components/common/notification";
import { logo } from "@component/constants/constant";
type Props = {
    active: number;
    handleDeviceName: any;
    deviceName: boolean;
    congratulation: string;
};
const Step3: React.FC<Props> = ({ active, handleDeviceName, deviceName, congratulation }) => {
    const searchParams = useSearchParams();
    const deviceCode = searchParams.get("deviceName");

    const [deviceType, setDeviceType] = useState<any>(null);
    console.log(deviceCode);

    const getDetailDevice = async () => {
        try {
            const response: any = await detailDevice({
                params: {
                    deviceId: deviceCode,
                },
            });
            if (response && response.result) {
                setDeviceType(response.result);
                handleDeviceName(true);
            } else {
                throw response;
            }
        } catch (error: any) {
            Notification({
                type: "error",
                message: error.message || error,
                placement: "top",
            });
        }
    };

    useEffect(() => {
        if (deviceCode !== "Windows") getDetailDevice();
    }, [deviceCode]);

    return (
        <div className="step3-container">
            <div className="step3">
                <div className="step3-header">
                    <p>Your connected device</p>
                </div>
                <div className="step3-body">
                    <div className="step3-body-item">
                        <div className="step3-body-item-content">GPU Chip</div>
                        <div className="step3-body-item-icon">
                            <Image src={(logo as any)[deviceType?.os]} alt="logo" width={20} height={20} />
                            {deviceType?.deviceType}
                        </div>
                    </div>
                    <div className="step3-body-item">
                        <div className="step3-body-item-content">Device ID</div>
                        <div className="step3-body-item-icon">{deviceType?.id}</div>
                    </div>
                    <div className="step3-body-item">
                        <div className="step3-body-item-content">Device Name</div>
                        <input
                            value={deviceType?.name}
                            className="step3-body-item-icon"
                            placeholder="Enter Device Name"
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
    // return congratulation !== "success" ? (

    // ) : (
    //     <Congratulations name={deviceType} />
    // );
};

export default Step3;
