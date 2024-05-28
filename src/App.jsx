import { useState } from "react";
import "./App.css";
import Layout from "./pages/Home/Layout";
import { Outlet } from "react-router-dom";
import { UserAuthContextProvider } from "./components/UserAuthContext";
import { onAuthStateChanged } from "firebase/auth";

function App({ children }) {
	return (
		<>
			<Outlet />
			<Layout />
		</>
	);
}

export default App;
