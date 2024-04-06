import React from 'react'
import { Link } from "react-router-dom"
import tailor from "../../assets/tailor-background-image.png"
import loading from "../../assets/step-loading-logo.png"
import line from "../../assets/line-logo.png"
import unchecked from "../../assets/unchecked-logo.png"
import eye from "../../assets/eye-logo.png"
import wideLine from "../../assets/wide-line.png"

const background = {
        backgroundImage: `url(${tailor})`,
        backgroundRepeat:'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'left',
        width: '100%',
        height: '100vh'
  }

const ExpertCreateAccount = () => {
  return (
    <div className=' items-center bg-primary-brand' >
        <div className="grid md:grid-cols-2 lg:grid-cols-2">
            {/* background image */}
            <div style={background} className=' ' >
                {/* headings */}
                <div className='flex flex-col items-center justify-center '>
                    <h1 className=' font-bold' >Create an account as an expert</h1>
                    <h2 className="h2">
                        Already have an account?
                        <Link to={"/login"} className=" "> Log in</Link>
                    </h2>
                </div>
            </div>
            <div>
                {/* sign in steps */}
                <div className=' grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 place-items-center text-xs gap-3 p-5 mt-10 '>
                    <img src={wideLine} alt="" className=' md:hidden lg:hidden ' />
                    <div className=' flex flex-row items-center p-0 w-32 h-6 flex-none order-1 flex-grow-0 ' >
                        <img src={loading} alt="" />
                        <div className='p-2' >
                            <h3 className='font-bold' >STEP 1</h3>
                            <p>Create account</p>
                        </div>
                    </div>
                    <div className=' flex flex-row items-center p-0 w-32 h-6 flex-none order-1 flex-grow-0 ' >
                        <img src={line} alt="" />
                        <img src={unchecked} alt="" />
                        <h3 className='p-2  font-bold' >STEP 2</h3>
                    </div>
                    <div className=' flex flex-row items-center p-0 w-32 h-6 flex-none order-1 flex-grow-0  ' >
                        <img src={line} alt="" />
                        <img src={unchecked} alt="" />
                        <h3 className='p-2 font-bold '>STEP 3</h3>
                    </div>
                    <div className=' flex flex-row items-center p-0 w-32 h-6 flex-none order-1 flex-grow-0 ' >
                        <img src={line} alt="" />
                        <img src={unchecked} alt="" />
                        <h3 className='p-2 font-bold '>STEP 4</h3>
                    </div>

                </div>
                {/* end of sign in steps */}
                {/* form */}
                <div className=" flex flex-col  place-items-center gap-10 w-[100%] h-[466px] my-7  ">
                   <div className=' flex flex-col  items-start   ' >
                   <div >
                        <span className='label-text font-bold'>First Name</span>
                        <label className="input input-bordered flex items-center gap-9 bg-primary-brand ">
                            <input type="text" className="grow" placeholder="Ajoke" />
                        </label>
                        <span className='label-text font-bold'>Last Name</span>
                        <label className="input input-bordered flex items-center gap-9 bg-primary-brand ">
                            <input type="text" className="grow" placeholder="Chidi" />
                        </label>
                    </div>
                    <div>
                    <div>
                        <span className='label-text font-bold'>Email</span>
                        <label className="input input-bordered flex items-center gap-2 bg-primary-brand ">
                            <input type="text" className="grow" placeholder="Enter your email address" />
                        </label>
                    </div>
                    <div>
                        <span className='label-text font-bold'>Password</span>
                        <label className="input input-bordered flex items-center gap-2 bg-primary-brand ">
                            <input type="password" className="grow" placeholder='Password' />
                            <img src={eye} alt="" />
                        </label>
                        <span className=' text-xs text-gray-400'>Password must be 8 characters</span>
                    </div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2 bg-primary-brand ">
                            <input type="password" className="grow" placeholder='Confirm password'  />
                            <img src={eye} alt="" />
                        </label>
                    </div>
                    </div>
                   </div>
                    {/* button */}
                <div className=" card-actions justify-center">
                    <button className="btn btn-circle btn-sm px-16 btn-neutral">Next</button>
                </div>
                </div>
                {/* end of form  */}
            </div>
            
        </div>       
    </div>

  )
}

export default ExpertCreateAccount