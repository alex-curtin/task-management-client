import { useState, ChangeEventHandler } from "react";
import {
	Box,
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";

import { useActions } from "../../hooks";
import { priorities } from "../../constants";

interface EditPriorityProps {
	taskId: number;
	priority: number;
	stopEdit: () => void;
}

export const EditPriority: React.FC<EditPriorityProps> = ({
	taskId,
	priority,
	stopEdit = () => {},
}) => {
	const [selected, setSelected] = useState(priority);
	const { editTask } = useActions();

	const handleChange = (e: SelectChangeEvent) => {
		setSelected(e.target.value);
	};

	const handleBlur = () => {
		const newPriority = parseInt(selected);
		if (priority !== newPriority) {
			editTask(taskId, { priority: newPriority });
		}
		stopEdit();
	};

	return (
		<Box>
			<FormControl>
				<Select
					value={selected}
					onChange={handleChange}
					sx={{ height: "24px", borderRadius: 3 }}
					onBlur={handleBlur}
				>
					{Object.entries(priorities).map(([key, value]) => (
						<MenuItem value={key} key={key}>
							{value.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};
