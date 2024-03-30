import React from "react";
import { NavLink } from "react-router-dom";
import fb from "../../assets/fb-logo.png"
import ig from "../../assets/ig-logo.png"
import twitter from "../../assets/twitter-logo.png"
import linkedin from "../../assets/linkedin-logo.png"

const Footer = () => {
	return (

		// footer section
		<div className=" flex bg-secondary-brand text-white text-center md:text-left font-openSans">
			<div className=" w-[70%] mx-auto my-10 grid-1 gap-8 grid md:grid-cols-2 lg:grid-cols-4  ">
	{/* about us section */}
						<div >
							<h4 className="text-xl font-bold " >ABOUT US</h4>
							<p className=" my-4 text-xs ">
								At Beauty Xpats, we bridge the gap between beauty and convenience. <br />
								We're passionate about empowering beauty professionals and simplifying the beauty experience for clients. Beauty Xpats is a one-stop platform connecting talented beauty experts with clients seeking exceptional service.
							</p>
							<NavLink className=" text-xs " to="/"  >contact@beautyxpats.org</NavLink>
						</div>
{/* navigation section */}
						<div >
							<h4 className="text-xl font-bold mb-4  " >NAVIGATION</h4>
							<div className="links">
								<NavLink to="/"  className=" my-4 ">Home</NavLink><br />
								<NavLink to="/">For Beauty Professionals</NavLink><br />
								<NavLink to="/">For Clients</NavLink><br />
								<NavLink to="/">Services</NavLink><br />
								<NavLink to="/">About us</NavLink>
							</div>
						</div>
{/* legal section		 */}
						<div >
							<h4 className="text-xl font-bold mb-4 " >LEGAL</h4>
							<div >
								<NavLink to="/" >Terms and Conditions</NavLink><br />
								<NavLink to="/">Privacy Policy</NavLink>
							</div>	
						</div>
{/* help section */}
						<div >
							<h4 className="text-xl font-bold mb-4" >HELP</h4>
							<NavLink to="/">Contact us</NavLink>
						</div>
{/* Follow us section */}
						<div className="flex items-center justify-between ">
							<p className=" text-base font-bold mr-5 " >
								Follow us: 
							</p>
{/*social media icons  */}
							<div className="flex justify-between">
								<div>
									<img src={fb} alt="facebook link" className=" mx-6 "/>
								</div>
								<div>
									<img src={ig} alt="instagram link" className=" mx-6 "/>
								</div>
								<div>
									<img src={twitter} alt="twitter link" className="mx-6 "/>
								</div>
								<div>
									<img src={linkedin} alt="linkedin link" className="mx-6 "/>
								</div>
							</div>	
						</div>
{/* copyright and all rights reserved */}
						<div className="text-xs mt-20">
							<span>© 2024 Beauty Xpats: </span>
							<a
							href="/"
							>All Rights Reserved</a>
						</div>
			</div>
		</div>
		
	);
};


export default Footer;


