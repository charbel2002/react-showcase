import { useEffect, useState } from "react"


export default function Features(props)
{

    return (
        <>
        
            <div className="lg:w-3/12 md:w-5/12 w-9/12 lg:m-auto m-auto md:m-auto md:mt-6">

                <div className="lg:w-14 w-14 lg:h-14 h-14 lg:md:sm:bg-gray-700 bg-gray-700 lg:md:sm:p-4 p-2 lg:flex flex lg:items-center md:sm:items-center items-center lg:justify-center md:justify-center lg:text-gray-800 md:sm:text-gray-800 text-gray-800">
                    <img src={props.icon} />
                </div>

                <div className="lg:md:sm:text-black text-black dark:lg:md:sm:text-white dark:text-white lg:md:sm:font-semibold font-semibold lg:md:sm:text-2xl text-2xl lg:md:sm:my-5 my-3">{props.title}</div>

                <div className="lg:text-gray-800 dark:lg:md:sm:text-gray-400 dark:text-gray-400 lg:md:sm:text-sm text-sm mb-4">
                    {props.description}
                </div>

            </div>
        
        </>
    )

}