import { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import { useActions } from "../../hooks/useActions";
import { signIn } from "../../state/action-creators";

export const SignIn = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { signIn } = useActions();
	const dispatch = useDispatch();

	const handleSignin = () => {
		signIn({ username, password });
		// dispatch(signIn({ username, password }));
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
				defaultValue="Enter username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<TextField
				required
				size="small"
				label="password"
				defaultValue="Enter password"
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
