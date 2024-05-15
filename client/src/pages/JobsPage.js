import React from 'react'
import { LuSearch } from "react-icons/lu";


function JobsPage() {
    return (
        <div >
            <div className="bg-gray-50">

                <h1 className="flex justify-center text-3xl font-bold p-5">Jobs</h1>

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



                <div>
                    <div className="grid grid-cols-1 gap-4 p-12 md:grid-cols-2 min-h-screen px-2">
                        {/* <!-- Left Column --> */}
                        <div className="overflow-y-auto max-h-600px md:max-h-screen min-h-130vh ">
                            <div className=" rounded-3xl p-4 ">

                                <h1 className="text-3xl text-center  mb-2">Listing</h1>

                                {/* <!-- Listing Items --> */}
                                <div
                                    onclick="handleListingClick(listing)" // Funtion to retrive job from API
                                    className="cursor-pointer  mb-4 p-4 border-2 border-gray-200  dark:border-gray-300  rounded-3xl drop-shadow-lg ">
                                    <h2 className="text-2xl">Job Name: </h2>
                                    <h3 className="text-sm">Company: </h3>
                                    <ul className="mt-4">
                                        <li><h3 className="text-md">Location: </h3></li>
                                        <li><h3 className="text-md">Salary: $</h3></li>
                                    </ul>
                                    <h3 className="text-md mt-4">Job Details:</h3>
                                    <p className="">some text</p>

                                    <h3 className="text-xs mt-4">Date posted:</h3>
                                </div>
                                {/* <!-- End of a single listing item --> */}
                            </div>
                        </div>


                        {/* <!-- Right Column --> */}
                        <div className="overflow-y-auto max-h-600px md:max-h-screen">
                            <div className="rounded-3xl p-4 ">

                                <div className=" mb-4 p-4 border-2 border-gray-200 md:p-3 dark:border-gray-200 rounded-3xl">
                                    {/* <!-- Job Details --> */}
                                    <h2 className="text-2xl">Job Name</h2>
                                    <h3 className="text-ms">Company: </h3>
                                    <ul className="mt-4">
                                        <li><h3 className="text-md">Location: </h3></li>
                                        <li><h3 className="text-md">Salary: $ </h3></li>
                                    </ul>
                                    <h3 className="text-md mt-4">Details:</h3>
                                    <p className="text-md ">Example job details text goes here.</p>

                                    <h3 className="text-md mt-4">Description:</h3>
                                    <p className="text-md ">Example job description text goes here.</p>

                                    {/* <!-- Apply Button --> */}
                                    <button type="submit"
                                        onclick="handleApply(selectedListing._id)" // Funtion to select listing and apple ??
                                        className="bg-gray-100 text-gray-900 dark:bg-blue-500 dark:text-gray-100 px-3 py-2 mt-4 rounded-xl " >Apply Here</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default JobsPage