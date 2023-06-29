import {
	Avatar,
	Box,
	ButtonBase,
	Card,
	CardContent,
	Chip,
	Typography,
} from "@mui/material";
import { Draggable } from "react-beautiful-dnd";

import { TaskType } from "../../types";
import { priorities } from "../../constants";
import { PriorityChip } from "../priority-chip";
import { useActions } from "../../hooks";

interface TaskProps {
	task: TaskType;
	index: number;
}

export const TaskCard: React.FC<TaskProps> = ({ task = {}, index }) => {
	const {
		id,
		task_name: taskName,
		assignee_username: username,
		description,
		priority,
	} = task || {};

	const { getCurrentTask } = useActions();

	return (
		<Draggable draggableId={id.toString()} index={index}>
			{(provided, snapshot) => (
				<Box
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					sx={{
						display: "block",
						textAlign: "left",
						width: "100%",
					}}
					onDoubleClick={() => getCurrentTask(id)}
				>
					<Card
						sx={{
							bgcolor: snapshot.isDragging ? "grey.100" : "white",
							transition: "background-color 0.1s ease",
						}}
					>
						<CardContent>
							<Typography color="text.secondary">{task.task_name}</Typography>
							<Typography variant="body2">{description}</Typography>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									mt: 2,
								}}
							>
								<PriorityChip priority={priority} />
								<Avatar sx={{ width: 24, height: 24, fontSize: 12 }}>
									{username?.charAt(0).toUpperCase()}
								</Avatar>
							</Box>
						</CardContent>
					</Card>
				</Box>
			)}
		</Draggable>
	);
};
