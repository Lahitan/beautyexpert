import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/logo.png"
import Bell from "../../assets/bell.fill.svg";
import Chat from "../../assets/chat.svg"
import fullStar from "../../assets/fullStar.png"
import Hair_dresser_flier_21 from "../../assets/hair-dresser-flier-21.png"
import Heart from "../../assets/heart.svg"
import Arrow_left from "../../assets/arrow-left.svg"
import Arrow_right from "../../assets/arrow-right.svg"
import Makeup_flier_21 from "../../assets/makeup-flier-21.png"
import Ton_wear from "../../assets/ton-wear.png"
import Hair_dresser_flier_11 from "../../assets/hair-dresser-flier-11.png"
import fb_logo from "../../assets/fb-logo.png"
import ig_logo from "../../assets/ig-logo.png"
import linkedin_logo from "../../assets/linkedin-logo.png"
import twitter_logo from "../../assets/twitter-logo.png"
import barber_flier from "../../assets/barber-flier-11.png"
import barber_1 from "../../assets/baber-1.png"
import barber_2 from "../../assets/baber-2.png"
import jay from "../../assets/jay.png"
import jb from "../../assets/jb.png"
import tj from "../../assets/tj.png"
import nail_1 from "../../assets/nail-1.png"
import nail_2 from "../../assets/nail-2.png"
import nail_3 from "../../assets/nail-3.png"
import nail_4 from "../../assets/nail-4.png"
import makeup_1 from "../../assets/Makeup-1.png"
import makeup_2 from "../../assets/Makeup-2.png"
import makeup_3 from "../../assets/Makeup-3.png"
import fashion_3 from "../../assets/fashion-3.png"
import fashion_4 from "../../assets/fashion-4.png"
import fashion_5 from "../../assets/fashion-5.png"
import { FaBars } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";





const CustomerProduct = () => {

	const [menu, setMenu] = useState(false);
	const handleMenu = () => {
		setMenu(!menu);
	};

  return (
    <div>
       <div className=" bg-primary-brand">

            {/*------Nav---- */}
				<div>
                            <nav className="flex items-center  text-xl font-semibold ">
                                    <div className="w-[90%] mx-auto flex items-center justify-between">
                                    
                                                <div>
                                                    <img src={logo} alt="" className=" sm:w-11 w-8" />
                                                </div>

                                                <div className=" flex items-center gap-6 p-3">

                                                  {!menu ? (
                                                          <FaBars className=" text-2xl lg:hidden" onClick={handleMenu} />
                                                       ) : (
                                                          <GrClose className=" text-2xl lg:hidden" onClick={handleMenu} />
                                                         )}

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
                                                                className={`flex gap-2 items-center ${({ isActive }) =>
										                         isActive ? " text-[#3992EE]" : "text-[#B1B1B1]"}`}>
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


                                            <div className="flex items-center gap-4 p-3">
                                                <img src={Bell} alt="" />
                                                <img src={Chat} alt="" />
                                            </div>
					        	</div>
				    	</nav>
				</div>
                         {/*------Nav Ends here---- */}


                         {/*-----Top Services countainer here---- */}

                  <div className="w-[90%] mx-auto"> 

                        {/*------Top services start here---- */}

                                <div>
                                        <div>
                                            <h2 className=' text-black font-bold text-lg lg:text-2xl mt-20 mb-10 text-center' >
                                                Discover vetted talented professionals ready to make you slay.
                                            </h2>
                                        </div>

                                    <div>

                                        <div>
                                            <h3 className=' text-black font-bold  text-lg lg:text-2xl ml-10 mt-10 mb-6' >
                                                Hair Stylist
                                            </h3>
                                        </div>

                                         <div className=" flex flex-col lg:flex-row gap-6 lg:items-center justify-center items-center">

                                                {/*------ Left Arrow Container---- */}

                                                <div className=" hidden lg:bg-white lg:w-[4rem] lg:h-[4rem] lg:flex lg:items-center lg:rounded-full">
                                                    <img src={Arrow_left} alt="" />
                                                </div>

                                                {/*------ Top rating card 1---- */}

                                                <div className="border-2 border-blue-300 rounded-lg gap-8 w-[13.5rem]">

                                                    <img src={Hair_dresser_flier_11} alt="" />

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
						    <div className="border-2 border-blue-300 rounded-lg w-[13.5rem]">

							    <img src={jay} alt="" />

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
						    <div className="border-2 border-blue-300 rounded-lg w-[13.5rem]">

							    <img src={jb} alt="" />

							        {/*------ A container for the cards writing and the heart icon: giving it a flex---- */}
							    <div className="flex gap-16 mt-3">
								    <div>
                                        <h2  className=" text-black font-bold text-xl mb-6">
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
                                         <div className="border-2 border-blue-300 rounded-lg w-[13.5rem]">

                                                <img src={tj} alt="" />

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
                                                
                                                <div>

                                                <div>
                                                    <h3 className=' text-black font-bold text-lg lg:text-2xl  ml-10 mt-10 mb-6' >
                                                    Barber
                                                </h3>

                                            </div>

                                                <div className=" flex flex-col lg:flex-row gap-6 lg:items-center justify-center items-center">
                                                        {/*------ Left Arrow Container---- */}

                                                        <div className=" hidden lg:bg-white lg:w-[4rem] lg:h-[4rem] lg:flex lg:items-center lg:rounded-full">
                                                          <img src={Arrow_left} alt="" />
                                                       </div>

						                          {/*------ Top rating card 1---- */}

                                                    <div className="border-2 border-blue-300 rounded-lg gap-8 w-[13.5rem]">

                                                        <img src={barber_flier} alt="" />

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
                                                         <div className="border-2 border-blue-300 rounded-lg w-[13.5rem]">

                                                              <img src={barber_1} alt="" />

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
                                                                                        <div className="border-2 border-blue-300 rounded-lg w-[13.5rem]">

                                                                                        <img src={Hair_dresser_flier_11} alt="" />

                                                                                        {/*------ A container for the cards writing and the heart icon: giving it a flex---- */}
                                                                                            <div className="flex gap-16 mt-3">
                                                                                            <div>
                                                                                                    <h2  className=" text-black font-bold text-xl mb-6">
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
                                                                                <div className="border-2 border-blue-300 rounded-lg w-[13.5rem]">

                                                                                        <img src={barber_2} alt="" />

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

                                                                        <div>
                                                    
                                                                        <div>
                                                                                <h3 className=' text-black font-bold text-lg lg:text-2xl ml-10 mt-10 mb-6' >
                                                                                    Makeup
                                                                                </h3>

                                                                            </div>

                                                                            <div className=" flex flex-col lg:flex-row gap-6 lg:items-center justify-center items-center">
                                                                                {/*------ Left Arrow Container---- */}

                                                                                <div className=" hidden lg:bg-white lg:w-[4rem] lg:h-[4rem] lg:flex lg:items-center lg:rounded-full">
                                                                                    <img src={Arrow_left} alt="" />
                                                                                </div>

                                                                                {/*------ Top rating card 1---- */}

                                                                                <div className="border-2 border-blue-300 rounded-lg gap-8 w-[13.5rem]">

                                                                                    <img src={makeup_1} alt="" />

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
                                                                                <div className="border-2 border-blue-300 rounded-lg w-[13.5rem]">

                                                                                    <img src={makeup_2} alt="" />

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
                                                                                <div className="border-2 border-blue-300 rounded-lg w-[13.5rem]">

                                                                                    <img src={makeup_3} alt="" />

                                                                                        {/*------ A container for the cards writing and the heart icon: giving it a flex---- */}
                                                                                    <div className="flex gap-16 mt-3">
                                                                                        <div>
                                                                                            <h2  className=" text-black font-bold text-xl mb-6">
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
                                                                                    <div className="border-2 border-blue-300 rounded-lg w-[13.5rem]">

                                                                                            <img src={Makeup_flier_21} alt="" />

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

                                                                                <div>
                                                                                    
                                                                                    <div>
                                                                                        <h3 className=' text-black font-bold text-lg lg:text-2xl ml-10 mt-10 mb-6' >
                                                                                            Nail Art
                                                                                        </h3>

                                                                                    </div>

                                                                                
                                                                            <div className=" flex flex-col lg:flex-row gap-6 lg:items-center justify-center items-center">
                                                                                    {/*------ Left Arrow Container---- */}

                                                                                    <div className=" hidden lg:bg-white lg:w-[4rem] lg:h-[4rem] lg:flex lg:items-center lg:rounded-full">
                                                                                        <img src={Arrow_left} alt="" />
                                                                                    </div>

                                                                                    {/*------ Top rating card 1---- */}

                                                                                    <div className="border-2 border-blue-300 rounded-lg gap-8 w-[13.5rem]">

                                                                                            <img src={nail_2} alt="" />

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
                                                                                    <div className="border-2 border-blue-300 rounded-lg w-[13.5rem]">

                                                                                        <img src={nail_3} alt="" />

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
                                                                                    <div className="border-2 border-blue-300 rounded-lg w-[13.5rem]">

                                                                                        <img src={nail_1} alt="" />

                                                                                            {/*------ A container for the cards writing and the heart icon: giving it a flex---- */}
                                                                                        <div className="flex gap-16 mt-3">
                                                                                            <div>
                                                                                                <h2  className=" text-black font-bold text-xl mb-6">
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
                                                                                    <div className="border-2 border-blue-300 rounded-lg w-[13.5rem]">

                                                                                            <img src={nail_4} alt="" />

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

                                                                            <div>
                                                                                
                                                                            <div>
                                                                                    <h3 className=' text-black font-bold text-lg lg:text-2xl  ml-10 mt-10 mb-6' >
                                                                                        Fashion Design
                                                                                    </h3>

                                                                                    </div>

                                                                            

                                                                            <div className=" flex flex-col lg:flex-row gap-6 lg:items-center justify-center items-center">
                                                                                    {/*------ Left Arrow Container---- */}

                                                                                    <div className=" hidden lg:bg-white lg:w-[4rem] lg:h-[4rem] lg:flex lg:items-center lg:rounded-full">
                                                                                        <img src={Arrow_left} alt="" />
                                                                                    </div>

                                                                                    {/*------ Top rating card 1---- */}

                                                                                    <div className="border-2 border-blue-300 rounded-lg gap-8 w-[13.5rem]">

                                                                                        <img src={fashion_4} alt="" />

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
                                                                                    <div className="border-2 border-blue-300 rounded-lg w-[13.5rem]">

                                                                                        <img src={Ton_wear} alt="" />

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
                                                                                    <div className="border-2 border-blue-300 rounded-lg w-[13.5rem]">

                                                                                        <img src={fashion_5} alt="" />

                                                                                            {/*------ A container for the cards writing and the heart icon: giving it a flex---- */}
                                                                                        <div className="flex gap-16 mt-3">
                                                                                            <div>
                                                                                                <h2  className=" text-black font-bold text-xl mb-6">
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
                                                                                    <div className="border-2 border-blue-300 rounded-lg w-[13.5rem]">

                                                                                            <img src={fashion_3} alt="" />

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

                                                                            
                                                                                {/*------ Footer starts here---- */}
                                                                                <div className="text-[#12522D] flex flex-col justify-center items-center  mt-32" >
                                                                                    <div className="flex lg:gap-6 gap-3 items-center mb-10">
                                                                                        <h3 className=" font-bold lg:text-lg text-base">
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
       </div>
    </div>
  )
}

export default CustomerProduct;
