import { useState } from "react";
import "./App.css";
import Layout from "./pages/Home/Layout";
import { Outlet } from "react-router-dom";

function App({ children }) {
	return (
		<>
			<Outlet />
			<Layout />
		</>
	);
}

export default App;
