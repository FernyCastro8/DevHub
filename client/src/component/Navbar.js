import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

import logo from "../assest/DevHub-logo-emoji.png"

const links = [
    {
        id: 0,
        to: '/',
        element: 'Home'
    },
    {
        id: 1,
        to: '/service',
        element: 'Service'
    },
    {
        id: 2,
        to: '/associates',
        element: 'Associates'
    },
];

function Navbar() {
    const [nav, setNav] = useState(false);

    return (
        <nav className="bg-white border-gray-200 dark:bg-slate-900">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative">
                <div className="flex items-center space-x-3">
                    <a href="/" className="flex items-center space-x-3">
                        <img src={logo} className="h-8" alt="DevHub Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                </div>

                <div className="flex md:order-2 items-center flex-row-reverse space-x-3 md:space-x-0 ">
                    <div className="hidden md:flex md:items-center md:w-auto md:order-1">
                        <ul className="flex flex-row font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white  md:dark:bg-slate-900 dark:border-slate-700">
                            {links.map(({ id, element, to }) =>
                                <div key={id}>
                                    <NavLink to={to}>
                                        <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{element} </li>
                                    </NavLink>
                                </div>
                            )}
                        </ul>
                        <div className="">
                            <NavLink to='/login'>
                                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-800 hover:bg-gradient-to-br focus:ring-3 focus:outline-none dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-700/20 font-medium rounded-lg text-sm px-4 py-2 text-center me-1 mb-1 ml-5 mr-3 ">Login</button>
                            </NavLink>

                            <NavLink to="/register">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-slate-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:shadow-lg dark:shadow-slate-600/20">Get started</button>
                            </NavLink>
                        </div>
                    </div>

                    {/*         handle mobile   ||  hamburger menu bar        */}
                    <div
                        className="cursor-pointer pr-4  z-10 text-gray-400 md:hidden flex items-center ">
                        <div className="px-4">
                            <NavLink to="/register">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-slate-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:shadow-lg dark:shadow-slate-600/20">Get started</button>
                            </NavLink>
                        </div>

                        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}

                        {nav && (
                            <ul className="flex flex-col justify-center items-center absolute py-6 pb-10 top-0 left-0 w-full h-screen z-50 bg-gray-900  ">
                                <div className="cursor-pointer absolute top-5 right-8 z-50 md:hidden" onClick={() => setNav(false)}>
                                    <FaTimes size={25} />
                                </div>

                                {links.map(({ id, to, element }) => (
                                    <li key={id} className="text-white text-lg px-4 py-5 cursor-pointer hover:scale-110 duration-200" >
                                        <NavLink
                                            to={to}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            onClick={() => setNav(false)}
                                        >
                                            {element}
                                        </NavLink>
                                    </li>
                                ))}
                                <li className="mt-5">
                                    <NavLink to="/register">
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-slate-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:shadow-lg dark:shadow-slate-600/20">Get started</button>
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>

                </div>
            </div>
        </nav >
    )
}

export default Navbar;
