import StateComponent from "@component/components/state";
import { logo, provider } from "@component/constants/constant";

import Image from "next/image";

const Card = () => {
    const renderCard = () => {
        return provider.map((item) => {
            return (
                <div className="card" key={item.key}>
                    <div className="card-header">
                        <div className="card-header-left">
                            <h1>Device Name</h1>
                            <p>{item.name}</p>
                        </div>
                        <Image
                            style={{ cursor: "pointer" }}
                            src="/images/action.svg"
                            width={24}
                            height={24}
                            alt="menu"
                        />
                    </div>
                    <div className="card-body">
                        <div className="card-body-item">
                            <div className="card-body-item-left">
                                <h1>State:</h1>
                                <StateComponent state={item.state} />
                            </div>
                            <div className="card-body-item-left">
                                <h1>Network:</h1>
                                <div className="chip-container">
                                    <Image src={"/images/network.svg"} alt="logo" width={20} height={20} />
                                    <p>{item.network}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body-uptime">
                            <h1>Uptime:</h1>
                            <div className="card-body-uptime-content">
                                <p>{item.date}</p>D<p>{item.hour}</p>Hrs
                                <p>{item.min}</p>Mins
                            </div>
                        </div>
                        <div className="card-body-line">
                            <div className="chip-container">
                                <Image src={(logo as any)[item.chip]} alt="logo" width={16} height={16} />
                                <p>{item.chip}</p>
                            </div>
                            <span>{item.ulti}</span>
                        </div>
                        <div className="card-body-bottom">
                            <div className="card-body-bottom-left">
                                <h1>Hire Status:</h1>
                                <div className="pending"> Pending</div>
                            </div>
                            <div className="card-body-bottom-left">
                                <h1>Pool Type:</h1>
                                <p className="pool"> {item.pool}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };
    return <>{renderCard()}</>;
};
export default Card;
