
export default function Testimonials(props)
{
    return (
        <>
        
        <div className="lg:w-4/12 md:w-5/12 md:p-4 w-full sm:mt-5 mt-5 lg:rounded-md rounded-md lg:bg-gray-900 bg-gray-900 dark:lg:bg-gray-700 dark:bg-gray-700 lg:p-7 p-7">

            <header className="lg:flex flex">

                <span className="lg:mr-2 mr-2">
                    <svg fill="orange" width="18" height="16" viewBox="0 0 18 16" class="a26">
                        <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z"></path>
                    </svg>
                </span>

                <span className="lg:mr-2 mr-2">
                    <svg fill="orange" width="18" height="16" viewBox="0 0 18 16" class="a26">
                        <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z"></path>
                    </svg>
                </span>

                <span className="lg:mr-2 mr-2">
                    <svg fill="orange" width="18" height="16" viewBox="0 0 18 16" class="a26">
                        <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z"></path>
                    </svg>
                </span>

                <span className="lg:mr-2 mr-2">
                    <svg fill="orange" width="18" height="16" viewBox="0 0 18 16" class="a26">
                        <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z"></path>
                    </svg>
                </span>

                <span className="lg:mr-2 mr-2">
                    <svg fill="orange" width="18" height="16" viewBox="0 0 18 16" class="a26">
                        <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z"></path>
                    </svg>
                </span>

            </header>

            <div className="lg:text-sm text-sm lg:my-4 my-4 lg:text-white text-white lg:py-6 py-6 border lg:border-slate-400 border-slate-400 lg:border-transparent border-transparent lg:border-spacing-y-2.5 border-spacing-y-2.5 lg:border-b-slate-500 border-b-slate-500">
                {props.text}
            </div>

            <div className="lg:flex flex lg:mt-5 mt-5">

                <div className="">
                    <img src={props.img} />
                </div>

                <div className="lg:ml-5 ml-5">

                    <header className="lg:text-xl text-xl lg:font-extrabold font-extrabold lg:text-white text-white">{props.name}</header>

                    <div className="lg:text-white text-white dark:text-gray-500 lg:text-sm text-sm">{props.role}</div>

                </div>

            </div>

        </div>
        
        </>
    );
}