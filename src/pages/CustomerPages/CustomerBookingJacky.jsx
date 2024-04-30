import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import profile from '../../assets/profile.png'
import notification from '../../assets/notification.png'
import search from "../../assets/search.png";
import where from "../../assets/time.png";
import when from "../../assets/carbon_location.png";
import girl from "../../assets/jackyHair.png"
import map from '../../assets/map.png'
import greyHeart from '../../assets/greyHeart.png'
import dreadloc from '../../assets/dreadloc.png'
import cornrow from '../../assets/cornrow.png'
import arrow from '../../assets/arrowDown.png'
import one from '../../assets/salamiBibi.png'
import two from '../../assets/okonkwoIfu.png'
import three from '../../assets/aishaMo.png'
import four from '../../assets/temmyJay.png'
import fullStar from '../../assets/fullStar.png'
import halfStar from '../../assets/halfStar.png'
import sArrow from '../../assets/smallArrow.png'
import fb from "../../assets/fb-logo.png";
import ig from "../../assets/ig-logo.png";
import twitter from "../../assets/twitter-logo.png";
import linkedin from "../../assets/linkedin-logo.png";

const CustomerBookingJacky = () => {
  return (
    <div className='bg-primary-brand p-10' >

        {/* heading icons*/}
        <div className=' flex lg:flex-col-2 justify-between my-4 '>
            <div className=' w-12'>
                <img src={logo} alt="" />
            </div>
            <div className=' flex flex-col-5 items-center text-xs gap-4 mr-10 '>
                <Link to={"/CustomerBookingJacky"} className="  ">
                    <img src={profile} alt="profile" />
                </Link>	
                <Link to={"/CustomerBookingJacky"} className=" ">
                    <img src={notification} alt="notification" />
                </Link>	
            </div>
        </div>

        {/* form: search, where, when */}
        <div className='flex flex-col-4 items-center justify-center flex-grow my-4 lg:ml-[10%]'>
           <form action="#" className='flex items-center gap-2'>
                <div>
                    <label className='input input-bordered input-lg w-full max-w-sm max-h-8 flex items-center gap-2'>
                        <img src={search} alt="search" className='w-3 h-3'/>   
                        <input type="text" placeholder='search for services'  />
                    </label>
                </div>
                <div>
                    <label className='input input-bordered input-md w-full max-w-sm max-h-8 flex items-center gap-2'>
                        <img src={where}  alt="location" className='w-3 h-3' />   
                        <input type="text" placeholder='where?'   />
                    </label>
                </div>
                <div>
                    <label className='input input-bordered input-lg w-full max-w-sm max-h-8 flex items-center gap-2'>
                        <img src={when} alt="time" className='w-3 h-3' />   
                        <input type="text" placeholder='when?'   />
                    </label>
                </div>
           </form>
        </div>

        {/* body */}
        <div className=" flex flex-col-2 my-8 gap-4"> 
            {/* image */}
            <div className=" w-6/12">
                <div className='' > 
                    <img src={girl} alt="a girl wearing half braids" />
                </div>
                <div className='my-8 mx-4'>
                    <div className=' flex items-center font-bold justify-between'>
                        <div>
                            <h6>Jacky Hair</h6>
                            <span className=' font-thin text-xs' >56, Surulere, Lawanson</span>
                        </div>
                        <img src={greyHeart} alt="greyheart-logo" className=' w-8 h-8 mr-8' />
                    </div>
                    <div>
                        <h6 className=' my-4 font-bold' >Services</h6>
                        {/* all services */}
                        <div>
                        {/* individual services service 1 */}
                            <div className=' flex items-center justify-between text-xs font-thin '>
                                <h6 className=' ' >Wigging & Revamping</h6>
                                <div className='text-xs '>
                                    <div className=' flex flex-col-2 items-center justify-between'>
                                        <div className=' flex flex-col-2 items-center mx-2'>
                                            <div className=' text-xs mx-2' >
                                                <p>₦15,000</p>
                                                <p>1hr 30min</p>                                            
                                            </div>
                                            <div>
                                                <Link to={"/CustomerBookingJacky"} className=" ">
                                                    <button className="btn btn-active btn-xs btn-accent">Book</button>                                    
                                                </Link>	
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className=' bg-gray-400 h-0.5' />  <br /> 
                            {/* service 2 */}
                            <div className=' flex items-center justify-between text-xs font-thin '>
                                <h6 className=' ' >Cornrows & Weaves</h6>
                                <div className='text-xs '>
                                    <div className=' flex flex-col-2 items-center justify-between'>
                                        <div className=' flex flex-col-2 items-center mx-2'>
                                            <div className=' text-xs mx-2' >
                                                <p>₦10,000</p>
                                                <p>1hr 30min</p>                                            
                                            </div>
                                            <div>
                                                <Link to={"/CustomerBookingJacky"} className=" ">
                                                    <button className="btn btn-active btn-xs btn-accent">Book</button>                                    
                                                </Link>	
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className=' bg-gray-400 h-0.5' />  <br /> 
                            {/* service 3 */}
                            <div className=' flex items-center justify-between text-xs font-thin '>
                                <h6 className=' ' >Washing & Drying</h6>
                                <div className='text-xs '>
                                    <div className=' flex flex-col-2 items-center justify-between'>
                                        <div className=' flex flex-col-2 items-center mx-2'>
                                            <div className=' text-xs mx-2' >
                                                <p>₦4,000</p>
                                                <p>1hr</p>                                            
                                            </div>
                                            <div>
                                                <Link to={"/CustomerBookingJacky"} className=" ">
                                                    <button className="btn btn-active btn-xs btn-accent">Book</button>                                    
                                                </Link>	
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className=' bg-gray-400 h-0.5' />  <br /> 
                            {/* service 4 */}
                            <div className=' flex items-center justify-between text-xs font-thin '>
                                <h6 className=' ' >Deep Condition Treatment & Retouching</h6>
                                <div className='text-xs '>
                                    <div className=' flex flex-col-2 items-center justify-between'>
                                        <div className=' flex flex-col-2 items-center mx-2'>
                                            <div className=' text-xs mx-2' >
                                                <p>₦10,000</p>
                                                <p>1hr</p>                                            
                                            </div>
                                            <div>
                                                <Link to={"/CustomerBookingJacky"} className=" ">
                                                    <button className="btn btn-active btn-xs btn-accent">Book</button>                                    
                                                </Link>	
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className=' bg-gray-400 h-0.5' />  <br /> 
                            {/* service 5 */}
                            <div className=' flex items-center justify-between text-xs font-thin '>
                                <h6 className=' ' >Twist & Dreadlock</h6>
                                <div className='text-xs '>
                                    <div className=' flex flex-col-2 items-center justify-between'>
                                        <div className=' flex flex-col-2 items-center mx-2'>
                                            <div className=' text-xs mx-2' >
                                                <p>₦20,000</p>
                                                <p>1hr 45 min</p>                                            
                                            </div>
                                            <div>
                                                <Link to={"/CustomerBookingJacky"} className=" ">
                                                    <button className="btn btn-active btn-xs btn-accent">Book</button>                                    
                                                </Link>	
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className=' bg-gray-400 h-0.5' />  <br /> 
                            {/* service 6 */}
                            <div className=' flex items-center justify-between text-xs font-thin '>
                                <h6 className=' ' >Hair Extension Styling & Ponytail</h6>
                                <div className='text-xs '>
                                    <div className=' flex flex-col-2 items-center justify-between'>
                                        <div className=' flex flex-col-2 items-center mx-2'>
                                            <div className=' text-xs mx-2' >
                                                <p>₦4,000</p>
                                                <p>1hr</p>                                            
                                            </div>
                                            <div>
                                                <Link to={"/CustomerBookingJacky"} className=" ">
                                                    <button className="btn btn-active btn-xs btn-accent">Book</button>                                    
                                                </Link>	
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className=' bg-gray-400 h-0.5' />  <br /> 
                            {/* service 7 */}
                            <div className=' flex items-center justify-between text-xs font-thin '>
                                <h6 className=' ' >Straightening & Installation</h6>
                                <div className='text-xs '>
                                    <div className=' flex flex-col-2 items-center justify-between'>
                                        <div className=' flex flex-col-2 items-center mx-2'>
                                            <div className=' text-xs mx-2' >
                                                <p>₦20,000</p>
                                                <p>1hr 40min</p>                                            
                                            </div>
                                            <div>
                                                <Link to={"/CustomerBookingJacky"} className=" ">
                                                    <button className="btn btn-active btn-xs btn-accent">Book</button>                                    
                                                </Link>	
                                            </div>                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className=' bg-gray-400 h-0.5' />  <br /> 
                        </div>
                    </div>
                    {/* view our work */}
                    <div>
                        <h6 className=' my-4 font-bold' >View our work</h6>
                        <div className='flex flex-col-2 justify-start items-center my-4'>
                            <img src={cornrow} alt="" className='w-48 h-48' />
                            <img src={dreadloc} alt="" className='w-48 h-48' />
                        </div>
                        <div>
                            <Link to={"/CustomerBookingJacky"} className="  ">
                                <button className=" w-[100%] btn btn-xs btn-active btn-accent my-4 text-primary-brand ">VIEW MORE</button>                                    
                            </Link>	
                        </div> 
                    </div>
                    {/* reviews  */}
                    <div className=' '>
                        <h6 className=' my-4 font-bold' >Reviews</h6> 
                        {/*  reviews div box with white background */}
                        <div className=" bg-secondary-content p-3 border border-secondary-brand rounded-lg w-96 text-xs">
                            {/* sub-heading */}
                            <div className=" flex flex-col-2 justify-between">
                                <h6 className='font-medium'>Customer</h6>
                                <div className=" flex flex-col-3 justify-between gap-2">
                                    <h6>Sort by</h6>
                                    <span className=' font-medium' >Newest</span>
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                            {/* paragraphs*/}
                            <div>
                                {/* paragraph 1 */}
                                <div className=' flex items-center gap-4 my-6'>
                                    <img src={one} alt="" />
                                    <div className='' >
                                        <div className=' flex flex-col-2 justify-between'>
                                            <p className='font-bold'>Salami Bibiola</p>
                                            <div className='flex' >
                                                <img src={fullStar} alt="full-star" />
                                                <img src={fullStar} alt="full-star" />
                                                <img src={fullStar} alt="full-star" />
                                                <img src={fullStar} alt="full-star" />
                                                <img src={fullStar} alt="full-star" />
                                            </div>
                                        </div>
                                        <p>Amope is a braiding genius. She took the time to understand what style. I wanted and created neat, beautiful and long-lasting Ghana-weaving.</p>
                                    </div>
                                </div>
                                {/* paragraph 2 */}
                                <div className=' flex items-center gap-4 my-6'>
                                    <img src={two} alt="" />
                                    <div className='' >
                                        <div className=' flex flex-col-2 justify-between'>
                                            <p className='font-bold'>Okonkwo Ifunnanya</p>
                                            <div className='flex' >
                                                <img src={fullStar} alt="full-star" />
                                                <img src={fullStar} alt="full-star" />
                                                <img src={fullStar} alt="full-star" />
                                                <img src={fullStar} alt="full-star" />
                                                <img src={halfStar} alt="full-star" />
                                            </div>
                                        </div>
                                        <p>Shes's the best hairstylist I've ever been to. She did a fantastic job on my gele for a wedding </p>
                                    </div>
                                </div>
                                {/* paragraph 3 */}
                                <div className=' flex items-center gap-4 my-6'>
                                    <img src={three} alt="" />
                                    <div className='' >
                                        <div className=' flex flex-col-2 justify-between'>
                                            <p className='font-bold'>Aisha Mohammed</p>
                                            <div className='flex' >
                                                <img src={fullStar} alt="full-star" />
                                                <img src={fullStar} alt="full-star" />
                                                <img src={fullStar} alt="full-star" />
                                                <img src={fullStar} alt="full-star" />
                                            </div>
                                        </div>
                                        <p>The hairstylist was welcoming and professional. Just a snall thing, maybe offering a wide selection of hair products for naturalists would have been better</p>
                                    </div>
                                </div>
                                {/* paragraph 4 */}
                                <div className=' flex items-center gap-4 my-6'>
                                    <img src={four} alt="" />
                                    <div className='' >
                                        <div className=' flex flex-col-2 justify-between'>
                                            <p className='font-bold'>Temmy Jay</p>
                                            <div className='flex' >
                                                <img src={fullStar} alt="full-star" />
                                                <img src={fullStar} alt="full-star" />
                                                <img src={fullStar} alt="full-star" />
                                                <img src={halfStar} alt="full-star" />
                                            </div>
                                        </div>
                                        <p>The appointment for my locs retwist was good, but i felt like it could been a bit quicker. Maybe having an assistant to help could speed things up? Still, the final result looks good</p>
                                    </div>
                                </div>
                                <div className='flex flex-col-2 items-center gap-2'>
                                    <p>All reviews</p>
                                    <div>
                                        <Link to={"/CustomerBookingJacky"} className=" ">
                                            <img src={sArrow} alt="" className='w-4 h-2' />                                  
                                        </Link>	
                                    </div> 
                                </div>
                            </div>

                            
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* stats: map, about us, working hours */}
            <div className=' w-6/12 '>
                {/* map */}
                <div className=' mb-4' >
                    <img src={map} alt="picture of a map of lagos state" className="w-[100%]" />
                </div>
                {/* about us */}
                <div>
                    <h6 className=' w-6/12 m-auto mb-4 font-bold text-center '>About Us</h6>
                    <div className=' text-center font-medium mb-4'>
                        <p>
                            I am the proud owner of TJ's Unisex Salon, located in the beautiful city of 
                            Lagos at 56, Surulere. I specialise in all kinds of braids, wigging & revamping, 
                            cornrows & weave, washing & drying, deep conditioning treatment, retouching, 
                            twists &  dreadlock, hair extension, styling & ponytail, stretching & installation.
                        <br />
                            My main focus is your hair health. I am very well diverse on multiple hair texture. 
                            Looking forward to rendering my servicing you
                        </p>
                    </div>
                    <div className=" m-2">
                        <h6 className=' w-6/12 m-auto mb-4 font-bold text-center '>Working Hours</h6>
                        <div>
                            <div className=' flex flex-col-2 justify-between'>
                                <p className=' text-gray-800' >Monday - Friday</p>
                                <p className=' font-medium'>9AM - 8PM</p>
                            </div>
                            <hr className=' bg-gray-400 h-0.5' /><br />
                            <div className=' flex flex-col-2 justify-between'>
                                <p className=' text-gray-800' >Saturday</p>
                                <p className=' font-medium'>9AM - 8PM</p>
                            </div>
                            <hr className=' bg-gray-400 h-0.5' /><br />
                            <div className=' flex flex-col-2 justify-between'>
                                <p className=' text-gray-800' >Sunday</p>
                                <p className=' font-medium'>Closed</p>
                            </div>
                            <hr className=' bg-gray-400 h-0.5' /><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* footer section */}
        <div>
            {/* Follow us section */}
            <div className="flex mt-8 lg:col-span-2 items-center justify-center flex-grow">
                <p className=" text-base font-bold mr-5 text-secondary-brand">Follow us:</p>
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
        

    </div>
  )
}

export default CustomerBookingJacky
