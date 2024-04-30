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
import CustomerServicesBarber from "./pages/CustomerPages/CustomerServicesBarber.jsx";
import CustomerServicesMakeup from "./pages/CustomerPages/CustomerServicesMakeup.jsx";
import CustomerServicesNail from "./pages/CustomerPages/CustomerServicesNail.jsx";
import CustomerServicesFashion from "./pages/CustomerPages/CustomerServicesFashion";
import CustomerBooking from "./pages/CustomerPages/CustomerBooking.jsx";
import CustomerProduct from "./pages/CustomerPages/CustomerProduct.jsx";
import CustomerBookingJacky from "./pages/CustomerPages/CustomerBookingJacky.jsx";
import CustomerBookingJB from "./pages/CustomerPages/CustomerBookingJB.jsx";
import CustomerBookingJays from "./pages/CustomerPages/CustomerBookingJays.jsx";

import CustomerDashboard from "./pages/CustomerPages/CustomerDashboard.jsx";
import EditProfile from "./pages/CustomerPages/EditProfile.jsx";
import ScheduleAppointment from "./pages/CustomerPages/ScheduleAppointment.jsx";

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
		path: "/CustomerServicesBarber",
		element: <CustomerServicesBarber />,
	},
	{
		path: "/CustomerServicesBarber",
		element: <CustomerServicesBarber />,
	},
	{
		path: "/CustomerServicesNail",
		element: <CustomerServicesNail />,
	},
	{
		path: "/CustomerServicesMakeup",
		element: <CustomerServicesMakeup />,
	},
	{
		path: "/CustomerServicesFashion",
		element: <CustomerServicesFashion />,
	},
	{
		path: "/CustomerProduct",
		element: <CustomerProduct />,
	},
	{
		path: "/CustomerBooking",
		element: <CustomerBooking />,
	},
	{
		path: "/CustomerBookingJB",
		element: <CustomerBookingJB />,
	},
	{
		path: "/CustomerBookingJacky",
		element: <CustomerBookingJacky />,
	},
	{
		path: "/CustomerBookingJays",
		element: <CustomerBookingJays />,
	},

	{
		path: "CustomerDashboard",
		element: <CustomerDashboard />,
		children: [
			{
				path: "CustomerProfile",
				element: <EditProfile />,
				index: true,
			},
			{
				path: "CustomerProfile",
				element: <EditProfile />,
				index: true,
			},
		],
	},
	{
		path: "/ScheduleAppointment",
		element: <ScheduleAppointment />,
		index: true,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
