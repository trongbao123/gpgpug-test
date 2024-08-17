import HeaderMain from "../header-main/page";
import "./index.scss";
type Props = {
    children?: React.ReactNode;
};
const ProjectContainer: React.FC<Props> = ({ children }) => {
    return (
        <div className="project">
            <div className="overlay" />
            <div className="content">
                <HeaderMain />
                {children}
            </div>
        </div>
    );
};

export default ProjectContainer;
