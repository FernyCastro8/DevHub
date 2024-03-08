import React from 'react'
import { Link } from 'react-router-dom'

import img from '../assest/IMG_04.png'


function Header() {
    return (
        <div >
            <div>
                <section>
                    <section class="sticky">

                        <div class="max-w-lg px-4 sm:pt-24 pt-12 sm:pb-8 mx-auto text-left md:max-w-none md:text-center">
                            {/* <div class='text-center py-4 hidden sm:block'>
                                <button class="bg-white border border-[#E2E8F0] hover:bg-neutral-200 text-xs font-bold py-2.5 px-4 rounded-full inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill='#00acee' width="16" height="16" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                    &nbsp; &nbsp;<span> Follow on Twitter </span>
                                </button>
                            </div> */}

                            <div className="font-extrabold leading-10 tracking-tight text-[#201515] text-center sm:leading-none">
                                <h1 class="text-4xl sm:text-65l">
                                    <span class="inline md:block">Elevate Your Software Development Journey </span>
                                </h1>
                                {/* 
                                <h3 className="text-3xl">
                                    <span class="relative mt-2 bg-clip-text text-[#201515] md:inline-block"
                                    >Connecting Visionaries with Coders</span>
                                </h3> */}
                                <h3 className="text-2xl">
                                    <span class="relative mt-2 bg-clip-text text-[#201515] md:inline-block"
                                    >Your Gateway to Exceptional Tech Talent</span>
                                </h3>
                            </div>
                        </div>

                        {/* Buttons */}
                        {/* <div class="max-w-lg px-4 pb-18 mx-auto text-left md:max-w-none md:text-center" >
                            <div class='text-center py-4 space-x-4'>
                                <button class="backdrop-blur-sm transition duration-500 ease-in-out bg-[#FF4F01] border border-[#E2E8F0] translate-y-1 text-white hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
                                    <span> Build Your Custom App</span>
                                </button>

                                <button class="backdrop-blur-sm transition duration-500 ease-in-out bg-white border border-[#E2E8F0] translate-y-1 text-[#16161d] hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
                                    <span> Explore Apps</span>
                                </button>
                            </div>
                        </div> */}

                    </section>
                </section>


                <div class="text-left">

                    <div class='sm:px-28'>
                        <section class="relative flex items-center w-full">
                            <div class="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
                                <div class="relative flex-col items-start m-auto align-middle">
                                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                                        <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                                            <div class="max-w-xl text-center lg:text-left">
                                                <div>

                                                    <p class="text-3xl font-semibold tracking-tight text-[#201515] sm:text-3xl">
                                                        Connecting Visionaries with Coders
                                                    </p>
                                                    <p class="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                                                        Welcome to DevHub – the spot where amazing developers meet awesome job opportunities. We're a matchmaker for awesome coders and companies with cool projects, this is where you find exciting gigs. If you're a company looking for talent, well DevHub is where innovation meets skill.
                                                    </p>
                                                </div>
                                                <div class="flex justify-center gap-3 mt-10 lg:justify-center">
                                                    <Link to='/register'
                                                        class="inline-flex items-center justify-center text-md font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
                                                        <button type="button"
                                                            class="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            Sing up now &nbsp; →
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="order-first block w-full mt-12 aspect-square lg:mt-0">
                                            <img class="object-cover rounded-3xl object-center w-full mx-auto bg-white lg:ml-auto " alt="hero" src={img} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div class="mt-32" />

                        {/* <hr className="my-6 border-2 border-gray-200 sm:mx-auto dark:border-gray-300 lg:my-8 " /> */}
                    </div>


                </div>
            </div>

        </div>

    )
}

export default Header