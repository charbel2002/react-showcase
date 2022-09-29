import '../App.css';

import { Link } from 'react-router-dom';

export default function Header()
{

    return (
        <>
        
            <header className="lg:bg-gray-200 bg-gray-200 md:sm:bg-gray-200 lg:py-40 md:sm:py-20 py-20 dark:lg:md:sm:bg-gray-800 dark:bg-gray-800">

                <div className="text-2xl lg:text-4xl text-center font-extrabold lg:w-4/12 md:w-6/12 sm:w-5/12 w-8/12 lg:md:sm:m-auto m-auto lg:text-black dark:lg:md:sm:text-white dark:text-white">Startup Focused Tailwind CSS Template </div>

                <div className="lg:text-md md:sm:text-sm text-sm lg:w-4/12 md:w-6/12 sm:w-5/12 w-10/12 lg:md:sm:m-auto m-auto lg:md:sm:mt-5 mt-5 lg:text-center md:sm:text-center text-center lg:text-black md:sm:text-gray-700 text-gray-800 dark:lg:md:sm:text-white dark:text-gray-400">
                    A Complete Tailwind CSS Web 
                    Template Crafted for - Startup, SaaS, Business, Software and Agencies.
                    Comes with high-quality design and everything you need! 
                </div>

                <div className="lg:md:sm:flex flex lg:md:sm:items-center items-center lg:md:sm:justify-center justify-center lg:mt-7 md:sm:mt-7 mt-7 after:table after:clear-both after:md:sm:clear-both">

                    <Link to="" className="lg:bg-blue-700 md:sm:bg-blue-700 bg-blue-700 lg:text-white md:sm:text-white text-white lg:p-4 md:sm:p-4 p-2 lg:rounded-md md:sm:rounded-md rounded-md lg:inline-block md:sm:inline-block inline-block">Get Started</Link>

                    <Link to="" className="lg:bg-gray-600 md:sm:bg-gray-600 bg-gray-600 lg:text-white md:sm:text-white text-white lg:p-4 md:sm:p-4 p-2 lg:rounded-md md:sm:rounded-md rounded-md lg:inline-block md:sm:inline-block inline-block md:sm:ml-4 ml-4">Learn More</Link>

                </div>

            </header>
        
        </>
    );

}