import React from "react";
import { Outlet } from "react-router-dom";
import EditProfile from "./EditProfile";
import CustomerDash from "./CustomerDash";

const CustomerDashboard = () => {
	return (
		<div className=" bg-primary-brand flex">
			<CustomerDash />
			<EditProfile />
			<Outlet />
		</div>
	);
};

export default CustomerDashboard;
