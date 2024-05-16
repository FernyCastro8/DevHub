import React from 'react'
import { LuSearch } from "react-icons/lu";


function Associates() {
    return (
        <div className='h-screen w-screen bg-gray-50 overflow-auto' >

            <section className="p-10">
                <h1 className="text-center font-bold text-2xl">Associates</h1>

                {/*   <---  Search bar --->  */}
                <form className="max-w-md mx-auto pt-10 drop-shadow-lg">
                    <label for="search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <LuSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                            type="search"
                            id="search"
                            className="block w-full p-4 ps-10 text-md text-gray-900 border rounded-2xl  dark:bg-white dark:border-gray-5400 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search . . ." required />

                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>


                <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden drop-shadow-lg">
                        {/* <img className="h-56 lg:h-60 w-full object-cover"
                            src="" alt="" /> */}

                        {/* avatarr image */}
                        <div className=" flex justify-center py-5">
                            <div class=" flex items-center justify-center w-20 h-20 overflow-hidden 
                            bg-gray-100 rounded-full dark:bg-gray-300">
                                <span class="font-medium text-gray-300 dark:text-white">JL</span>
                            </div>
                        </div>

                        <div className="p-3">
                            <span className="text-lg text-primary">Name:</span>
                            <h3 className="font-semibold text-md leading-6 text-gray-700 my-2">Skill</h3>
                            <h3 className="text-md text-primary">Education</h3>

                            <p className="paragraph-normal text-gray-600">
                                Some Text ...
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden drop-shadow-lg">
                        {/* <img className="h-56 lg:h-60 w-full object-cover"
                            src="" alt="" /> */}

                        {/* avatarr image */}
                        <div className=" flex justify-center py-5">
                            <div class=" flex items-center justify-center w-20 h-20 overflow-hidden 
                            bg-gray-100 rounded-full dark:bg-gray-300">
                                <span class="font-medium text-gray-300 dark:text-white">JL</span>
                            </div>
                        </div>

                        <div className="p-3">
                            <span className="text-sm text-primary">Date</span>
                            <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                                Some Text
                            </h3>
                            <p className="paragraph-normal text-gray-600">
                                Some Text ...
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden drop-shadow-lg">
                        {/* <img className="h-56 lg:h-60 w-full object-cover"
                            src="" alt="" /> */}

                        {/* avatarr image */}
                        <div className=" flex justify-center py-5">
                            <div class=" flex items-center justify-center w-20 h-20 overflow-hidden 
                            bg-gray-100 rounded-full dark:bg-gray-300">
                                <span class="font-medium text-gray-300 dark:text-white">JL</span>
                            </div>
                        </div>

                        <div className="p-3">
                            <span className="text-sm text-primary">Date</span>
                            <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                                Some Text
                            </h3>
                            <p className="paragraph-normal text-gray-600">
                                Some Text ...
                            </p>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Associates