import React from 'react'
import { useState } from 'react'


function DeveloperForm() {

    // State to hold the form data or input
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        occupation: '',
        educatinoLevel: '',
        phoneNumber: '',
        email: '',
        skills: ''
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
            occupation: '',
            educatinoLevel: '',
            phoneNumber: '',
            email: '',
            skills: ''
        });
    };



    return (
        <div className="h-screen w-screen bg-gray-100 pb-16 overflow-auto ">
            <section >
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                        Join Us, Innovating Developers!
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">🚀 Elevate Your Projects: Partner with elite software developers renowned for innovation and expertise in every line of code.
                    </p>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">🎯 Find Top-Tier Talent: Showcase your job openings or projects on our platform, connecting with skilled professionals who can turn your vision into reality.
                    </p>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">🔍 Unlock Your Next Success: Access a pool of curated talent, ensuring you find the perfect fit for your project needs..
                    </p>
                </div>
            </section>

            <h1 className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-4 mb-3 text-2xl font-bold tracking-tight leading-none text-gray-800 md:text-4xl lg:text-2xl">Submit a form and join our Community</h1>

            {/*      Form    */}
            <div >
                < div className="max-w-2xl mx-auto pt-5 border-2 p-6 rounded-3xl " >
                    <form onSubmit={handleSubmit} >
                        <div className="grid xl:grid-cols-2 xl:gap-6">
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}  // Value to controlled by state
                                    onChange={handleChange} // Handle change event
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label
                                    for="firstName"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            </div>

                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}  // Value to controlled by state
                                    onChange={handleChange} // Handle change event
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label
                                    for="lastName"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                            </div>

                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="text"
                                    id="occupation"
                                    name="occupation"
                                    value={formData.occupation}  // Value to controlled by state
                                    onChange={handleChange} // Handle change event
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label
                                    for="occupation"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Occupation</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <select
                                    id="educatinoLevel"
                                    name="educatinoLevel"
                                    value={formData.educatinoLevel} // Value to be controlled by state
                                    onChange={handleChange} // Handle change event
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    required
                                >
                                    <option value=""></option>
                                    <option value="GED">GED</option>
                                    <option value="highSchool">High School</option>
                                    <option value="bootCamp">Boot Camp</option>
                                    <option value="associateDegree">Associate degree</option>
                                    <option value="bachelorsDegree">Bachelor's Degree</option>
                                    <option value="mastersDegree">Master's Degree</option>
                                    <option value="doctoralDegree">Doctoral Degree</option>
                                </select>
                                <label
                                    for="educatinoLevel"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Education level</label>
                            </div>


                            <div className="relative z-0 mb-6 w-full group">
                                <input type="email"
                                    name="email"
                                    value={formData.email}  // Value to controlled by state
                                    onChange={handleChange} // Handle change event
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label
                                    for="email"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>

                            <div className="relative z-0 mb-6 w-full group">
                                <input type="tel"
                                    // pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}  // Value to controlled by state
                                    onChange={handleChange} // Handle change event
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label
                                    for="phoneNumber"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                            </div>

                        </div>

                        <div className="relative z-0 mb-6 w-full group">
                            <textarea
                                type="text"
                                id="skills"
                                name="skills"
                                value={formData.skills}  // Value to controlled by state
                                onChange={handleChange} // Handle change event
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label
                                for="skills"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Skills</label>
                        </div>

                        <div className="flex justify-center">
                            <button type="submit"
                                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>
                    </form>
                </div >
            </div>
        </div>
    )
}

export default DeveloperForm