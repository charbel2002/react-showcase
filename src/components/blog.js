
export default function Article(props)
{

    return (
        <>
        
        <div className="lg:w-4/12 md:w-9/12 md:mx-auto w-full lg:rounded-md rounded-md lg:overflow-hidden overflow-hidden lg:relative relative lg:bg-gray-800 bg-gray-800 dark:lg:bg-gray-700 dark:bg-gray-700 mt-5">

            <div className="">
                <img src={props.article.img} className="md:w-full" />
                <div className="lg:text-white text-white lg:bg-blue-500 bg-blue-500 lg:p-5 p-3 lg:rounded-xl rounded-xl lg:w-24 w-24 lg:h-8 h-8 lg:font-bold font-bold lg:absolute absolute lg:top-5 top-5 lg:right-5 right-5 lg:flex flex lg:items-center items-center lg:justify-center justify-center">{props.article.tip}</div>
            </div>

            <div className="lg:w-11/12 w-11/12 lg:mx-auto mx-auto lg:my-5 my-5 border lg:border-slate-400 border-slate-400 lg:border-transparent border-transparent lg:border-spacing-y-2.5 border-spacing-y-2.5 lg:border-b-slate-500 border-b-slate-500">

                <div className="lg:text-2xl text-2xl lg:text-white text-white lg:font-extrabold font-extrabold">
                    {props.article.title}
                </div>

                <div className="lg:text-gray-400 text-gray-400 lg:text-base text-base lg:my-5 my-5 lg:text-bold text-bold">
                    {props.article.review}
                </div>

            </div>

            <div className="lg:w-11/12 w-11/12 lg:mx-auto mx-auto lg:my-3 my-3 lg:flex flex lg:gap-4 lg:items-center items-center">
                
                <div className="lg:flex flex lg:items-center items-center border lg:border-slate-400 border-slate-400 lg:border-transparent border-transparent lg:border-spacing-y-2.5 border-spacing-y-2.5 border-r-slate-5000">

                    <div className="lg:mr-2 mr-2">
                        <img src={props.article.auth_img} className=""/>
                    </div>

                    <div className="">
                        <header className="lg:text-sm text-sm lg:text-white text-white lg:font-semibold font-semibold">{props.article.auth_name}</header>
                        <div className="lg:text-gray-400 text-gray-400 lg:text-sm text-sm">{props.article.auth_role}</div>
                    </div>

                </div>

                <div className="">
                    <header className="lg:text-sm text-sm lg:text-white text-white lg:font-semibold font-semibold">Date</header>
                    <div className="lg:text-gray-400 text-gray-400 lg:text-sm text-sm">{props.article.date}</div>
                </div>

            </div>

        </div>
        
        </>
    );

}