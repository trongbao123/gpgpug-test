import ChartReward from "./chart";
import Reboot from "./re-boot";
import RewardHistory from "./reward-history";
import UpTime from "./uptime";

const Reward = () => {
    return (
        <div className="reward">
            <ChartReward />
            <UpTime />
            <Reboot />
            <RewardHistory />
        </div>
    );
};

export default Reward;
