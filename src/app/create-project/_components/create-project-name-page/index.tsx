import { stepCreateProject } from "@component/constants/constant";
import Image from "next/image";
import React from "react";
import "./index.scss";

type Props = {
    active: number;
    handleChecked: (e: number) => void;
};

const CreateProjectNamePage = ({ active, handleChecked }: Props) => {
    return (
        <div className="right">
            {stepCreateProject[active]?.content?.map((item, index) => {
                return (
                    <div
                        onClick={() => handleChecked(index)}
                        key={item.id}
                        style={{ cursor: "pointer" }}
                        className="right-item"
                    >
                        <input
                            onChange={() => handleChecked(index)}
                            type="text"
                            name="myRadio"
                            className="text-input"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default CreateProjectNamePage;
