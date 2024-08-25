import Image from "next/image";
import "./index.scss";

type InformationProps = {
    [key: string]: any;
};
const InformationWork: React.FC<InformationProps> = ({ projectId, resulting, createDate }) => {
    return (
        <div className="infowork">
            <div className="infowork-description">
                <div className="infowork-description-item">
                    <p>Project ID: </p>
                    <p>{projectId}</p>
                </div>
                <div className="infowork-description-item">
                    <p>Create date: </p>
                    <p>{createDate}</p>
                </div>
            </div>
            <div className="infowork-right">
                <div className="infowork-item">
                    <Image src={"/images/delete.svg"} width={16} height={16} alt="delete" />
                    <p>Terminate</p>
                </div>
            </div>
        </div>
    );
};

export default InformationWork;
