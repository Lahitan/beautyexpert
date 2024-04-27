import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import profile from '../../assets/profile.png'
import notification from '../../assets/notification.png'


const CustomerBooking = () => {
  return (
    <div className='bg-primary-brand p-12' >
        {/* heading */}
        <div className=' flex lg:flex-col-2 justify-between '>
            <div className=' w-12'>
                <img src={logo} alt="" />
            </div>
            {/* justify-center items-center flex-grow gap-2 */}
            <div className=' flex flex-col-5 items-center text-xs '>
                <Link to={"/CustomerBooking"} className="  ">
                    <img src={profile} alt="" />
                </Link>	
                <Link to={"/CustomerBooking"} className=" ">
                    <img src={notification} alt="" />
                </Link>	
            </div>
        </div>
    </div>
  )
}

export default CustomerBooking
