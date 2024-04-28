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
import PaymentPlan from "./pages/Payment/PaymentPlan.jsx";
import ResetPassword from "./pages/Login/ResetPassword.jsx";
import CustomerHomepage from "./pages/CustomerPages/CustomerHomepage.jsx";
import CustomerServices from "./pages/CustomerPages/CustomerServices";
import CustomerBooking from "./pages/CustomerPages/CustomerBooking.jsx";
import CustomerProduct from "./pages/CustomerPages/CustomerProduct.jsx";


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
		path: "/PaymentPlan",
		element: <PaymentPlan />,
	},
	{
		path: "/forgetPassword",
		element: <ForgetPassword />,
	},
	{
		path: "/ResetPassword",
		element: <ResetPassword />,
	},
	{
		path: "/CustomerHomepage",
		element: <CustomerHomepage />,
	},
	{
		path: "/CustomerServices",
		element: <CustomerServices />,
	},
	{
		path: "/CustomerBooking",
		element: <CustomerBooking />,
	},
	{
		path: "/CustomerProduct",
		element: <CustomerProduct />,
	},
	
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
