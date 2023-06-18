import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { lanes } from "../../constants";
import { Lane, PageContainer } from "../../components";

export const ProjectPage: React.FC = () => {
	const { projectId } = useParams();
	const [projectData, setProjectData] = useState(null);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fetchProject = async () => {
			const res = await fetch(
				`http://localhost:6300/projects/projectId/${projectId}`,
			);
			const { project, tasks: fetchedTasks } = await res.json();
			setProjectData(project);
			setTasks(fetchedTasks);
		};

		fetchProject();
	}, [projectId]);

	return projectData ? (
		<PageContainer>
			<Typography>{projectData.project_name}</Typography>
			<Box
				sx={{
					display: "grid",
					gridGap: 10,
					gridTemplateColumns: `repeat(${Object.keys(lanes).length}, 1fr)`,
				}}
			>
				{Object.values(lanes).map((lane) => (
					<Lane
						key={lane.label}
						label={lane.label}
						tasks={tasks.filter((task) => task.status === lane.statusCode)}
					/>
				))}
			</Box>
		</PageContainer>
	) : (
		<PageContainer>Loading</PageContainer>
	);
};
