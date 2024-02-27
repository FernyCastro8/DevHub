import React from 'react';

const Header = () => {
    return (
        <div name="Header" className="min-h-screen bg-blue-900">
            <div className="flex flex-col items-center w-full p-14s">
                <div className="m-5">
                    <div className="">
                        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get back to growth with <span class="text-blue-600 dark:text-blue-500">the world's #1</span> CRM.</h1>
                        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                    </div>
                    <div className="text-4xl m-5"> Some Image</div>
                    <div className="text-4xl m-5"> Some Image</div>
                </div>

            </div>

        </div>
    );
}

export default Header;
