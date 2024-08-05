import Image from "next/image";

const Reboot = () => {
    return (
        <div className="reward-chart">
            <div className="reward-chart-header">
                <div className="reward-chart-title">Re-boot Command</div>
                <Image src={"/images/arrowOutline.svg"} alt={"reward"} width={12} height={12} />
            </div>

            <div className="reboot">
                <div className="reboot-text">
                    <p className="reboot-header">STEP 1</p>
                    <p className="reboot-sub">Download Docker</p>
                </div>

                <div className="reboot-desc">
                    <p className="reboot-desc-text">
                        •/io_net_launch_binary_mac --device_id=f1f71798-2888-43f3-86ed-1c487f2c7354--user_id=117f9a3b-a4dd-48b3-bOd2-c57caa0125b5
                        {"--operating_system='macOS'"} --usegpus=false {"--device_name='mac-mini-3'"}
                    </p>
                    <Image src={"/images/copy.svg"} alt="copy" width={24} height={24} />
                </div>
            </div>

            <div className="reboot">
                <div className="reboot-text">
                    <p className="reboot-header">STEP 2</p>
                    <p className="reboot-sub">Download Docker</p>
                </div>

                <div className="reboot-desc">
                    <p className="reboot-desc-text">
                        •/io_net_launch_binary_mac --device_id=f1f71798-2888-43f3-86ed-1c487f2c7354--user_id=117f9a3b-a4dd-48b3-bOd2-c57caa0125b5
                        {"--operating_system='macOS'"} --usegpus=false {"--device_name='mac-mini-3'"}
                    </p>
                    <Image src={"/images/copy.svg"} alt="copy" width={24} height={24} />
                </div>
            </div>

            <div className="reboot">
                <div className="reboot-text">
                    <p className="reboot-header">STEP 3</p>
                    <p className="reboot-sub">Download Docker</p>
                </div>

                <div className="reboot-desc">
                    <p className="reboot-desc-text">
                        •/io_net_launch_binary_mac --device_id=f1f71798-2888-43f3-86ed-1c487f2c7354--user_id=117f9a3b-a4dd-48b3-bOd2-c57caa0125b5
                        {"--operating_system='macOS'"} --usegpus=false {"--device_name='mac-mini-3'"}
                    </p>
                    <Image src={"/images/copy.svg"} alt="copy" width={24} height={24} />
                </div>
            </div>
        </div>
    );
};

export default Reboot;
