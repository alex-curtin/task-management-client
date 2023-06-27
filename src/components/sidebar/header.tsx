import { Avatar, Box } from "@mui/material";

import { useSelector } from "../../hooks";
import { selectAuthState } from "../../state";

export const Header = () => {
	const { currentUser } = useSelector(selectAuthState);

	return (
		<Box
			sx={{
				width: "100%",
				height: "100px",
				py: 2,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{currentUser && (
				<Avatar sx={{ textTransform: "uppercase" }}>
					{currentUser.username.charAt(0)}
				</Avatar>
			)}
		</Box>
	);
};
