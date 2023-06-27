import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { lanes } from "../../constants";
import { Lane, PageContainer, ProjectHeader } from "../../components";
import { useActions, useSelector } from "../../hooks";
import {
	selectLoadingState,
	selectProjectState,
	selectTasksState,
} from "../../state";

export const ProjectPage: React.FC = () => {
	const { projectId } = useParams();
	const { project, tasks } = useSelector(selectProjectState);
	const { fetchingProject = false } = useSelector(selectLoadingState);
	const { getProject } = useActions();

	useEffect(() => {
		getProject(projectId);
	}, [projectId]);

	return !project ? (
		<PageContainer>Loading...</PageContainer>
	) : (
		<PageContainer>
			<ProjectHeader project={project} tasks={tasks} />
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
	);
};
