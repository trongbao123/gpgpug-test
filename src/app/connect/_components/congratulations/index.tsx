import Image from "next/image";
import "./index.scss";
import { logo } from "@component/constants/constant";

type Props = {
    name: any;
};
const Congratulations: React.FC<Props> = ({ name }) => {
    return (
        <div className="congratulations">
            <div className="congratulations-header">Congratulations</div>
            <div className="congratulations-title">The device has been successfully connected!</div>
            <div className="congratulations-body">
                <p>{name?.name}</p>
                <div className="congratulations-body-item-icon">
                    <Image src={(logo as any)[name?.os]} alt="logo" width={20} height={20} />
                    {name?.deviceType}
                </div>
                <div className="congratulations-body-item-icon">
                    <span>Device ID:</span> {name?.id}
                </div>
            </div>
        </div>
    );
};

export default Congratulations;
