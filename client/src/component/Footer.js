import { Link } from 'react-router-dom'

import logo from '../assest/DevHub-logo-emoji.png'


function Footer() {
    return (
        <footer name="footer" className="bg-white  shadow dark:bg-gray-900 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="DehHub Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to='/about' className="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link className='hover:underline' to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">DevHub™</a> . All Rights Reserved.
                    <p className='text-gray-400'>Website designed by <a className="text-blue-600 block text-sm sm:text-center hover:underline" href="https://fernycastro.com">Ferny Castro</a></p>
                </span>
            </div>
        </footer>
    );
}

export default Footer;

