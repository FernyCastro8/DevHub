// import react from "react";
import { Link } from 'react-router-dom'

import logo from "../assest/DevHub-logo-emoji.png"

// Looping navBar links
const links = [
    {
        id: 0,
        elemente: 'Home',
        to: '/',
    },
    {
        id: 1,
        elemente: 'Service',
        to: '/service',
    },
    {
        id: 2,
        elemente: 'Associates',
        to: '/associates',
    },

];


function Navbar() {

    return (
        <nav className="bg-white border-gray-200 dark:bg-slate-900">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3">
                    <a href="/" className="flex items-center space-x-3">
                        <img src={logo} className="h-8" alt="DevHub Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                </div>

                <div className="flex md:order-2 items-center flex-row-reverse space-x-3 md:space-x-0 ">
                    <div className="hidden md:flex md:items-center md:w-auto md:order-1">
                        <ul className="flex flex-row font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {links.map(({ id, elemente, to }) =>
                                <div key={id}>
                                    <Link to={to}>
                                        <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ">{elemente} </li>
                                    </Link>
                                </div>
                            )}
                        </ul>
                        <div className="">
                            <Link to='/login'>
                                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-3 focus:outline-none dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-700/20 font-medium rounded-lg text-sm px-4 py-2 text-center me-1 mb-1 ml-5 mr-3 ">Login</button>
                            </Link>

                            <Link to="/register">
                                < button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-slate-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:shadow-lg dark:shadow-slate-600/20">Get started</button>
                            </Link>
                        </div>
                    </div>

                    {/* Hamburger Menu -m " Still in the works" */}
                    <button data-collapse-toggle="navbar-cta" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;
