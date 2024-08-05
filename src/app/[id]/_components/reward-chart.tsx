

import MixedChart from "./MixedChart";
import InfoBox from "./InfoBox";
import Reboot from "./re-boot";
import RewardHistory from "./reward-history";
import ServiceInfoBox from "./ServiceInfo";
import UpTime from "./uptime";
import UptimeMonitor from "./UptimeMonitor";

const Reward = () => {
    return (
        <div className="reward">
            <MixedChart />
            <div className="uptime-reward">
                <UptimeMonitor />
                <InfoBox title="PoT Reward" value="3,463,000" icon="/images/image.png" />
            </div>
            <div className="total-service">
                <ServiceInfoBox />
                <InfoBox title="Hire Fee" value="942,003" icon="/images/token.png" />
            </div>
            
            <Reboot />
            <RewardHistory />
        </div>
    );
};

export default Reward;
