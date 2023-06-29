import { Box, Chip } from "@mui/material";

import { priorities } from "../../constants";

interface PriorityChipProps {
	priority: number;
}

export const PriorityChip: React.FC<PriorityChipProps> = ({ priority }) => {
	const priorityObj = priorities[priority];

	return (
		<Box>
			<Chip
				color={priorityObj.color}
				label={`${priorityObj.label} priority`}
				size="small"
				sx={{ cursor: "inherit" }}
			/>
		</Box>
	);
};
