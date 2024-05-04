import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react';



function Register() {

    // State to hold the form data or input
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    // Function to handle changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value   // Dynamically set the property based on input name
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        // Prevent default form submission behavior (page reload)
        e.preventDefault();

        // Do something with the form data, like submit it to an API or handle it locally
        console.log('Submitted data:', formData);

        // Reset the form fields after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        });
    };

    return (
        <div className='bg-gradient-to-br from-white via-gray-300 to-gray-500 ' >

            <div className='flex items-center justify-center h-screen overflow-auto'>
                <div>
                    <div>
                        <form onSubmit={handleSubmit}
                            className="max-w-lg mx-auto bg-slate-900 rounded-3xl border-2 p-6 shadow-lg shadow-gray-400 ">

                            <h1 className='text-white text-3xl flex justify-center pb-5'>Register</h1>

                            <div className='p-5'>
                                <div className="mb-5">
                                    <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                    <input type="text"
                                        name="firstName"
                                        value={formData.firstName}  // Value to controlled by state
                                        onChange={handleChange} // Handle change event
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                        placeholder="Enter your First name"
                                        autoComplete="" required
                                    />
                                </div> <div className="mb-5">
                                    <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}  // Value to controlled by state
                                        onChange={handleChange} // Handle change event
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                        placeholder="Enter your Last name"
                                        autoComplete="name" required
                                    />
                                </div>
                                <div className="mb-5">
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}  // Value to controlled by state
                                        onChange={handleChange} // Handle change event
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                        placeholder="Enter your Email"
                                        autoComplete="name" required
                                    />
                                </div>
                                <div className="">
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}  // Value to controlled by state
                                        onChange={handleChange} // Handle change event
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                        placeholder="Enter your password"
                                        autoComplete="password" required
                                    />
                                </div>

                                <div className="flex items-start mb-5">
                                    <label for="terms" className="ms-2 pt-3 text-sm font-medium text-gray-900 dark:text-gray-300">Already registered?
                                        <Link to="/login"
                                            className="text-blue-600 hover:underline dark:text-blue-500"> Loging here
                                        </Link>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Register;
