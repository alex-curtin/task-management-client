import { Box, Stack, Typography } from "@mui/material";
import { Droppable, Draggable } from "react-beautiful-dnd";

import { TaskCard } from "../task-card";
import type { TaskType } from "../../types";

interface LaneProps {
	label: string;
	tasks: TaskType[];
	statusCode: number;
}

export const Lane: React.FC<LaneProps> = ({
	label,
	statusCode,
	tasks = [],
}) => {
	return (
		<Droppable droppableId={`${statusCode}`}>
			{(provided, snapshot) => (
				<div ref={provided.innerRef} {...provided.droppableProps}>
					<Box
						sx={{
							border: 1,
							borderColor: "grey.300",
							borderRadius: 1,
							color: "grey.800",
							px: "4px",
							height: "100%",
							bgcolor: snapshot.isDraggingOver ? "grey.300" : "grey.200",
							transition: "background-color 0.1s ease",
						}}
					>
						<Typography
							sx={{
								textTransform: "uppercase",
								textAlign: "center",
								my: 1,
							}}
						>
							{label}
						</Typography>
						<Stack
							spacing={1}
							sx={{
								height: "100%",
							}}
						>
							{tasks.map((task, index) => (
								<TaskCard key={task.id?.toString()} task={task} index={index} />
							))}
							{provided.placeholder}
						</Stack>
					</Box>
				</div>
			)}
		</Droppable>
	);
};
