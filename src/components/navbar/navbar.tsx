import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

export const NavBar: React.FC = () => {
	return (
		<Grid
			container
			sx={{ backgroundColor: "primary.light", p: 2, color: "white" }}
		>
			<Grid item xs={8}>
				<Link to="/">Logo</Link>
			</Grid>
			<Grid item xs={2}>
				Item 1
			</Grid>
			<Grid item xs={2}>
				Item 2
			</Grid>
		</Grid>
	);
};
