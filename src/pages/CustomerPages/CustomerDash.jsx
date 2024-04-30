import React from "react";
import logo from "../../assets/logo-2.png";
import { NavLink } from "react-router-dom";

import FAQ from "../../assets/faq.png";
import RateUs from "../../assets/rate-us.png";
import { PiHouseLight, PiChatCircleText } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";

const CustomerDash = () => {
	return (
		<div className=" w-[150px] bg-white  ">
			<div className="p-4 border-b-2 border-gray-200 w-[150px]">
				<img src={logo} alt="" className="w-full" />
			</div>
			<div className="p-2 flex flex-col justify-between gap-8">
				{navArr.map((each, i) => {
					return (
						<NavLink
							key={i}
							to={each.path}
							className={`flex items-center gap-1`}
						>
							<div>{each.icon}</div>
							<p>{each.text}</p>
						</NavLink>
					);
				})}
			</div>
		</div>
	);
};

const navArr = [
	{
		icon: <PiHouseLight className=" text-3xl text-secondary-brand" />,
		text: "Home",
		path: "/CustomerHomepage",
	},
	{
		icon: <CgProfile className=" text-3xl text-secondary-brand" />,
		text: "Profile",
		path: "/CustomerDashboard",
	},
	{
		icon: (
			<IoNotificationsCircleSharp className="text-3xl  text-secondary-brand " />
		),
		text: "Notifications",
		path: "",
	},
	{
		icon: <FaRegCalendarCheck className=" text-3xl  text-secondary-brand" />,
		text: "Schedule",
		path: "/ScheduleAppointment",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="29px"
				height="29px"
				viewBox="0 0 30 30"
				fill="none"
				className=" flex-shrink-0"
			>
				<path
					d="M24.5 3V3.5H25H26.6667C27.4341 3.5 28.1609 3.77486 28.6892 4.25033C29.2158 4.72422 29.5 5.35498 29.5 6V27C29.5 28.3256 28.2747 29.5 26.6667 29.5H3.33333C2.56588 29.5 1.83908 29.2251 1.31079 28.7497C0.78424 28.2758 0.5 27.645 0.5 27V6C0.5 4.65939 1.70862 3.5 3.33333 3.5H5H5.5V3V0.5H7.83333V3V3.5H8.33333H21.6667H22.1667V3V0.5H24.5V3ZM26.6667 27.5H27.1667V27V10.5V10H26.6667H3.33333H2.83333V10.5V27V27.5H3.33333H26.6667ZM14.5 21V22.9698L9.14149 18.75L14.5 14.5302V16.5V17H15H21.1667V20.5H15H14.5V21Z"
					fill="#12522D"
					stroke="#12522D"
				/>
			</svg>
		),
		text: "Reschedule",
		path: "Reschedule",
	},
	{
		icon: <PiChatCircleText className=" text-3xl  text-secondary-brand" />,
		text: "Chats",
		path: "",
	},
	{
		icon: <img src={FAQ} alt="" className=" w-7" />,
		text: "FAQ",
		path: "FAQ",
	},
	{
		icon: <img src={RateUs} alt="" className=" w-7" />,
		text: "Rate Us",
		path: "RateUs",
	},
];

export default CustomerDash;
