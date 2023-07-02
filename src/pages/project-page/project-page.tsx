import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { DragDropContext, DropResult, DragUpdate } from "react-beautiful-dnd";

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
	const [draggingOverLane, setDraggingOverLane] = useState<number | null>(null);
	useEffect(() => {
		getProject(projectId);
	}, [projectId]);

	const handleDragEnd = ({ destination, source }: DropResult) => {
		setDraggingOverLane(null);
		if (!destination) {
			return;
		}
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

	const handleDragUpdate = ({ destination, source }: DragUpdate) => {
		const { droppableId } = destination || {};
		if (!droppableId) {
			setDraggingOverLane(null);
			return;
		}
		if (parseInt(droppableId) !== draggingOverLane) {
			setDraggingOverLane(parseInt(droppableId));
		}
	};

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
					onDragUpdate={handleDragUpdate}
				>
					{taskStatuses.map(({ statusCode, label }) => (
						<Lane
							key={`lane-${statusCode}`}
							label={label}
							statusCode={statusCode}
							tasks={tasks[statusCode]}
							isDraggingOver={draggingOverLane === statusCode}
						/>
					))}
				</DragDropContext>
			</Box>
		</PageContainer>
	);
};
