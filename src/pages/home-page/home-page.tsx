import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { useActions, useSelector } from "../../hooks";
import { selectAuthState } from "../../state";
import { SignIn, PageContainer } from "../../components";
import { QuillTextEditor } from "../../components/text-editor/text-editor";

export const HomePage: React.FC = () => {
	const { currentUser } = useSelector(selectAuthState);

	return <PageContainer>{currentUser ? null : <SignIn />}</PageContainer>;
};
