import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
	return (
		<div>
			<nav className="flex items-center  text-xl font-semibold bg-white ">
				<div className="w-[90%] mx-auto flex items-center justify-between">
					<div className=" flex items-center gap-6 ">
						<div>
							<img src={logo} alt="" />
						</div>
						<ul className="flex gap-5 ">
							<li>
								<NavLink
									to="/"
									className={({ isActive }) =>
										isActive ? " text-[#3992EE]" : "text-[#B1B1B1]"
									}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									className={`flex gap-2 items-center ${({ isActive }) =>
										isActive ? " text-[#3992EE]" : "text-[#B1B1B1]"}`}
								>
									For experts <IoIosArrowDown />
								</NavLink>
							</li>
							<li>
								<NavLink
									className={`flex gap-2 items-center ${({ isActive }) =>
										isActive ? "text-[#3992EE]" : "text-[#B1B1B1]"}`}
								>
									For clients <IoIosArrowDown />
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive ? " text-[#3992EE]" : "text-[#B1B1B1]"
									}
								>
									Services
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) =>
										isActive ? " text-[#3992EE]" : "text-[#B1B1B1]"
									}
								>
									About us
								</NavLink>
							</li>
						</ul>
					</div>
					<div className="">
						<NavLink
							className={
								" border border-tertiary-brand me-3 font-semibold rounded-full py-2 px-5"
							}
						>
							Log in
						</NavLink>
						<NavLink
							className={
								" bg-tertiary-brand text-white font-semibold me-3 rounded-full py-2 px-5"
							}
						>
							Sign up
						</NavLink>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
