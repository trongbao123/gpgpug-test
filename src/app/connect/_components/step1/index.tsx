import { steps } from "@component/constants/constant";
import Image from "next/image";
import "./index.scss";
type Props = {
    active: number;
    checked?: boolean;
    handleChecked: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Step1: React.FC<Props> = ({ active, checked, handleChecked }) => {
    return (
        <div className="right">
            {steps[active]?.content?.map((item) => {
                return (
                    <div key={item.id} className="right-item">
                        <div className="logo-item">
                            <Image src={item?.img} alt="logo" width={32} height={32} />
                            <p> {item?.title}</p>
                        </div>
                        <input
                            onChange={handleChecked}
                            checked={checked}
                            type="radio"
                            name="myRadio"
                            className="radio-input"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Step1;
