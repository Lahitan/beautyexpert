import React from "react";
import { Link } from "react-router-dom";

const CustomerCreateAcount = () => {
	return (
		<div>
			CustomerCreateAcount
			<Link to={"/login"} className=" text-red-700 text-3xl">
				Log in
			</Link>
			<Link to={"/forgetPassword"}>forget password</Link>
		</div>
	);
};

export default CustomerCreateAcount;
