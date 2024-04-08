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
					{/* added padding to the div directly under this div*/}

					<div className=" flex items-center gap-6 p-3">
						{!menu ? (
							<FaBars className=" text-2xl lg:hidden" onClick={handleMenu} />
						) : (
							<GrClose className=" text-2xl lg:hidden" onClick={handleMenu} />
						)}

						{/* changed the width of the logo for responsivness*/}
						<div>
							<img src={logo} alt="" className=" sm:w-11 w-8" />
						</div>
						<ul
							className={`lg:flex gap-5 absolute lg:relative top-16 lg:top-0 bg-white left-0 right-0 ps-10 lg:ps-0 py-4 lg:py-0 ${
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
									to={"/services"}
									className={({ isActive }) =>
										isActive ? " text-[#3992EE]" : "text-[#B1B1B1]"
									}
								>
									Services
								</NavLink>
							</li>
							<li>
								<NavLink
									to={"/about"}
									className={({ isActive }) =>
										isActive ? " text-[#3992EE]" : "text-[#B1B1B1]"
									}
								>
									About us
								</NavLink>
							</li>
						</ul>
					</div>
					{/* adjusted the padding in the button for responsiveness*/}
					<div className="">
						<NavLink
							to={"loginRoot"}
							className={
								" border border-tertiary-brand  me-1 lg:me-3 font-semibold rounded-full py-1 px-3 lg:py-2 lg:px-5"
							}
						>
							Log in
						</NavLink>
						<NavLink
							className={
								" bg-tertiary-brand text-white font-medium lg:font-semibold me-1 lg:me-3 rounded-full  py-1 px-3 lg:py-2 lg:px-5"
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
