"use client";
import { project } from "@component/constants/constant";
import "./index.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
const ListProject = () => {
    const router = useRouter();
    const renderProject = () => {
        return project.map((item) => {
            return (
                <div key={item.id} className="project-list-item">
                    <div className="item-header">
                        <div className="item-header-left">
                            <span>{item.name}</span>
                            <p>{item.createDate}</p>
                        </div>
                        <Image
                            style={{ cursor: "pointer" }}
                            src="/images/action.svg"
                            width={24}
                            height={24}
                            alt="menu"
                            onClick={() => router.push(`/project/${item.id}`)}
                        />
                    </div>
                    <div className="billing-data">
                        <div className="billing-data-content">
                            Work: <p>{item.work}</p>
                        </div>
                        <div className="billing-data-content">
                            Data: <p>{item.data}</p>{" "}
                        </div>
                        <div className="billing-data-content">
                            Billing: <p>{item.billing}</p>
                        </div>
                    </div>
                    <div className="item-line"></div>
                    <div className="captancy">
                        <p>Resulting capacity</p>
                        <div className="data-result">
                            <p>{item.resulting}</p>
                            <Image src="/images/cloud.svg" width={16} height={16} alt="cloud" />
                        </div>
                    </div>
                </div>
            );
        });
    };
    return <div className="project-list">{renderProject()}</div>;
};

export default ListProject;
