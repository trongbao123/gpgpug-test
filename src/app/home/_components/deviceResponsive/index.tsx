import Image from "next/image";
import "./index.scss";
import { provider } from "@component/constants";
import StateComponent from "@component/components/state";
import Card from "./_components/card";
const DeviceResponsive = () => {
    return (
        <div className="device-container">
            <div className="device-status">
                <h1 className="device-status-text">Device status</h1>
                <Image src={"/images/menu-table.svg"} alt="word" width={32} height={32} />
            </div>
            <div className="search">
                <Image src="/images/search.svg" width={20} height={20} alt="search" />
                <input placeholder="Search Device Name" />
            </div>
            <Card />
        </div>
    );
};

export default DeviceResponsive;
