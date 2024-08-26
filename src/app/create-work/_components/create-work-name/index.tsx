import { stepCreateProject } from "@component/constants/constant";
import "./index.scss";

type Props = {
    active: number;
    handleChecked: (e: number | string) => void;
};

const CreateWorkNamePage = ({ active, handleChecked }: Props) => {
    return (
        <div className="create-work-right">
            {stepCreateProject[active]?.content?.map((item, index) => {
                return (
                    <div
                        key={item.id}
                        style={{ cursor: "pointer" }}
                        className="create-work-right-item"
                    >
                        <input
                            onChange={(e) => handleChecked(e.target.value)}
                            type="text"
                            name="myRadio"
                            placeholder="Project name"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default CreateWorkNamePage;
