import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About.jsx";
import LoginRoot from "./pages/Login/LoginRoot.jsx";
import CustomerCreateAcount from "./pages/Login/CustomerCreateAcount.jsx";
import Login from "./pages/Login/Login.jsx";
import ForgetPassword from "./pages/Login/ForgetPassword.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [],
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/loginRoot",
		element: <LoginRoot />,
	},
	{
		path: "/customerCreateAccount",
		element: <CustomerCreateAcount />,
	},
	{
		path: "/login",
		element: <Login />,
		children: [],
	},
	{
		path: "forgetPassword",
		element: <ForgetPassword />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
