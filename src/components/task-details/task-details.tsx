import { useEffect } from "react";
import { Box, ButtonBase, Divider, Stack, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { useSelector, useActions } from "../../hooks";
import {
	selectLoadingState,
	selectProjectState,
	selectTasksState,
} from "../../state";
import { TasksState } from "../../state/reducers/tasksReducer";
import { TaskDetailsType } from "../../types";
import { taskStatuses } from "../../constants";

import { PriorityChip } from "../priority-chip";

export const TaskDetails: React.FC = () => {
	const { currentTask } = useSelector(selectTasksState);
	const { fetchingCurrentTask } = useSelector(selectLoadingState);
	const { getCurrentTask, setCurrentTask } = useActions();

	const {
		assignee,
		created_by: createdBy,
		created_at: createdAt,
		description,
		id,
		priority,
		project_id: projectId,
		project_name: projectName,
		status,
		task_name: taskName,
	} = currentTask || {};

	// using hardcoded values for now
	const { label: statusLabel } = taskStatuses.find(
		(st) => st.statusCode === status,
	);

	if (fetchingCurrentTask) {
		return <div>loading</div>;
	}

	if (!fetchingCurrentTask && !currentTask) {
		return <div>Can't find that task</div>;
	}

	return (
		<Stack sx={{ p: 2 }} spacing={1}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					mb: 1,
				}}
			>
				<Typography variant="h5">{taskName}</Typography>
				<ButtonBase onClick={() => setCurrentTask(null)}>
					<Close />
				</ButtonBase>
			</Box>

			<Divider />

			<Box sx={{ minHeight: "150px" }}>
				<Typography variant="h6">Description</Typography>
				<Typography>{description}</Typography>
			</Box>
			<Divider />

			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-end",
				}}
			>
				<Box
					sx={{
						display: "flex",
						gap: 1,
						pb: 1,
						alignItems: "center",
					}}
				>
					<Link to={`/project/${projectId}`}>
						<Typography
							variant="body2"
							sx={{
								bgcolor: "grey.600",
								color: "grey.100",
								py: "1px",
								px: "8px",
								borderRadius: 1,
							}}
						>
							{projectName}
						</Typography>
					</Link>
					<PriorityChip priority={priority} />
					<Typography>{statusLabel}</Typography>
				</Box>
				<Box sx={{ textAlign: "right" }}>
					<Typography>
						assigneee: {assignee.username || "unassigned"}
					</Typography>
					<Typography>created by: {createdBy.username} </Typography>
					<Typography>
						on {new Date(createdAt).toLocaleDateString("en-us")}
					</Typography>
				</Box>
			</Box>
		</Stack>
	);
};
