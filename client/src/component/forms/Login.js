import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='bg-slate-800' >
            <div className='flex items-center justify-center h-screen'>
                <div className=" ">
                    <div className=''>
                        <form className="max-w-lg mx-auto bg-slate-900 rounded-3xl border-2 p-6 shadow-lg shadow-gray-400 ">
                            <h1 className='text-white text-3xl flex justify-center pb-5'>Login</h1>
                            <div className=' p-5'>
                                <div className="mb-5">
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your Email" required />
                                </div>
                                <div className="">
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your password" required />
                                </div>

                                <div className="flex items-start mb-5">
                                    <label for="terms" className="ms-2 pt-3 text-sm font-medium text-gray-900 dark:text-gray-300">Not an user? →
                                        <Link to='/register' className="text-blue-600 hover:underline dark:text-blue-500"> Register here
                                        </Link>
                                    </label>
                                </div>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div >
        </div >
    );
}

export default Login;
