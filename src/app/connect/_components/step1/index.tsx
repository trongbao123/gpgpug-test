import { steps } from "@component/constants/constant";
import Image from "next/image";
import "./index.scss";
type Props = {
    active: number;
    handleChecked: (e: number | string) => void;
    activeItem:  string | number | null;
};
const Step1: React.FC<Props> = ({ active, activeItem, handleChecked }) => {
    return (
        <div className="right">
            {steps[active]?.content?.map((item) => {
                return (
                    <div
                        onClick={() => handleChecked(item.title)}
                        key={item.id}
                        style={{ cursor: "pointer" }}
                        className="right-item"
                    >
                        <div className="logo-item">
                            <Image src={item?.img} alt="logo" width={32} height={32} />
                            <p> {item?.title}</p>
                        </div>
                        <input
                            onChange={() => handleChecked(item.title)}
                            checked={activeItem === item.title}
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
