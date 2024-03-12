import React from 'react'

function Associates() {
    return (
        <div className='h-screen w-screen overflow-auto bg-slate-200  ' >

            <section className="p-10">
                <h1 className="text-center font-bold text-2xl">Responsive Grid Layout </h1>

                {/* Search bar */}
                <form className="max-w-md mx-auto pt-5">
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Associates" required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>


                <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
                        <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className="p-3">
                            <span className="text-sm text-primary">November 19, 2022</span>
                            <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                                International Women's Day 2022: Date, history, significance, theme this year
                            </h3>
                            <p className="paragraph-normal text-gray-600">
                                Happy Women's Day 2022: Read on to know all about the history and significance...
                            </p>
                            <a className="mt-3 block" href="/">Read More </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
                        <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className="p-3">
                            <span className="text-sm text-primary">November 19, 2022</span>
                            <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                                International Women's Day 2022: Date, history, significance, theme this year
                            </h3>
                            <p className="paragraph-normal text-gray-600">
                                Happy Women's Day 2022: Read on to know all about the history and significance...
                            </p>
                            <a className="mt-3 block" href="/">Read More </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
                        <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1637419450536-378d5457abb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className="p-3">
                            <span className="text-sm text-primary">November 19, 2022</span>
                            <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                                International Women's Day 2022: Date, history, significance, theme this year
                            </h3>
                            <p className="paragraph-normal text-gray-600">
                                Happy Women's Day 2022: Read on to know all about the history and significance...
                            </p>
                            <a className="mt-3 block" href="/">Read More </a>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
                        <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1621352404112-58e2468993a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className="p-3">
                            <span className="text-sm text-primary">November 19, 2022</span>
                            <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                                International Women's Day 2022: Date, history, significance, theme this year
                            </h3>
                            <p className="paragraph-normal text-gray-600">
                                Happy Women's Day 2022: Read on to know all about the history and significance...
                            </p>
                            <a className="mt-3 block" href="/">Read More</a>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
                        <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className="p-3">
                            <span className="text-sm text-primary">November 19, 2022</span>
                            <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                                International Women's Day 2022: Date, history, significance, theme this year
                            </h3>
                            <p className="paragraph-normal text-gray-600">
                                Happy Women's Day 2022: Read on to know all about the history and significance...
                            </p>
                            <a className="mt-3 block" href="/">Read More </a>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
                        <img className="h-56 lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1633329712176-4751f52ccc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className="p-3">
                            <span className="text-sm text-primary">November 19, 2022</span>
                            <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                                International Women's Day 2022: Date, history, significance, theme this year
                            </h3>
                            <p className="paragraph-normal text-gray-600">
                                Happy Women's Day 2022: Read on to know all about the history and significance...
                            </p>
                            <a className="mt-3 block" href="/">Read More</a>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Associates