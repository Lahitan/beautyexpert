import React from 'react'
import { Link } from 'react-router-dom';
import CustomerServicesCard from './CustomerServicesCard';
import { MdOutlineStarPurple500 } from "react-icons/md";
import image1 from "../../assets/hair-dresser-flier-11.png";
import image2 from "../../assets/jay.png";
import image3 from "../../assets/tj.png";
import image4 from "../../assets/jb.png";
import logo from "../../assets/logo.png";
import greyHeart from '../../assets/greyHeart.png'
import previous from '../../assets/previous.png'
import next from '../../assets/next.png'
import fb from "../../assets/fb-logo.png";
import ig from "../../assets/ig-logo.png";
import twitter from "../../assets/twitter-logo.png";
import linkedin from "../../assets/linkedin-logo.png";



const CustomerServices = () => {
// calling from CustomersServicescard
    const arr = [
        {
            image: image1,
            title: "Jacky Hair",
            stars: [..."1234"].map((each) => (
                <MdOutlineStarPurple500 className="text-[#FFCE31]" />
            )),
            price: "From ₦15,000 ",
            heartLogo: greyHeart,
        },
        {
            image: image2,
            title: "Jays Wigplug",
            stars: [..."1234"].map((each) => (
                <MdOutlineStarPurple500 className="text-[#FFCE31]" />
            )),
            price: "From ₦30,000 ",
            heartLogo: greyHeart,
        },
        {
            image: image3,
            title: "TJ'S Unisex Salon",
            stars: [..."1234"].map((each) => (
                <MdOutlineStarPurple500 className="text-[#FFCE31]" />
            )),
            price: "From ₦20,000 ",
            heartLogo: greyHeart,
        },
        {
            image: image4,
            title: "JB Hairs",
            stars: [..."1234"].map((each) => (
                <MdOutlineStarPurple500 className="text-[#FFCE31]" />
            )),
            price: "From ₦15,000 ",
            heartLogo: greyHeart,
        },
    ];

  return (
    <div className=' bg-primary-brand p-12 ' >
        {/* header */}
        <div className=' flex lg:flex-col-2 '>
            <div className=' w-12'>
                <img src={logo} alt="" />
            </div>
            <div className=' flex flex-col-5 justify-center items-center flex-grow gap-2 text-xs '>
                <Link to={"/CustomerServices"} className="  ">
                    <button className="btn btn-circle btn-sm px-10 btn-neutral text-xs ">Hairstyling</button>
                </Link>	
                <Link to={"/CustomerServices"} className=" ">
                    <button className="btn btn-circle btn-sm px-10 btn-neutral text-xs">Barbing</button>
                </Link>	
                <Link to={"/CustomerServices"} className=" ">
                    <button className="btn btn-circle btn-sm px-10 btn-neutral text-xs">Manicure</button>
                </Link>	
                <Link to={"/CustomerServices"} className=" ">
                    <button className="btn btn-circle btn-sm px-10 btn-neutral text-xs">Makeup</button>
                </Link>	
                <Link to={"/CustomerServices"} className=" ">
                    <button className="btn btn-circle btn-sm px-10 btn-neutral text-xs">Fashion</button>
                </Link>	
            </div>
        </div>

        {/* heading paragraph */}
        <div className=' w-[40%] m-auto my-5 text-md font-bold' > 
            <p>Hair salons near me in Surulere, Lagos, No of Salons (10) </p>
        </div>

        {/* card div with CustomerServicesCard */}
        <div className=' flex flex-col-3 justify-center items-center flex-grow' >
            <img src={previous} alt="" />
            <div className="md:flex justify-between grid grid-cols-2 lg:gap-8 gap-2">
				{arr.map((card, i) => {
					return <CustomerServicesCard key={i} {...card} />;
				})}
			</div>
            <img src={next} alt="" />
        </div>

        {/* Follow us section */}
		<div className="flex mt-8 lg:col-span-2 items-center justify-center flex-grow">
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
        {/* copyright and all rights reserved */}
		<div className="text-xs mt-6 text-center">
			<span>© 2024 Beauty Xpats: </span>
            <a href="/">All Rights Reserved</a>
		</div> 
    </div>
  )
}



export default CustomerServices
