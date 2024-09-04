import { stepCreateProject } from "@component/constants/constant";
import "./index.scss";

type Props = {
    active: number;
    handleChecked: (e: number | string) => void;
    [key: string]: any;
};

const CreateWorkNamePage = ({ active, handleChecked, activeItem }: Props) => {
    return (
        <div className="create-work-right">
            {stepCreateProject[active]?.content?.map((item, index) => {
                return (
                    <div key={item.id} style={{ cursor: "pointer" }} className="create-work-right-item">
                        <input
                            onChange={(e) => handleChecked(e.target.value)}
                            type="text"
                            name="myRadio"
                            placeholder="Work name"
                            value={activeItem}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default CreateWorkNamePage;
