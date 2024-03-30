import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";

const Header = () => {
	const [menu, setMenu] = useState(false);
	const handleMenu = () => {
		setMenu(!menu);
	};
	return (
		<div>
			<nav className="flex items-center  text-xl font-semibold bg-white ">
				<div className="w-[90%] mx-auto flex items-center justify-between">
					<div className=" flex items-center gap-6 ">
						{!menu ? (
							<FaBars className=" text-2xl lg:hidden" onClick={handleMenu} />
						) : (
							<GrClose className=" text-2xl lg:hidden" onClick={handleMenu} />
						)}

						<div>
							<img src={logo} alt="" />
						</div>
						<ul
							className={`lg:flex gap-5 absolute lg:relative top-20 lg:top-0 bg-white left-0 right-0 ps-10 lg:ps-0 py-4 lg:py-0 ${
								!menu && "hidden"
							}`}
						>
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
