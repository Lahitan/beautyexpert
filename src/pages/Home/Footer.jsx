import React from "react";
import { NavLink } from "react-router-dom";
import fb from "../../assets/fb-logo.png"
import ig from "../../assets/ig-logo.png"
import twitter from "../../assets/twitter-logo.png"
import linkedin from "../../assets/linkedin-logo.png"

const Footer = () => {
	return (
		<div className=" flex bg-secondary-brand text-white text-center md:text-left">
			<div className=" w-[70%] mx-auto my-10 grid-1 gap-8 grid md:grid-cols-2 lg:grid-cols-4  ">
	
						<div className="about-us ">
							<h4 className="text-xl font-bold " >ABOUT US</h4>
							<p className=" my-4 text-xs ">
							At Beauty Xpats, we bridge the gap between beauty and convenience. <br />
							We're passionate about empowering beauty professionals and simplifying the beauty experience for clients. Beauty Xpats is a one-stop platform connecting talented beauty experts with clients seeking exceptional service.
							</p>
							<NavLink className=" text-xs " to="/"  >contact@beautyxpats.org</NavLink>
						</div>

						<div className=" navigation ">
							<h4 className="text-xl font-bold mb-4  " >NAVIGATION</h4>
							<div className="links">
								<NavLink to="/"  className=" my-4 ">Home</NavLink><br />
								<NavLink to="/">For Beauty Professionals</NavLink><br />
								<NavLink to="/">For Clients</NavLink><br />
								<NavLink to="/">Services</NavLink><br />
								<NavLink to="/">About us</NavLink>
							</div>
						</div>
						<div className="legal">
							<h4 className="text-xl font-bold mb-4 " >LEGAL</h4>
							<div className="links">
								<NavLink to="/" >Terms and Conditions</NavLink><br />
								<NavLink to="/">Privacy Policy</NavLink>
							</div>	
						</div>
						<div className="help">
							<h4 className="text-xl font-bold mb-4" >HELP</h4>
							<NavLink to="/">Contact us</NavLink>
						</div>

						
					</div>
				</div>
		
	);
};

export default Footer;
