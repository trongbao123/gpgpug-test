import { steps } from "@component/constants/constant";
import "./index.scss";
import Image from "next/image";
type Props = {
    active: number;
};
const Step2: React.FC<Props> = ({ active }) => {
    return (
        <div className="step2">
            <div className="step2-header">
                <p>Download docker desktop</p>
            </div>
            <div className="step2-body">
                {steps[active]?.content.map((item, index) => {
                    return (
                        <div key={item?.id} className="step2-body-item">
                            <div className="step2-body-item-content">
                                {item?.id}. {item?.title}
                            </div>
                            <div className="step2-body-item-icon">
                                {item?.link}

                                <Image src={item?.img} alt="logo" width={28} height={28} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Step2;
