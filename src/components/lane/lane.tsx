import { Box, Stack, Typography } from "@mui/material";
import { Droppable, Draggable } from "react-beautiful-dnd";

import { TaskCard } from "../task-card";
import type { TaskType } from "../../types";

interface LaneProps {
	draggingOver: boolean;
	label: string;
	tasks: TaskType[];
	statusCode: number;
}

export const Lane: React.FC<LaneProps> = ({
	isDraggingOver,
	label,
	statusCode,
	tasks = [],
}) => {
	return (
		<Box
			sx={{
				border: 1,
				borderColor: "grey.300",
				borderRadius: 1,
				color: "grey.800",
				px: "4px",
				height: "100%",
				minHeight: "600px",
				bgcolor: isDraggingOver ? "grey.300" : "grey.200",
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
			<Droppable
				droppableId={`${statusCode}`}
				onDragOver={(...args) => console.log(arg)}
			>
				{(provided, snapshot) => (
					<Box
						ref={provided.innerRef}
						{...provided.droppableProps}
						sx={{ height: "100%" }}
					>
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
				)}
			</Droppable>
		</Box>
	);
};
