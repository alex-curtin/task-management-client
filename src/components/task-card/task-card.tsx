import {
	Avatar,
	Box,
	ButtonBase,
	Card,
	CardContent,
	Chip,
	Typography,
} from "@mui/material";

import { TaskType } from "../../types";
import { priorities } from "../../constants";
import { PriorityChip } from "../priority-chip";
import { useActions } from "../../hooks";

interface TaskProps {
	task: TaskType;
}

export const TaskCard: React.FC<TaskProps> = ({ task }) => {
	const {
		id,
		task_name: taskName,
		assignee_username: username,
		description,
		priority,
	} = task || {};

	const { getCurrentTask } = useActions();

	return (
		<ButtonBase
			disableRipple
			sx={{ display: "block", textAlign: "left" }}
			onDoubleClick={() => getCurrentTask(id)}
		>
			<Card>
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
		</ButtonBase>
	);
};
