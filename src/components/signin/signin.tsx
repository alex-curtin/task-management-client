import { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { useActions } from "../../hooks/useActions";

export const SignIn = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { signInUser } = useActions();

	const handleSignin = async () => {
		signInUser({ username, password });
	};

	return (
		<Stack
			spacing={1}
			sx={{
				width: "300px",
				textAlign: "center",
			}}
		>
			<Typography>Sign In</Typography>
			<TextField
				required
				size="small"
				label="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<TextField
				required
				size="small"
				label="password"
				value={password}
				type="password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button variant="contained" onClick={handleSignin}>
				Sign In
			</Button>
			<Box>
				<Typography>or sign up</Typography>
			</Box>
		</Stack>
	);
};
