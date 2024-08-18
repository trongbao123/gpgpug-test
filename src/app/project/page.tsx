import ListProject from "./_components/list-project/listProject";
import ProjectContainer from "./_components/project-container/projectContainer";
import Rate from "./_components/rate/page";
import Search from "./_components/search";
import "./index.scss";
const Project = () => {
    return (
        <ProjectContainer>
            <Rate />
            <div className="container-project">
                <Search />
                <ListProject />
            </div>
        </ProjectContainer>
    );
};

export default Project;
