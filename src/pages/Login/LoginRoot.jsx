import React from "react";
import { Link } from "react-router-dom";

const LoginRoot = () => {
	return (
		<div>
			<Link
				to={"/customerCreateAccount"}
				className={" bg-tertiary-brand rounded-full p-2 m-10 text-white"}
			>
				Hire an expert
			</Link>
		</div>
	);
};

export default LoginRoot;
