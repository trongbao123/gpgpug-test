import StateComponent from "@component/components/state";

type Props = {
    state: string;
};
const DeviceHistory: React.FC<Props> = ({ state }) => {
    return (
        <div className="device-history">
            <div className="device-history-state">
                <StateComponent state={state} />
            </div>
            <div className="device-history-text">The device has been employed</div>
            <div className="device-history-time">2024-03-21 13:52</div>
        </div>
    );
};
export default DeviceHistory;
