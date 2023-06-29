import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { DragDropContext } from "react-beautiful-dnd";

import { taskStatuses } from "../../constants";
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
	const { getProject, reorderProjectTasks, updateProjectTaskStatus } =
		useActions();

	useEffect(() => {
		getProject(projectId);
	}, [projectId]);

	const handleDragEnd = ({ destination, source }) => {
		if (source.droppableId === destination.droppableId) {
			reorderProjectTasks(
				parseInt(source.droppableId),
				source.index,
				destination.index,
			);
			return;
		}
		const { id: taskId } = tasks[source.droppableId][source.index];
		const prevStatus = parseInt(source.droppableId);
		const { index: prevIndex } = source;
		const newStatus = parseInt(destination.droppableId);
		const { index: newIndex } = destination;

		updateProjectTaskStatus(taskId, prevStatus, newStatus, prevIndex, newIndex);
	};

	const handleDragStart = () => {};

	return !project ? (
		<PageContainer>Loading...</PageContainer>
	) : (
		<PageContainer>
			<ProjectHeader
				project={project}
				tasks={Object.values(tasks).flatMap((val) => val)}
			/>
			<Box
				sx={{
					display: "grid",
					gridGap: 10,
					gridTemplateColumns: `repeat(${taskStatuses.length}, 1fr)`,
				}}
			>
				<DragDropContext
					onDragEnd={handleDragEnd}
					onDragStart={handleDragStart}
				>
					{taskStatuses.map(({ statusCode, label }) => (
						<Lane
							key={`lane-${statusCode}`}
							label={label}
							statusCode={statusCode}
							tasks={tasks[statusCode]}
						/>
					))}
				</DragDropContext>
			</Box>
		</PageContainer>
	);
};
