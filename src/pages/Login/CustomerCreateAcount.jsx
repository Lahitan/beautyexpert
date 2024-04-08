import React from "react";
import { Link, Outlet } from "react-router-dom";
import Customer_account from "../../assets/customer-account.png";

const background = {
	backgroundImage: `url(${Customer_account})`,
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundPosition: "left",
	width: "100%",
	height: "100vh",
};

const CustomerCreateAcount = () => {
	return (
		<div className="  px-8">
			<div className="  items-center bg-primary-brand">
				<div className="grid md:grid-cols-2 lg:grid-cols-2">
					{/*------image box---*/}
					<div style={background} className=" ">
						<div className="flex flex-col items-center justify-center ">
							<h1 className=" font-bold">Create an account as a customer</h1>

							<span>
								Already have an account
								<Link to={"/login"} className=" text-red-700 text-sm">
									Log in
								</Link>
							</span>
							<Link to={"forgetPassword"}>forget password</Link>
						</div>
					</div>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default CustomerCreateAcount;
