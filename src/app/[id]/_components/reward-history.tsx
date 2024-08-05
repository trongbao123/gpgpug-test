import StateComponent from "@component/components/state";
import { logo } from "@component/constants";
import Image from "next/image";

const RewardHistory = () => {
    return (
        <div className="reward-chart">
            <div className="reward-chart-header">
                <div className="reward-chart-title">Reward History</div>
                <Image src={"/images/menu-table.svg"} alt={"reward"} width={32} height={32} />
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Status</th>
                        <th>PoT Hash</th>
                        <th>G-Power</th>
                        <th>Chip</th>
                        <th>Reward</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hired</td>
                        <td>
                            <StateComponent state="Online" />
                        </td>
                        <td>240713-12:00</td>
                        <td>52,352</td>
                        <td>
                            <div className="chip">
                                <Image src={(logo as any)["M2 Pro"]} alt="logo" width={16} height={16} />
                                <p>M2 Pro</p>
                            </div>
                        </td>
                        <td>43 GP</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RewardHistory;
