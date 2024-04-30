import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import landing_page from "../../assets/customer-landing-page.png";
import Bell from "../../assets/bell.fill.svg";
import Profile from "../../assets/gg_profile.svg"
import Search from "../../assets/search.svg"
import Location from "../../assets/location-icon.svg"
import Home_img_1 from "../../assets/home-img-1.png"
import Home_img_2 from "../../assets/home-img-2.png"
import Home_img_3 from "../../assets/home-img-3.png"
import Home_img_4 from "../../assets/home-img-4.png"
import Home_img_5 from "../../assets/home-img-5.png"
import fullStar from "../../assets/fullStar.png"
import Hair_dresser_flier_21 from "../../assets/hair-dresser-flier-21.png"
import Heart from "../../assets/heart.svg"
import Arrow_left from "../../assets/arrow-left.svg"
import Arrow_right from "../../assets/arrow-right.svg"
import Makeup_flier_21 from "../../assets/makeup-flier-21.png"
import Ton_wear from "../../assets/ton-wear.png"
import Hair_dresser_flier_11 from "../../assets/hair-dresser-flier-11.png"
import Star_img from "../../assets/star-img.png"
import Notification_img from "../../assets/Notification-img.png"
import dropdown from "../../assets/dropdown.svg"
import fb_logo from "../../assets/fb-logo.png"
import ig_logo from "../../assets/ig-logo.png"
import linkedin_logo from "../../assets/linkedin-logo.png"
import twitter_logo from "../../assets/twitter-logo.png"
import { FaBars } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";




const background = {
    backgroundImage: `url(${landing_page})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    width: '100%',
    height: '100vh'
}


const CustomerHomepage = () => {

	const [menu, setMenu] = useState(false);
	const handleMenu = () => {
		setMenu(!menu);
	};

	return <div>

		<div className=" bg-primary-brand">
		
			{/*------Hero---- */}
			<div style={background} className=" ">

				{/*------Nav---- */}
				<div>
					<nav className="flex items-center  text-xl font-semibold ">
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
										className={`lg:flex gap-5 absolute lg:relative top-16 lg:top-0 bg-white lg:bg-transparent left-0 right-0 ps-10 lg:ps-0 py-4 lg:py-0 ${
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
										to="/CustomerProduct"
											className={`flex gap-2 items-center ${({ isActive }) =>
											isActive ? " text-[#3992EE]" : "text-[#B1B1B1]"}`}
											>
											Services
										</NavLink>
									</li>

									<li>
										<NavLink
											className={`flex gap-2 items-center ${({ isActive }) =>
											isActive ? " text-[#3992EE]" : "text-[#B1B1B1]"}`}
										>
											About us
										</NavLink>
									</li>
									<li>
										<NavLink
											className={`flex gap-2 items-center ${({ isActive }) =>
											isActive ? " text-[#3992EE]" : "text-[#B1B1B1]"}`}
										>
											Contact us
										</NavLink>
									</li>
									
								</ul>
							</div>

							{/* adjusted the padding in the button for responsiveness*/}
							<div className="">
								<NavLink
									to={"/Login"}
									className={
										"   bg-tertiary-brand text-white me-1 lg:me-3 font-semibold rounded-full py-1 px-3 lg:py-2 lg:px-5 text-base"
									}
								>
									Log_in
								</NavLink>
								<NavLink
									to={"/LoginRoot"}
									className={
										" bg-tertiary-brand text-white font-medium lg:font-semibold me-1 lg:me-3 rounded-full  py-1 px-3 lg:py-2 lg:px-5 text-base"
									}
								>
									Sign_up
								</NavLink>
							</div>

							<div className="flex items-center gap-4 p-3">
								<img src={Profile} alt="" />
								<img src={Bell} alt="" />
							</div>
						</div>
					</nav>
				</div>
				{/*------Nav Ends---- */}

				<div className="flex flex-col items-center justify-center mt-8">

					{/*------input field---- */}
					<div className=" w-[23rem] lg:w-[52rem]  text-center">
						<h2 className=" text-white font-bold  text-xl lg:text-2xl mt-20 mb-3">
							Discover and book BeautyXpat professional near you
						</h2>
							<Link to={"/"} className=" ">
									<button className="  bg-tertiary-brand btn btn-circle btn-sm px-16 btn-neutral mb-8">Book_an_expert</button>
							</Link>	

							<div className="flex flex-col lg:flex-row items-center lg:gap-9 gap-5">
								<label className="input input-bordered flex items-center gap-2 w-[16.5rem] lg:w-[28.75rem] h-[2.5rem]">
									<input
									type="text"
									className="grow"
									placeholder="Search"
									/>
									<img className="w-4 h-4 opacity-70" src={Search} alt="" />
								</label>
							
								<label className="input input-bordered flex items-center gap-2 w-[15rem] lg:w-[16.87rem] h-[2.5rem]">
									<input
									type="text"
									className="grow"
									placeholder="Location"
									/>
									<img className="w-4 h-4 opacity-70" src={Location} alt="" />
								</label>

							</div>	
					</div>
								{/*------Input field Ends---- */}

								{/*------Services you need---- */}
							<div  className=" hidden  w-[42rem] bg-[#FFE9E9] lg:flex flex-col items-center justify-center p-4 rounded-lg mt-32 xl:mt-52">
									<h2  className=" text-black font-bold text-2xl mb-2">
										What services do you need? 
									</h2>
											{/*------Services image---- */}
									<div className="flex gap-3 pb-3">
										<Link to={"/CustomerServices"}><img src={Home_img_1} alt="" /></Link>
										<Link to={"/CustomerServicesBarber"}><img src={Home_img_2} alt="" /></Link>
										<Link to={"/CustomerServicesNail"}><img src={Home_img_3} alt="" /></Link>
										<Link to={"/CustomerServicesMakeup"}><img src={Home_img_4} alt="" /></Link>
										<Link to={"/CustomerServicesFashion"}><img src={Home_img_5} alt="" /></Link>
									</div>
							</div>
				</div>
			</div>
			{/*------ End of Hero section---- */}

			{/*------ Second section---- */}
			
			<div className="w-[90%] mx-auto">

					{/*------ Top rating section---- */}

				<div className=" mt-16">

					<h2  className=" text-black font-bold text-2xl mb-6">
						Top Ratings
					</h2>
					
					{/*------ Top rating card container starts here---- */}

					<div className=" flex flex-col lg:flex-row gap-8 lg:items-center">
							{/*------ Left Arrow Container---- */}

						<div className=" hidden lg:bg-white lg:w-[4rem] lg:h-[4rem] lg:flex lg:items-center lg:rounded-full">
							<img src={Arrow_left} alt="" />
						</div>

						{/*------ Top rating card 1---- */}

						<div className="border-2 border-blue-300 rounded-lg gap-8 w-[15.4rem]">

						<Link to={"/CustomerServicesBarber"}><img src={Hair_dresser_flier_21} alt="" /></Link> 

							{/*------ A container for the cards writing and the heart icon: giving it a flex---- */}
							<div className="flex gap-16 mt-3">
								<div>
									<h2  className=" text-black font-bold mb-2 text-xl">
										Betty’s Trim
									</h2>
									<div className="flex">
										<img src={fullStar} alt="" />
										<img src={fullStar} alt="" />
										<img src={fullStar} alt="" />
										<img src={fullStar} alt="" />
										<img src={fullStar} alt="" />
									</div>
									<span>
										From ₦20,000 
									</span>
								</div>

								<div className="self-end">
									<img src={Heart} alt="" />
								</div>
							</div>
						</div>
						
						{/*------ Top rating card 2---- */}
						<div className="border-2 border-blue-300 rounded-lg w-[15.4rem]">

							<Link to={"/CustomerServicesMakeup"}><img src={Makeup_flier_21} alt="" /></Link> 


							{/*------ A container for the cards writing and the heart icon: giving it a flex---- */}
							<div className="flex  mt-3">
								<div>
									<h2  className=" text-black font-bold text-xl mb-2">
									Rosel Perfect Touch
									</h2>
									<div className="flex">
										<img src={fullStar} alt="" />
										<img src={fullStar} alt="" />
										<img src={fullStar} alt="" />
										<img src={fullStar} alt="" />
										<img src={fullStar} alt="" />
									</div>
									<span>
										From ₦30,000 
									</span>
								</div>

								<div className="self-end">
									<img src={Heart} alt="" />
								</div>
							</div>
						</div>
								

						{/*------ Top rating card 3---- */}
						<div className="border-2 border-blue-300 rounded-lg w-[15.4rem]">

							<Link to={"/CustomerServices"}><img src={Hair_dresser_flier_11} alt="" /></Link> 


							{/*------ A container for the cards writing and the heart icon: giving it a flex---- */}
							<div className="flex gap-16 mt-3">
								<div>
									<h2  className=" text-black font-bold text-xl mb-2 ">
										Jacky Hair
									</h2>
									<div className="flex">
										<img src={fullStar} alt="" />
										<img src={fullStar} alt="" />
										<img src={fullStar} alt="" />
										<img src={fullStar} alt="" />
										<img src={fullStar} alt="" />
									</div>
									<span>
										From ₦15,000 
									</span>
								</div>

								<div className="self-end">
									<img src={Heart} alt="" />
								</div>
							</div>
						</div>
								
						{/*------ Top rating card 4---- */}
						<div className="border-2 border-blue-300 rounded-lg w-[15.4rem]">

						<Link to={"/CustomerServicesFashion"}><img src={Ton_wear} alt="" /></Link> 


							{/*------ A container for the cards writing and the heart icon: giving it a flex---- */}
							<div className="flex  mt-3">
								<div>
									<h2  className=" text-black font-bold text-xl mb-2">
										Ton Wears Clothing
									</h2>
									<div className="flex">
										<img src={fullStar} alt="" />
										<img src={fullStar} alt="" />
										<img src={fullStar} alt="" />
										<img src={fullStar} alt="" />
										<img src={fullStar} alt="" />
									</div>
									<span>
										From ₦5,000 
									</span>
								</div>

								<div className="self-end">
									<img src={Heart} alt="" />
								</div>
							</div>
						</div>

						{/*------ Top rating card ends here---- */}

						{/*------ right Arrow Container---- */}

						<div className=" hidden lg:bg-white lg:w-[4rem] lg:h-[4rem] lg:flex lg:items-center lg:rounded-full">
							<img src={Arrow_right} alt="" />
						</div>
						
					</div>
				</div>
				{/*------ Top rating section ends here---- */}


				{/*------ Booking section starts here---- */}

				<div className=" mt-20 flex flex-col lg:flex-row gap-8">

						{/*------ First card---- */}

					<div className=" w-[20rem] lg:w-[28.87rem] flex flex-col  bg-[#12522D] rounded-2xl">

						{/*------ text container---- */}
							<div className=" p-4 flex flex-col">
								<h2 className=" text-center  text-white font-bold text-2xl mb-2 tracking-wide">
									Book with the best near you
								</h2>
								<p className=" w-[16rem] lg:w-[25.25rem] text-white mb-2">
									Looking for your next appointment with a hair stylist, 
									barber or nail technician?
								</p>
								<p  className=" w-[16rem] lg:w-[23.25rem] text-white mb-6">
									Search through our beauty expert’s portfolio and schedule 
									your appointment with your best.
								</p>
								<div className="flex justify-end">
								<Link to={"/"} className=" ">
										<button className=" bg-tertiary-brand btn btn-circle btn-sm px-20 btn-neutral">Book_an_appointment</button>
								</Link>	
								</div>
							</div>

							{/*------ image container---- */}

							<div>
								<img src={Star_img} alt="" />
							</div>
						</div>

							{/*------ Second card---- */}
						<div className=" w-[20rem] lg:w-[25.87rem] flex flex-col  bg-[#12522D] rounded-2xl">

							{/*------ text container---- */}
								<div className=" p-4 flex flex-col">
									<h2 className=" text-center  text-white font-bold text-2xl mb-2 tracking-wide">
									Something Come up? We’ve got you
									</h2>
									<p className=" w-[16rem] lg:w-[29.25rem] text-white mb-8">
										Reschedule or cancle with ease
									</p>
									<p  className="w-[16rem] lg:w-[23.25rem] text-white mb-4">
										And because we know life get busy. We will  send you reminders.
										So you don’t forget or miss out on another appointment.
									</p>
									<div className="flex justify-end">
									<Link to={"/"} className=" ">
											<button className=" bg-tertiary-brand btn btn-circle btn-sm px-20 btn-neutral">Book_an_appointment</button>
									</Link>	
									</div>
								</div>

								{/*------ image container---- */}

								<div>
									<img src={Notification_img} alt="" />
								</div>
						</div>
					</div>
						{/*------ Booking section ends here---- */}
					

						{/*------ Find beauty experts starts here---- */}

					<div className="mt-20 flex flex-col items-center justify-center ">

						<h2 className="text-black font-bold text-lg lg:text-2xl mb-2">
							Find a BeautyXpat specalist by location
						</h2>

						<div className=" pb-48">
							
							<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black bg-primary-brand  font-base rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-1.5 " type="button">Lagos <img src={dropdown} alt="" />
								
								</button>

									{/*------ dropdown button for lagos---- */}
								<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
									<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Isheri</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Lekki</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ikeja</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ojota</a>
									</li>
									</ul>
								</div>

								<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black bg-primary-brand  font-base rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-1.5 " type="button">Abuja<img src={dropdown} alt="" />
								
								</button>

									{/*------ dropdown button for Porthacourt---- */}
								<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
									<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Isheri</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Lekki</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ikeja</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ojota</a>
									</li>
									</ul>
								</div>

								<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black bg-primary-brand  font-base rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-1.5 " type="button">Port-hacourt <img src={dropdown} alt="" />
								
								</button>

									{/*------ dropdown button for Abuja---- */}
								<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
									<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Isheri</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Lekki</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ikeja</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ojota</a>
									</li>
									</ul>
								</div>

								<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black bg-primary-brand  font-base rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-1.5 " type="button">Akwa-ibom<img src={dropdown} alt="" />
								
								</button>

									{/*------ dropdown button for Akwa-ibom---- */}
								<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
									<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Isheri</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Lekki</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ikeja</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ojota</a>
									</li>
									</ul>
								</div>

								<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black bg-primary-brand  font-base rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-1.5 " type="button">Enugu<img src={dropdown} alt="" />
								
								</button>

									{/*------ dropdown button for Enugu---- */}
								<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
									<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Isheri</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Lekki</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ikeja</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ojota</a>
									</li>
									</ul>
								</div>

								<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-black bg-primary-brand  font-base rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center gap-1.5 " type="button">Delta<img src={dropdown} alt="" />
								
								</button>

									{/*------ dropdown button for Delta---- */}
								<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
									<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Isheri</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Lekki</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ikeja</a>
									</li>
									<li>
										<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ojota</a>
									</li>
									</ul>
								</div>

						</div>
						
					</div>
						{/*------ End of Find beauty experts starts here---- */}
						
						{/*------ Footer starts here---- */}
						<div className="text-[#12522D] flex flex-col justify-center items-center" >
							<div className="flex gap-3 lg:gap-6 items-center mb-10">
								<h3 className=" font-bold text-base lg:text-lg">
									Follow us:
								</h3>

								<img src={fb_logo} alt="" />
								<img src={ig_logo} alt="" />
								<img src={twitter_logo} alt="" />
								<img src={linkedin_logo} alt="" />
							</div>
							<span className=" mb-6">© 2024 Beauty Xpats. All Rights Reserved.</span>
						</div>
				</div>
					

			</div>
	</div>;
};

export default CustomerHomepage;
