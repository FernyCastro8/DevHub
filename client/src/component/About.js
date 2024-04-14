import React from 'react'

// Icons
import { LuNetwork } from "react-icons/lu"; // network icon
import { MdOutlineComputer } from "react-icons/md"; // computer icon
import { BsBriefcaseFill } from "react-icons/bs"; // suitcase icon


function About() {
    return (
        <div name="service">
            <section class="bg-gray-100 h-screen w-screen overflow-auto ">
                <div class="container px-6 py-10 mx-auto">
                    <div class="lg:flex lg:items-center">
                        <div class="w-full space-y-12 lg:w-1/2 ">
                            <div>
                                <h1 class="text-3xl font-semibold text-gray-900 capitalize lg:text-4xl ">About our Platform</h1>

                                <div class="mt-2">
                                    <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                                    <span class="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                                    <span class="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
                                </div>
                            </div>

                            <div class="md:flex md:items-center md:-mx-4">
                                <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <MdOutlineComputer size={25} />
                                    </svg>
                                </span>

                                <div class="mt-4 md:mx-4 md:mt-0">
                                    <h1 class="text-md font-semibold  text-gray-700  ">
                                        <li className='py-2' >Our platform aims to bridge the gap between developers and employers by providing a comprehensive profile creation system.
                                        </li>
                                        <li className='py-2' >Developers have the freedom to create highly customizable profiles, highlighting their skills, experience, education, and projects.
                                        </li>
                                        <li className='py-2' >Our platform facilitates skill endorsements, allowing other developers or employers to validate the expertise showcased on a developer's profile.
                                        </li>
                                    </h1>
                                </div>
                            </div>

                            <div class="md:flex md:items-center md:-mx-4">
                                <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    < BsBriefcaseFill size={25} />
                                </span>

                                <div class="mt-4 md:mx-4 md:mt-0">
                                    <h1 class="text-md font-semibold text-gray-700 ">
                                        <li className='py-3' >Simplifying the job posting and application process is a core feature of our platform. Employers can effortlessly post job openings, specifying required skills, experience levels, and other relevant details.
                                        </li>
                                        <li className='py-3' >With access to an intuitive dashboard, employers can efficiently manage job applications, review developer profiles, and communicate with applicants.
                                        </li>
                                        <li className='py-3' >Moreover, our platform employs a matching algorithm to suggest relevant job openings to developers based on their skills, experience, and preferences.
                                        </li>
                                    </h1>
                                </div>
                            </div>

                            <div class="md:flex md:items-center md:-mx-4">
                                <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                                    <LuNetwork size={25} />
                                </span>

                                <div class="mt-4 md:mx-4 md:mt-0">
                                    <div class="mt-4 md:mx-4 md:mt-0">
                                        <h1 class="text-md font-semibold text-gray-700 ">
                                            <li className='py-3' >Our platform fosters a vibrant developer community, facilitating networking and collaboration opportunities.
                                            </li>
                                            <li className='py-3' >Members can connect, share knowledge, and collaborate on projects within our platform's community. Dedicated discussion forums provide a space for developers to seek advice, share insights, and engage in industry-related discussions.
                                            </li>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                            {/* <img class="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" alt=""> */}
                        </div>
                    </div>

                    <hr class="border-gray-200 my-12 dark:border-gray-500"></hr>

                </div>
            </section >
        </div >
    );
};

export default About