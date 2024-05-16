import React, { useState } from 'react'


function JobsForm() {

    // State to hold the form data or input
    const [formData, setFormData] = useState({
        companyName: '',
        jobName: '',
        salary: '',
        employmentType: '',
        phoneNumber: '',
        email: '',
        location: '',
        JobDescription: ''
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
            companyName: '',
            jobName: '',
            salary: '',
            employmentType: '',
            phoneNumber: '',
            email: '',
            location: '',
            JobDescription: ''
        });
    };


    return (
        <div className="h-screen w-screen bg-gray-100 pb-16 overflow-auto">
            <section className="developer'form">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Discover Elite Talent for Your Projects!
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">🎯 Showcase Your Skills: Stand out from the crowd by displaying your expertise to our vibrant community.
                    </p>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">🤝 Connect with Industry Leaders: Network with top professionals, gaining insights and mentorship to fuel your growth.
                    </p>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">💡 Unlock New Opportunities: Access exclusive projects and collaborations that open doors to exciting career advancements.
                    </p>
                </div>
            </section>

            <h1 className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-4 mb-3 text-2xl font-bold tracking-tight leading-none text-gray-800 md:text-4xl lg:text-2xl">Submit a form to post a job listing on our Community</h1>

            {/*      Form    */}
            <div className="">
                < div className="max-w-2xl mx-auto pt-5 border-2 p-6 rounded-3xl overflow-auto" >

                    <form onSubmit={handleSubmit}>
                        <div className="grid xl:grid-cols-2 xl:gap-6">
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}  // Value to controlled by state
                                    onChange={handleChange} // Handle change event
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="companyName"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name (Ex. Google)</label>
                            </div>

                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="text"
                                    name="jobName"
                                    value={formData.jobName}  // Value to controlled by state
                                    onChange={handleChange} // Handle change event
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label
                                    for="jobName"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job name</label>
                            </div>

                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="text"
                                    name="salary"
                                    value={formData.salary}  // Value to controlled by state
                                    onChange={handleChange} // Handle change event
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label
                                    for="salary"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Salary</label>
                            </div>

                            <div className="relative z-0 mb-6 w-full group">
                                <select
                                    id="employment_type"
                                    name="employmentType"
                                    value={formData.employmentType} // Value to be controlled by state
                                    onChange={handleChange} // Handle change event
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    required
                                >
                                    <option value=""></option>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Internship">Internship</option>
                                </select>
                                <label for="employment_type" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Employment type</label>
                            </div>


                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}  // Value to controlled by state
                                    onChange={handleChange} // Handle change event
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label
                                    for="email"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>

                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="tel"
                                    // pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}  // Value to controlled by state
                                    onChange={handleChange} // Handle change event
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label
                                    for="phoneNumber"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (Ex. 123-456-7890)</label>
                            </div>

                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}  // Value to controlled by state
                                    onChange={handleChange} // Handle change event
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label
                                    for="location"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                            </div>

                        </div>


                        <div className="relative z-0 mb-6 w-full group">
                            <textarea
                                type="text"
                                name="JobDescription"
                                value={formData.JobDescription}  // Value to controlled by state
                                onChange={handleChange} // Handle change event
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label
                                for="jobDescription"
                                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job Description</label>
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

export default JobsForm