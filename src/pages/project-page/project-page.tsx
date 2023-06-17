import { useParams } from "react-router-dom";

export const ProjectPage: React.FC = () => {
	const { projectId } = useParams();
	return <div>this is a project page from project {projectId}</div>;
};
