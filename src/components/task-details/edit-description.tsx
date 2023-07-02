import { useState, ChangeEventHandler } from "react";
import { Box, Button } from "@mui/material";
import DOMPurify from "dompurify";

import { useActions } from "../../hooks";
import { TextEditor } from "../text-editor/text-editor";
import { editTask } from "../../state/action-creators";

interface EditDescriptionProps {
	description: string;
	closeEditor: () => void;
	taskId: number;
}

export const EditDescription: React.FC<EditDescriptionProps> = ({
	description = "",
	closeEditor = () => {},
	taskId,
}) => {
	const { sanitize } = DOMPurify;
	const [text, setText] = useState(description || "");
	const { editTask } = useActions();

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = () => {
		if (text === description) {
			closeEditor();
			return;
		}
		editTask(taskId, { description: sanitize(text) });
		closeEditor();
	};

	return (
		<Box>
			<TextEditor handleChange={setText} value={text} />
			<Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, py: 1 }}>
				<Button variant="contained" size="small" onClick={handleSubmit}>
					save changes
				</Button>
				<Button variant="outlined" size="small" onClick={closeEditor}>
					cancel
				</Button>
			</Box>
		</Box>
	);
};
