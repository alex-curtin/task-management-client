import { useState, ChangeEvent } from "react";
import { Box, ButtonBase, TextField } from "@mui/material";
import {
	HighlightOff,
	CheckCircle,
	Cancel,
	CheckCircleOutline,
} from "@mui/icons-material";

import { useActions } from "../../hooks";

interface EditTaskNameProps {
	taskId: number;
	taskName: string;
	stopEdit: () => void;
}

export const EditTaskName = ({ taskId, taskName, stopEdit = () => {} }) => {
	const [text, setText] = useState(taskName || "");
	const { editTask } = useActions();

	const handleSubmit = () => {
		if (text !== taskName) {
			editTask(taskId, { task_name: text });
		}
		stopEdit();
	};

	return (
		<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
			<TextField
				value={text}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
				InputProps={{ sx: { height: "32px", lineHeight: 1 } }}
			/>
			<Box>
				<ButtonBase onClick={handleSubmit}>
					<CheckCircleOutline sx={{ color: "success.main" }} />
				</ButtonBase>
				<ButtonBase onClick={stopEdit}>
					<Cancel sx={{ color: "error.main" }} />
				</ButtonBase>
			</Box>
		</Box>
	);
};
