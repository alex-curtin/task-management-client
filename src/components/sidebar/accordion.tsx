import { Link } from "react-router-dom";
import { ArrowDropDown } from "@mui/icons-material";
import {
	Box,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	ButtonBase,
} from "@mui/material";

import { priorities } from "../../constants";
import { useActions } from "../../hooks";

interface AccordionProps {
	title: string;
	items: {
		id: number;
		name: string;
	}[];
	type: "project" | "task";
}

export const AccordionComponent: React.FC<AccordionProps> = ({
	title = "accordion",
	items = [],
	type = "project",
}) => {
	const { getCurrentTask } = useActions();

	const onClickTask = (taskId) => {
		getCurrentTask(taskId);
	};

	const renderItems =
		type === "project"
			? items.map((item) => (
					<Box key={item.id} sx={{ mb: 1, pl: 1 }}>
						<Link to={`/project/${item.id}`}>
							<Typography sx={{ color: "text.primary" }}>
								{item.name}
							</Typography>
						</Link>
					</Box>
			  ))
			: items.map((item) => (
					<Box
						key={item.id}
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							mb: 1,
							pl: 1,
						}}
					>
						<ButtonBase onClick={() => onClickTask(item.id)}>
							<Typography>{item.name}</Typography>
						</ButtonBase>
						<Box
							sx={{
								borderRadius: "50%",
								bgcolor: `${priorities[item?.priority]?.color}.main`,
								width: 10,
								height: 10,
							}}
						/>
					</Box>
			  ));
	return (
		<Accordion
			sx={{
				backgroundColor: "inherit",
				m: "0 !important",
				width: "200px",
			}}
		>
			<AccordionSummary expandIcon={<ArrowDropDown />}>
				<Typography>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>{renderItems}</AccordionDetails>
		</Accordion>
	);
};
