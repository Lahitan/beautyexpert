import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Customer_account from "../../assets/customer-account.png";
import eye from "../../assets/eye-logo.png";

const background = {
	backgroundImage: `url(${Customer_account})`,
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundPosition: "left",
	width: "100%",
	height: "100vh",
};

const CustomerCreateAcount = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [notice, setNotice] = useState("");
	// const { signUp } = useUserAuth();

	let navigate = useNavigate();
	const signupWithUsernameAndPassword = async (e) => {
		e.preventDefault();

		if (password === confirmPassword) {
			try {
				await createUserWithEmailAndPassword(auth, email, password);
				navigate("/Login");
			} catch {
				setNotice("Sorry, something went wrong. Please try again.");
			}
		} else {
			setNotice("Passwords don't match. Please try again.");
		}
	};

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	setError("");
	// 	try {
	// 		await signUp(email, password);
	// 		navigate("/");
	// 	} catch (err) {
	// 		setError(err.message);
	// 	}
	// };
	return (
		<div className=" items-center bg-primary-brand text-black">
			<div className="grid md:grid-cols-2 lg:grid-cols-2">
				{/* background image */}
				<div style={background} className=" background">
					{/* headings */}

					<div className="flex flex-col items-center justify-center  absolute inset-x-2 mb-16  ">
						<h1 className=" font-bold lg:text-2xl mb-2">
							Create an account as a customer
						</h1>
						<h2 className="h2">
							Already have an account?
							<Link to={"/login"} className=" text-black-700 text-sm font-bold">
								{" "}
								Log in
							</Link>
						</h2>
					</div>
				</div>

				{/* form */}
				<div className="lg:mt-20">
					<div className=" w-6/12 m-auto my-7 ">
						{"" !== notice && (
							<div className="alert alert-warning" role="alert">
								{notice}
							</div>
						)}
						<div className=" flex flex-col items-start ">
							<div>
								<span className="label-text font-bold">First Name</span>
								<label className="input input-bordered flex items-center gap-9 bg-primary-brand lg:mb-[0.8rem]">
									<input type="text" className="grow" placeholder="Wilson" />
								</label>
								<span className="label-text font-bold">Last Name</span>
								<label className="input input-bordered flex items-center gap-9 bg-primary-brand lg:mb-[0.8rem]">
									<input type="text" className="grow" placeholder="Nuella" />
								</label>
							</div>
							<div>
								<div>
									<span className="label-text font-bold">Email</span>
									<label className="input input-bordered flex items-center gap-2 bg-primary-brand lg:mb-[0.8rem]">
										<input
											type="email"
											className="grow"
											placeholder="Enter your email address"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</label>
								</div>
								<div>
									<span className="label-text font-bold">Password</span>
									<label className="input input-bordered flex items-center lg:gap-2 bg-primary-brand lg:mb-[0.8rem]">
										<input
											type="password"
											className="grow"
											placeholder="Password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
										<img src={eye} alt="" />
									</label>
									<span className=" text-xs text-gray-400">
										Password must be 8 characters
									</span>
								</div>
								<div>
									<label className="input input-bordered flex items-center lg:gap-2 bg-primary-brand ">
										<input
											type="password"
											className="grow"
											placeholder="Confirm password"
											value={confirmPassword}
											onChange={(e) => setConfirmPassword(e.target.value)}
										/>
										<img src={eye} alt="" />
									</label>
								</div>
							</div>
						</div>

						{/* button */}
						<div className=" card-actions justify-start py-3">
							<Link to={""} className=" ">
								<button
									className=" bg-tertiary-brand btn btn-circle btn-sm px-24 btn-neutral"
									onClick={(e) => signupWithUsernameAndPassword(e)}
									type="submit"
								>
									Next
								</button>
							</Link>
						</div>
					</div>
				</div>
				{/* end of form  */}
			</div>
		</div>
	);
};

export default CustomerCreateAcount;
