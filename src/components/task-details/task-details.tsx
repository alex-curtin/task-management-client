import { useEffect, useState } from "react";
import { Box, ButtonBase, Divider, Stack, Typography } from "@mui/material";
import { Close, Edit, CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

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
import { EditDescription } from "./edit-description";
import { EditPriority } from "./edit-priority";
import { EditTaskName } from "./edit-task-name";

export const TaskDetails: React.FC = () => {
	const { sanitize } = DOMPurify;
	const { currentTask } = useSelector(selectTasksState);
	const { fetchingCurrentTask } = useSelector(selectLoadingState);
	const { getCurrentTask, setCurrentTask } = useActions();

	const [isEditingDescription, setIsEditingDescription] = useState(false);
	const [isEditingPriority, setIsEditingPriority] = useState(false);
	const [isEditingTaskName, setIsEditingTaskName] = useState(false);

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

	const editIconStyle = { width: "15px", color: "grey.800" };

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
					color: "grey.800",
				}}
			>
				<Box sx={{ display: "flex", gap: 1 }}>
					{isEditingTaskName ? (
						<EditTaskName
							taskId={id}
							stopEdit={() => setIsEditingTaskName(false)}
							taskName={taskName}
						/>
					) : (
						<>
							<Typography variant="h5">{taskName}</Typography>
							<ButtonBase
								disableRipple
								onClick={() => setIsEditingTaskName(true)}
							>
								<Edit sx={editIconStyle} />
							</ButtonBase>
						</>
					)}
				</Box>
				<ButtonBase onClick={() => setCurrentTask(null)}>
					<Close />
				</ButtonBase>
			</Box>

			<Divider />

			<Box sx={{ minHeight: "150px", position: "relative" }}>
				<Box sx={{ position: "absolute", top: 0, right: 0, px: 1 }}>
					<ButtonBase
						disableRipple
						onClick={() => setIsEditingDescription(true)}
					>
						{!isEditingDescription && (
							<Edit sx={{ width: "15px", color: "grey.800" }} />
						)}
					</ButtonBase>
				</Box>
				<Typography variant="h6" sx={{ mb: 1 }}>
					Description
				</Typography>
				{isEditingDescription ? (
					<EditDescription
						description={description}
						closeEditor={() => setIsEditingDescription(false)}
						taskId={id}
					/>
				) : (
					<Typography
						// rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: sanitize(description) }}
					/>
				)}
			</Box>

			<Divider />

			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-end",
				}}
			>
				<Stack sx={{ justifyContent: "space-between", gap: 2 }}>
					<Box sx={{ display: "flex", gap: 1 }}>
						<Typography>assignee: </Typography>
						<Typography>{assignee.username || "unassigned"}</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							gap: 1,
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
						{isEditingPriority ? (
							<EditPriority
								taskId={id}
								priority={priority}
								stopEdit={() => setIsEditingPriority(false)}
							/>
						) : (
							<ButtonBase onClick={() => setIsEditingPriority(true)}>
								<PriorityChip priority={priority} />
							</ButtonBase>
						)}
						<Typography>{statusLabel}</Typography>
					</Box>
				</Stack>
				<Box sx={{ textAlign: "right" }}>
					<Typography>created by: {createdBy.username} </Typography>
					<Typography>
						on {new Date(createdAt).toLocaleDateString("en-us")}
					</Typography>
				</Box>
			</Box>
		</Stack>
	);
};
