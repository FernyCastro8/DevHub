import React from 'react'
// import { Link } from 'react-router-dom'

// Icons
import { LuNetwork } from "react-icons/lu"; // network icon
import { MdOutlineComputer } from "react-icons/md"; // computer icon
import { BsBriefcaseFill } from "react-icons/bs"; // suitcase icon


function Service() {
    return (

        <div id="services"
            className="section relative pt-20 pb-12 md:pt-16 md:pb-10 bg-gray-50 h-screen w-screen overflow-auto">

            <div className="container xl:max-w-6xl mx-auto px-4">

                <header className="text-center mx-auto mb-12 lg:px-20">
                    <h2 className="text-4xl leading-normal mb-2 font-bold text-black">What We Do</h2>

                    <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-6">Connect with industry professionals.</p>
                </header>

                <div className="flex flex-wrap flex-row -mx-4 text-center">
                    <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp
                    visibility: visible; animation-duration: 1s; animation-name: fadeInUp
                    " data-wow-duration="1s" >

                        <div className="py-8 px-12 mb-12 bg-slate-200 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                            <div className="inline-block text-gray-900 mb-4">
                                <MdOutlineComputer size={30} />
                            </div>
                            <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Developers</h3>
                            <p className="text-gray-800 text-lg">
                                <span className='text-gray-500 text-md'>Developers can create personalized profiles showcasing their skills, experience, education, and projects. Other developers or employers can endorse specific skills listed on a developer's profile, validating their expertise</span>
                            </p>
                        </div>

                    </div>
                    <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp
                    visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;
                    " data-wow-duration="1s" data-wow-delay=".1s">

                        <div className="py-8 px-12 mb-12 bg-slate-200 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                            <div className="inline-block text-gray-900 mb-4">
                                <BsBriefcaseFill size={30} />
                            </div>
                            <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Employer</h3>
                            <p className="text-gray-500">Employers can easily post job openings, specifying required skills, experience level, and other relevant details.Employers have access to a dashboard to manage job applications, review developer profiles, and communicate with applicants.</p>
                        </div>

                    </div>
                    <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp
                    visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp
                    " data-wow-duration="1s" data-wow-delay=".3s">

                        <div className="py-8 px-12 mb-12 bg-slate-200 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                            <div className="inline-block text-gray-900 mb-4">
                                <LuNetwork size={30} />
                            </div>
                            <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Network & Collaborate</h3>
                            <p className="text-gray-500">The platform fosters a vibrant developer community where members can connect, share knowledge, and collaborate on projects.Dedicated discussion forums allow developers to seek advice, share insights, and engage in industry-related discussions.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Service