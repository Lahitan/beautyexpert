import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import fb from "../../assets/fb-logo.png";
import ig from "../../assets/ig-logo.png";
import twitter from "../../assets/twitter-logo.png";
import linkedin from "../../assets/linkedin-logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
	const [showLinks, setShowLinks] = useState({
		nav: false,
		legal: false,
		help: false,
	});

	const { nav, legal, help } = showLinks;
	console.log(nav, legal, help);
	return (
		// footer section
		<div className=" flex  text-white  md:text-left font-openSans">
			<div className=" w-[90%] px-20 py-10 rounded-xl bg-secondary-brand mx-auto my-10   ">
				<div className="grid-1 gap-8 grid  lg:grid-cols-5">
					{/* about us section */}
					<div className="lg:col-span-2">
						<h4 className="text-xl font-bold ">ABOUT US</h4>
						<p className=" my-4 text-base ">
							At Beauty Xpats, we bridge the gap between beauty and convenience.{" "}
							<br />
							We're passionate about empowering beauty professionals and
							simplifying the beauty experience for clients. Beauty Xpats is a
							one-stop platform connecting talented beauty experts with clients
							seeking exceptional service.
						</p>
						<NavLink className=" text-base my-4 block" to="/">
							contact@beautyxpats.org
						</NavLink>
					</div>
					{/* navigation section */}
					<div className=" border-b-2 md:border-none">
						<div className="flex justify-between items-center">
							<h4 className="text-xl font-bold mb-4  ">NAVIGATION</h4>
							<IoIosArrowDown
								className="text-2xl md:hidden"
								id="nav"
								onClick={() => {
									setShowLinks({
										nav: !showLinks.nav,
										legal: false,
										help: false,
									});
								}}
							/>
						</div>

						<div className={`links ${!nav && "hidden md:block "} `}>
							<NavLink to="/" className=" my-4 ">
								Home
							</NavLink>
							<br />
							<NavLink to="/">For Beauty Professionals</NavLink>
							<br />
							<NavLink to="/">For Clients</NavLink>
							<br />
							<NavLink to="/">Services</NavLink>
							<br />
							<NavLink to="/">About us</NavLink>
						</div>
					</div>
					{/* legal section		 */}
					<div className="border-b-2 md:border-none">
						<div className="flex justify-between items-center ">
							<h4 className="text-xl font-bold mb-4 ">LEGAL</h4>
							<IoIosArrowDown
								className="text-2xl md:hidden"
								id="legal"
								onClick={() => {
									setShowLinks({
										nav: false,
										legal: !showLinks.legal,
										help: false,
									});
								}}
							/>
						</div>
						<div className={`links ${!legal && "hidden md:block"} `}>
							<NavLink to="/">Terms and Conditions</NavLink>
							<br />
							<NavLink to="/">Privacy Policy</NavLink>
						</div>
					</div>
					{/* help section */}
					<div className=" border-b-2 md:border-none">
						<div className="flex justify-between items-center">
							<h4 className="text-xl font-bold mb-4">HELP</h4>
							<IoIosArrowDown
								className="text-2xl md:hidden"
								id="help"
								onClick={() => {
									setShowLinks({
										nav: false,
										legal: false,
										help: !showLinks.help,
									});
								}}
							/>
						</div>
						<div className={`links ${!help && "hidden md:block "} `}>
							<NavLink to="/">Contact us</NavLink>
						</div>
					</div>
					{/* Follow us section */}
					<div className="flex  mt-2 lg:col-span-2">
						<p className=" text-base font-bold mr-5">Follow us:</p>
						{/*social media icons  */}
						<div className="flex justify-between">
							<div>
								<img src={fb} alt="facebook link" className=" mx-2 " />
							</div>
							<div>
								<img src={ig} alt="instagram link" className=" mx-2 " />
							</div>
							<div>
								<img src={twitter} alt="twitter link" className="mx-2 " />
							</div>
							<div>
								<img src={linkedin} alt="linkedin link" className="mx-2 " />
							</div>
						</div>
					</div>
				</div>

				{/* copyright and all rights reserved */}
				<div className="text-xs mt-16 text-center">
					<span>© 2024 Beauty Xpats: </span>
					<a href="/">All Rights Reserved</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
