import React from 'react'

const ForExpert = () => {
  return (
    <div className="bg-primary-brand">
      <div className="w-[90%] mx-auto">
        <div className='bg-landing-page bg-no-repeat bg-center bg-cover h-[33.7rem] rounded-xl flex '>
            <div className='text-left w-[39rem] m-6 text-white content-start'>
                <h4 className='my-9 text-2xl font-semibold'>
                    For Beauty Experts
                </h4>

                <h3 className='text-4xl font-bold mb-8'>
                    Empower your artistry, showcase your business
                </h3>
                <p className='text-2xl w-[32rem] mb-8'>
                    Showcase your talent, manage appointments effortlessly, and 
                    connect with clients who crave your expertise.
                </p>
                <button className={" bg-tertiary-brand text-white font-semibold me-3 rounded-full py-2 px-5"}>
                                    Register	
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ForExpert
