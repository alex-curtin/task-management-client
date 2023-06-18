import { useEffect } from "react";
import { Box } from "@mui/material";

import { useActions, useSelector } from "../../hooks";
import { selectProjects, selectAuthState } from "../../state";
import { ProjectsList, SignIn, PageContainer } from "../../components";

export const HomePage: React.FC = () => {
	const { getAllProjects, getCurrentUserProjects } = useActions();
	const projects = useSelector(selectProjects);
	const { currentUser } = useSelector(selectAuthState);

	useEffect(() => {
		if (currentUser) {
			getCurrentUserProjects(currentUser.id);
		} else {
			getAllProjects();
		}
	}, []);

	return (
		<PageContainer>
			{currentUser ? null : <SignIn />}
			<ProjectsList projects={projects} />
		</PageContainer>
	);
};
