

export default function Pricing(props)
{

    return (
        <>
        
        <div className="lg:bg-gray-700 bg-gray-700 dark:lg:md:sm:bg-gray-800 dark:bg-gray-800 lg:w-4/12 w-full lg:md:sm:rounded-md rounded-md lg:p-7 p-3 mb-5 md:w-5/12">

            <header className="border lg:border-slate-400 border-slate-400 lg:border-transparent border-transparent lg:border-spacing-y-2.5 border-spacing-y-2.5 lg:border-b-slate-500 border-b-slate-500 lg:pb-5 pb-5">

                <div className="lg:flex flex lg:items-center items-center lg:justify-between justify-between">

                    <div className="lg:text-3xl text-2xl lg:text-white text-white lg:font-extrabold font-extrabold">${props.pricing.price} /mo</div>
                    <div className="lg:text-xl text-xl lg:text-white text-white lg:font-bold font-bold">{props.pricing.plan}</div>

                </div>

                <div className="lg:text-gray-400 text-gray-400 lg:my-4 my-4">
                    {props.pricing.description}. 
                </div>

                <div className="lg:my-5 my-5">
                    <a href={props.pricing.link.go} className="lg:bg-blue-700 bg-blue-700 lg:p-4 p-3 lg:block block lg:rounded-lg rounded-lg lg:text-white text-white lg:font-bold font-bold lg:text-center text-center">{props.pricing.link.text}</a>
                </div>

            </header>

            <div className="lg:my-10">

                <div className="lg:flex flex lg:items-center items-center">

                    <div className="lg:w-4 w-4 lg:h-4 h-4 lg:bg-slate-700 bg-slate-700 lg:rounded-full rounded-full lg:flex flex lg:items-center items-center lg:justify-center justify-center lg:my-3 my-3">
                        <svg width="8" height="6" viewBox="0 0 8 6" class="a26">
                            <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"></path>
                        </svg>
                    </div>

                    <div className="lg:text-lg text-sm lg:text-gray-500 text-gray-500 lg:ml-3 ml-3">
                        {props.pricing.feature0}
                    </div>

                </div>

                <div className="lg:flex flex lg:items-center items-center">

                    <div className="lg:w-4 w-4 lg:h-4 h-4 lg:bg-slate-700 bg-slate-700 lg:rounded-full rounded-full lg:flex flex lg:items-center items-center lg:justify-center justify-center lg:my-3 my-3">
                        <svg width="8" height="6" viewBox="0 0 8 6" class="a26">
                            <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"></path>
                        </svg>
                    </div>

                    <div className="lg:text-lg text-sm lg:text-gray-500 text-gray-500 lg:ml-3 ml-3">
                        {props.pricing.feature1}
                    </div>

                </div>

                <div className="lg:flex flex lg:items-center items-center">

                    <div className="lg:w-4 w-4 lg:h-4 h-4 lg:bg-slate-700 bg-slate-700 lg:rounded-full rounded-full lg:flex flex lg:items-center items-center lg:justify-center justify-center lg:my-3 my-3">
                        <svg width="8" height="6" viewBox="0 0 8 6" class="a26">
                            <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"></path>
                        </svg>
                    </div>

                    <div className="lg:text-lg text-sm lg:text-gray-500 text-gray-500 lg:ml-3 ml-3">
                        {props.pricing.feature2}
                    </div>

                </div>

                <div className="lg:flex flex lg:items-center items-center">

                    <div className="lg:w-4 w-4 lg:h-4 h-4 lg:bg-slate-700 bg-slate-700 lg:rounded-full rounded-full lg:flex flex lg:items-center items-center lg:justify-center justify-center lg:my-3 my-3">
                        <svg width="8" height="6" viewBox="0 0 8 6" class="a26">
                            <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"></path>
                        </svg>
                    </div>

                    <div className="lg:text-lg text-sm lg:text-gray-500 text-gray-500 lg:ml-3 ml-3">
                        {props.pricing.feature3}
                    </div>

                </div>

                <div className="lg:flex flex lg:items-center items-center">

                    <div className="lg:w-4 w-4 lg:h-4 h-4 lg:bg-slate-700 bg-slate-700 lg:rounded-full rounded-full lg:flex flex lg:items-center items-center lg:justify-center justify-center lg:my-3 my-3">
                        <svg width="8" height="6" viewBox="0 0 8 6" class="a26">
                            <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z"></path>
                        </svg>
                    </div>

                    <div className="lg:text-lg text-sm lg:text-gray-500 text-gray-500 lg:ml-3 ml-3">
                    {props.pricing.feature4}
                    </div>

                </div>

                <div className="lg:flex flex lg:items-center items-center">

                    <div className="lg:w-4 w-4 lg:h-4 h-4 lg:bg-slate-700 bg-slate-700 lg:rounded-full rounded-full lg:flex flex lg:items-center items-center lg:justify-center justify-center lg:my-3 my-3">
                        <svg width="8" height="8" viewBox="0 0 8 8" class="a26 a1C">
                            <path d="M1.40102 0.95486C1.27421 0.828319 1.07219 0.828354 0.945421 0.954965C0.818519 1.08171 0.818519 1.28389 0.945421 1.41063L0.945612 1.41083L3.54915 4.00184L0.955169 6.60202C0.955106 6.60209 0.95504 6.60215 0.954978 6.60222C0.828263 6.72897 0.82833 6.93101 0.955169 7.05769C1.01288 7.11533 1.09989 7.15024 1.17815 7.15024C1.25641 7.15024 1.34342 7.11533 1.40113 7.05769L1.29513 6.95156L1.40113 7.05769L4.00493 4.45706L6.59917 7.0575L6.59936 7.05769C6.65707 7.11533 6.74408 7.15024 6.82234 7.15024C6.9006 7.15024 6.98761 7.11533 7.04532 7.05769C7.17215 6.93102 7.17222 6.729 7.04553 6.60224C7.04546 6.60217 7.04539 6.6021 7.04532 6.60202L4.46051 4.00165L7.05507 1.4009C7.05511 1.40085 7.05516 1.4008 7.05521 1.40076L7.05526 1.40071L6.94907 1.29477L1.40102 0.95486ZM1.40102 0.95486C1.40106 0.954895 1.40109 0.95493 1.40113 0.954965L1.40102 0.95486Z" stroke-width="0.3"></path>
                        </svg>
                    </div>

                    <div className="lg:text-lg text-sm lg:text-gray-500 text-gray-500 lg:ml-3 ml-3">
                    {props.pricing.feature5}
                    </div>

                </div>
                

            </div>

        </div>
        
        </>
    )

}