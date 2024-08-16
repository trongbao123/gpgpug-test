import Image from "next/image";
import "./index.scss";

type InformationProps = {
    [key: string]: any;
};
const InformationProject: React.FC<InformationProps> = ({ projectId, resulting, createDate }) => {
    return (
        <div className="infoproject">
            <div className="infoproject-description">
                <div className="infoproject-description-item">
                    <p>Resulting capacity: </p>
                    <p style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        {resulting} <Image src={"/images/cloud.svg"} width={16} height={16} alt="gpu" />
                    </p>
                </div>
                <div className="infoproject-description-item">
                    <p>Project ID: </p>
                    <p>{projectId}</p>
                </div>
                <div className="infoproject-description-item">
                    <p>Create date: </p>
                    <p>{createDate}</p>
                </div>
            </div>
            <div className="infoproject-right">
                <div className="infoproject-item">
                    <Image src={"/images/delete.svg"} width={16} height={16} alt="delete" />
                    <p>Terminate</p>
                </div>
            </div>
        </div>
    );
};

export default InformationProject;
