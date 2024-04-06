import React from 'react'
import { Link } from 'react-router-dom'

// assets
import img from '../../assest/IMG_02.png'
import img2 from '../../assest/IMG_06.jpg'



function Home2() {
    return (
        <div className='bg-gray-100'>
            {/* Developer section */}
            <div name="developer section" className="m-auto max-w-6xl p-12  ">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 max-w-md flex flex-col justify-center">
                        <div className="md:text-2xl text-lg uppercase font-black">For Developers</div>
                        <div className="text-xl mt-4">
                            Accelerate your career by joining our platform inovating Developers.
                            <p className='pt-4'>Showcase your skills, connect with industry leaders, and unlock new opportunities that propel your coding journey to new heights.
                            </p>
                        </div>
                        <div className="flex justify-center m-5">
                            <Link to="/service">
                                <button className="shadow-md font-sm py-1.5 px-2 text-white cursor-pointer  bg-blue-600 hover:bg-blue-700 rounded-lg text-sm text-center ">Become a prospect
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex md:justify-end w-full md:w-1/2 ">
                        <div className="bg-dots">
                            <div className="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4 ">
                                <img src={img} alt="student-vector img" />
                            </div>
                        </div>
                    </div>
                </div>

                <hr className=" my-6 border-2 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-10 " />

                {/* Employer section */}
                <div name='employer section' className="flex flex-col md:flex-row ">

                    <div className="flex md:justify-center w-full md:w-1/2 -mt-5">
                        <div className="bg-dots">
                            <div className="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
                                <img className='rounded-lg' src={img2} alt="employer-vector img" />

                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 max-w-md flex flex-col justify-center mt-10">
                        <div className="md:text-2xl text-lg text-center uppercase font-black">For Employer</div>
                        <div className="text-xl mt-4">
                            Elevate your projects with our elite software developers who bring innovation and expertise to every line of code.
                            <p className=' text-md pt-5'>Find your top-tier talent by showcasing your job openings or projects on our platform.</p>
                        </div>
                        <div className="flex justify-center m-5">
                            <Link to="/service">
                                <button className="shadow-md font-sm py-1.5 px-2 text-white cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-lg text-sm text-center">Partner with us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home2