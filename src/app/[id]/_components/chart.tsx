import Image from "next/image";

const ChartReward = () => {
    return (
        <div className="reward-chart">
            <div className="reward-chart-header">
                <div>Reward Chart</div>
                <div className="reward-chart-header-right">
                    <div className="fee">
                        <div className="border"></div>
                        <p>Hire Fee</p>
                    </div>
                    <div className="fee">
                        <Image src={"../../../../public/images/fee.svg"} width={10} height={10} alt="fee" />
                        <p>PoT Reward</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartReward;
