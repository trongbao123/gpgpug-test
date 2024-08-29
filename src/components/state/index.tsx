import Image from "next/image";
import "./index.scss";

type Props = {
    state: string;
    className?: string;
    children?: React.ReactNode;
};

const stateImages: any = {
    Online: "/images/online.svg",
    Inactive: "/images/Inactive.svg",
    Deleted: "/images/default.svg",
    Paused: "/images/default.svg",
    Blocked: "/images/blocked.svg",
    Offline: "/images/default.svg",
    working: "/images/online.svg",
};

const StateComponent: React.FC<Props> = ({ state, className }) => {
    const stateImg = stateImages[state] || stateImages.Offline;

    let stateClass = `state ${state && state.toLowerCase()}`;

    if (["Deleted", "Paused", "Offline", "pause"].includes(state)) stateClass = "state paused";

    return (
        <div style={{ display: "flex", alignItems: "center" }} className={`${stateClass} ${className || ""}`}>
            <Image src={stateImg} alt={state} width={12} height={12} />
            {state}
        </div>
    );
};

export default StateComponent;
