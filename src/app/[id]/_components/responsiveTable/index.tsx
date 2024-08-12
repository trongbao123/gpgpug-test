import StateComponent from "@component/components/state";
import { logo } from "@component/constants/constant";
import Image from "next/image";

const ResponsiveTable = () => {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header-left">
                    <h1>Type</h1>
                    <p>Hired</p>
                </div>
                <Image style={{ cursor: "pointer" }} src="/images/action.svg" width={24} height={24} alt="menu" />
            </div>
            <div className="card-body">
                <div className="card-body-item">
                    <div className="card-body-item-left">
                        <h1>Status:</h1>
                        <StateComponent state="Online" />
                    </div>
                    <div className="card-body-item-left">
                        <h1>PoT Hash:</h1>
                        240713-12:00
                    </div>
                </div>
                <div className="card-body-uptime">
                    <h1>G-Power:</h1>
                    52,352
                </div>
                <div className="card-body-line">
                    <div className="chip-container">
                        <Image src={(logo as any)["M2 Pro"]} alt="logo" width={16} height={16} />
                        <p>M2 Pro</p>
                    </div>
                </div>
                <div className="card-body-bottom">
                    <div className="card-body-bottom-left">
                        <h1>Reward:</h1>
                        43 GP
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveTable;
