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
import ExpertCreateAccount from "./pages/Login/ExpertCreateAccount.jsx";
import ExpertCreateAccountPage2 from "./pages/Login/ExpertCreateAccountPage2.jsx";
import ExpertUploadPage from "./pages/Login/ExpertUploadPage.jsx";
import Services from "./pages/Services.jsx";

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
		path: "/services",
		element: <Services />,
	},
	{
		path: "/loginRoot",
		element: <LoginRoot />,
	},
	{
		path: "/customerCreateAccount",
		element: <CustomerCreateAcount />,
		children: [
			{
				path: "forgetPassword",
				element: <ForgetPassword />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/ExpertCreateAccount",
		element: <ExpertCreateAccount />,
	},
	{
		path: "/ExpertCreateAccountPage2",
		element: <ExpertCreateAccountPage2 />,
	},
	{
		path: "/ExpertUploadPage",
		element: <ExpertUploadPage />,
	},
	{
		path: "/ExpertCreateAccount",
		element: <ExpertCreateAccount />,
	},
	{
		path: "/ExpertCreateAccountPage2",
		element: <ExpertCreateAccountPage2 />,
	},
	{
		path: "/ExpertUploadPage",
		element: <ExpertUploadPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
