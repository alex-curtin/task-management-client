import { Link } from "react-router-dom";
import { Box, Stack, Typography, Paper } from "@mui/material";

import { Project } from "../../state/reducers/projectReducer";

interface ProjectsListProps {
	projects: Project[];
}

export const ProjectsList: React.FC<ProjectsListProps> = ({
	projects = [],
}) => {
	return (
		<Box sx={{ width: "50%", p: 2 }}>
			<Stack spacing={2}>
				{projects.map((project) => (
					<Link key={project.id} to={`/project/${project.id}`}>
						<Paper sx={{ p: 2 }}>
							<Typography>{project.project_name}</Typography>
						</Paper>
					</Link>
				))}
			</Stack>
		</Box>
	);
};
