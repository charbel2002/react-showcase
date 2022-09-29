import { createContext, useEffect, useMemo, useState } from "react";
import Features from "../components/features";
import Footer from "../components/footer";
import Header from "../components/header";
import MobileNav from "../components/mobilenav";
import MobileNavFixed from "../components/mobileNavFixed";
import Nav from "../components/nav";
import NavAbs from "../components/navAbs";
import Scroll from "../components/scrollBtn";
import Testimonials from "../components/testimonials";
import features from "../resources/features.json"
import testimonials from "../resources/testimonials.json"
import blog from "../resources/blog.json"
import Article from "../components/blog";
import Pricing from "../components/pricing";
import pricings from "../resources/pricing.json"

const DarkContext = createContext({
    mode:true,
    setMode:() => {}
});

export default function Home()
{

    const [scroll, setScroll] = useState(false);

    const [nav,setNav] = useState(true);

    const [medium,setMedium] = useState(true);

    const [mode,setMode] = useState(true);

    const [ptoggle,setPtoggle] = useState(true);

    var value = useMemo(() =>([mode,setMode]));

    const ptoggle_f = () => {

        if(ptoggle == true)
        {
            setPtoggle(false);
        }
        else{
            setPtoggle(true);
        }

    }

    useEffect(() => {

        if(window.innerWidth >= 1024)
        {
            setMedium(null);

            window.addEventListener('scroll',() => {

                if(window.innerWidth >= 1024)
                {
                    if(window.scrollY > 25)
                    {
                        setNav(false);
                        setScroll(true);
                    }
                    else{
                        setScroll(false);
                        setNav(true);
                    }
                }
    
            })

        }
        else if(window.innerWidth < 1024){

            setNav(null);

            window.onscroll = () => {

                if(window.scrollY > 25)
                {
                    setMedium(false);
                    setScroll(true);
                }
                else{
                    setMedium(true);
                    setScroll(false);
                }

            }

        }

        window.onresize = () => {

            setMedium(true);
            setNav(true);

            if(window.innerWidth >= 1024)
            {
                setMedium(null);

                window.addEventListener('scroll',() => {

                    if(window.innerWidth >= 1024)
                    {
                        if(window.scrollY > 25)
                        {
                            setNav(false);
                            setScroll(true);
                        }
                        else{
                            setScroll(false);
                            setNav(true);
                        }
                    }
        
                })

            }
            else if(window.innerWidth < 1024){

                setNav(null);

                window.onscroll = () => {

                    if(window.scrollY > 25)
                    {
                        setMedium(false);
                        setScroll(true);
                    }
                    else{
                        setMedium(true);
                        setScroll(false);
                    }

                }

            }   

        }

    });

    const toggle = () => {
        if(mode == true)
        {
            setMode(false);              
        }
        else{
            setMode(true);
        }

        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
    
        // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }

    }

    return (
        <>

            {medium == true && 
            
                <DarkContext.Provider value={value}>
                    <MobileNav toggle={toggle} context={DarkContext}/>
                </DarkContext.Provider>
            
            }

            {medium == false && 
                
                <DarkContext.Provider value={value}>
                    <MobileNavFixed toggle={toggle} context={DarkContext}/>
                </DarkContext.Provider>
        
            }

            {scroll == true && <Scroll/>}

            {nav == true && 

                <DarkContext.Provider value={value}>
                    <Nav toggle={toggle} context={DarkContext}/>
                </DarkContext.Provider>
            
            }

            {nav == false && 
            
                <DarkContext.Provider value={value}>
                    <NavAbs toggle={toggle} context={DarkContext}/>
                </DarkContext.Provider>
            
            }
            
            <Header/>

            <section className="lg:bg-gray-300 md:sm:bg-gray-300 bg-gray-300 lg:py-10 md:sm:py-10 py-10  dark:bg-gray-800 dark:md:sm:bg-gray-800">

                <div className="lg:text-black md:sm:text-black text-black dark:lg:text-white dark:md:sm:text-white dark:text-white lg:font-extrabold md:sm:font-extrabold font-extrabold lg:text-center md:sm:text-center text-center lg:text-5xl md:sm:text-4xl text-4xl"> Main Features </div>

                <div className="lg:w-5/12 md:w-7/12 sm:w-6/12 w-8/12 lg:m-auto md:sm:m-auto m-auto lg:my-5 md:sm:my-5 my-5 lg:text-gray-600 md:sm:text-gray-600 text-gray-600 dark:lg:text-gray-40 dark:md:sm:text-gray-40 dark:text-gray-40 lg:text-center md:sm:text-center text-center">
                    There are many variations of passages of Lorem Ipsum available 
                    but the majority have suffered alteration in some form. 
                </div>

                <article className="lg:flex md:flex lg:items-center md:items-center lg:flex-wrap md:flex-wrap lg:p-20 md:p-10 lg:justify-around md:justify-around lg:md:gap-3">

                    {features.map(feature => <Features icon={feature.icon} title={feature.title} description={feature.description} />)}

                </article>

            </section>

            <section className="lg:md:sm:bg-gray-500 bg-gray-500 dark:lg:md:sm:bg-gray-700 dark:bg-gray-700 lg:md:sm:py-10 py-10">

                <div className="lg:md:sm:text-center text-center lg:md:sm:text-4xl text-3xl lg:md:sm:text-white text-white lg:md:sm:font-extrabold font-extrabold">We are ready to help</div>

                <div className="lg:w-5/12 md:w-7/12 sm:w-8/12 w-10/12 lg:md:sm:m-auto m-auto lg:md:sm:text-gray-400 text-gray-400 lg:md:sm:text-center text-center lg:md:sm:my-5 my-5">
                    There are many variations of passages of Lorem Ipsum available 
                    but the majority have suffered alteration in some form. 
                </div>

                <div className="">

                    <div className="lg:w-5/12 md:w-10/12 w-10/12 lg:md:sm:bg-gray-200 bg-gray-200 lg:md:sm:rounded-md rounded-md lg:h-72 md:sm:h-52 h-52 lg:md:sm:flex flex lg:md:sm:items-center items-center lg:md:sm:justify-center justify-center lg:md:sm:cursor-pointer cursor-pointer lg::md:sm:mx-auto mx-auto lg:md:sm:my-10 my-10">
                        
                        <div className="lg:h-24 lg:w-24 lg:rounded-full lg:bg-gray-500 hover:bg-gray-600 lg:flex lg:items-center lg:justify-center">
                            <svg width="26" height="28" viewBox="0 0 16 18" class="a26">
                                <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z"></path>
                            </svg>
                        </div>

                    </div>

                </div>

                <div className="lg:w-10/12 w-10/12 lg:mx-auto md:sm:mx-auto mx-auto lg:md:sm:my-10 my-10 lg:md:sm:rounded-md rounded-md lg:md:sm:bg-gray-900 bg-gray-900 lg:md:sm:min-h-min min-h-min lg:h-32 lg:md:sm:flex flex lg:gap-2 lg:md:sm:justify-center justify-center lg:md:sm:items-center items-center flex-col lg:flex-row">

                    <img src="./uideck.svg" className="lg:inline-block lg:w-2/12 w-8/12 lg:h-7 h-7 my-5"/>

                    <img src="./tailgrids.svg" className="lg:inline-block lg:w-2/12 w-8/12 lg:h-7 h-7 my-5"/>

                    <img src="./lineicons.svg" className="lg:inline-block lg:w-2/12 w-8/12 lg:h-7 h-7 my-5"/>

                    <img src="./ayroui.svg" className="lg:inline-block lg:w-2/12 w-8/12 lg:h-7 h-7 my-5"/>

                    <img src="./plainadmin.svg" className="lg:inline-block lg:w-2/12 w-8/12 lg:h-7 h-7 my-5"/>

                </div>

                <div className="lg:flex lg:gap-2 lg:w-10/12 w-10/12 lg:mx-auto mx-auto lg:my-20 my-20">
                    
                    <div className="lg:w-6/12">

                        <header className="lg:md:sm:text-white text-white lg:text-5xl md:text-5xl sm:text-3xl text-3xl lg:md:sm:font-extrabold font-extrabold">
                            Crafted for Startup, SaaS and Business Sites. 
                        </header>

                        <p className="lg:md:sm:text-gray-300 text-gray-300 dark:text-gray-400 lg:text-lg lg:my-6 md:w-8/12 md:my-5">
                            The main ‘thrust’ is to focus on educating attendees 
                            on how to best protect highly vulnerable business applications 
                            with interactive panel discussions and roundtables. 
                        </p>

                        <div className="lg:flex md:flex lg:items-center lg:gap-1 lg:flex-wrap md:flex-wrap lg:my-10 my-10">

                            <div className="lg:flex md:flex flex lg:items-center items-center lg:gap-5 gap-5 my-3 lg:w-5/12 md:w-6/12">

                                <div className="lg:w-6 w-6 lg:h-6 h-6 md:w-8 md:h-8 lg:md:sm:rounded-md rounded-md lg:md:sm:bg-gray-800 bg-gray-800 lg:flex flex lg:items-center items-center lg:justify-center justify-center">
                                    <svg width="16" height="13" viewBox="0 0 16 13" class="a26">
                                        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"></path>
                                    </svg>
                                </div>

                                <div className="lg:text-gray-400 text-gray-400">Premium quality</div>

                            </div>

                            <div className="lg:flex md:flex flex lg:items-center items-center lg:gap-5 gap-5 my-3 lg:w-5/12 md:w-6/12">

                                <div className="lg:w-6 w-6 lg:h-6 h-6 md:w-8 md:h-8 lg:md:sm:rounded-md rounded-md lg:md:sm:bg-gray-800 bg-gray-800 lg:flex flex lg:items-center items-center lg:justify-center justify-center">
                                    <svg width="16" height="13" viewBox="0 0 16 13" class="a26">
                                        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"></path>
                                    </svg>
                                </div>

                                <div className="lg:text-gray-400 text-gray-400">No code required</div>

                            </div>

                            <div className="lg:flex md:flex flex lg:items-center items-center lg:gap-5 gap-5 my-3 lg:w-5/12 md:w-6/12">

                                <div className="lg:w-6 w-6 lg:h-6 h-6 md:w-8 md:h-8 lg:md:sm:rounded-md rounded-md lg:md:sm:bg-gray-800 bg-gray-800 lg:flex flex lg:items-center items-center lg:justify-center justify-center">
                                    <svg width="16" height="13" viewBox="0 0 16 13" class="a26">
                                        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"></path>
                                    </svg>
                                </div>

                                <div className="lg:text-gray-400 text-gray-400">Use for lifetime </div>

                            </div>

                            <div className="lg:flex md:flex flex lg:items-center items-center lg:gap-5 gap-5 my-3 lg:w-5/12 md:w-6/12">

                                <div className="lg:w-6 w-6 lg:h-6 h-6 md:w-8 md:h-8 lg:md:sm:rounded-md rounded-md lg:md:sm:bg-gray-800 bg-gray-800 lg:flex flex lg:items-center items-center lg:justify-center justify-center">
                                    <svg width="16" height="13" viewBox="0 0 16 13" class="a26">
                                        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"></path>
                                    </svg>
                                </div>

                                <div className="lg:text-gray-400 text-gray-400">Regular updates </div>

                            </div>

                            <div className="lg:flex md:flex flex lg:items-center items-center lg:gap-5 gap-5 my-3 lg:w-5/12 md:w-6/12">

                                <div className="lg:w-6 w-6 lg:h-6 h-6 md:w-8 md:h-8 lg:md:sm:rounded-md rounded-md lg:md:sm:bg-gray-800 bg-gray-800 lg:flex flex lg:items-center items-center lg:justify-center justify-center">
                                    <svg width="16" height="13" viewBox="0 0 16 13" class="a26">
                                        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"></path>
                                    </svg>
                                </div>

                                <div className="lg:text-gray-400 text-gray-400">Rich documentation </div>

                            </div>

                            <div className="lg:flex md:flex flex lg:items-center items-center lg:gap-5 gap-5 my-3 lg:w-5/12 md:w-6/12">

                                <div className="lg:w-6 w-6 lg:h-6 h-6 md:w-8 md:h-8 lg:md:sm:rounded-md rounded-md lg:md:sm:bg-gray-800 bg-gray-800 lg:flex flex lg:items-center items-center lg:justify-center justify-center">
                                    <svg width="16" height="13" viewBox="0 0 16 13" class="a26">
                                        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"></path>
                                    </svg>
                                </div>

                                <div className="lg:text-gray-400 text-gray-400">Developer friendly </div>

                            </div>

                        </div>

                    </div>

                    <div className="lg:w-6/12">
                        <img src="./about-image.svg" className="lg:w-12/12"/>
                    </div>

                </div>

                <hr className="lg:w-10/12 w-10/12 lg:mx-auto mx-auto lg:my-12 my-12 lg:text-gray-500 text-gray-500"/>

                <div className="lg:w-10/12 w-10/12 lg:mx-auto mx-auto lg:flex lg:gap-4">

                    <div className="lg:w-6/12">
                        <img src="./about-image-2.svg" className="w-full"/>
                    </div>

                    <div className="lg:w-4/12 w-full my-5">

                        <div className="">

                            <header className="lg:text-3xl text-3xl lg:text-white text-white lg:font-extrabold font-extrabold">Bug free code</header>

                            <p className="lg:text-gray-400 text-gray-400 lg:my-5 my-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>

                        </div>

                        <div className="">

                            <header className="lg:text-3xl text-3xl lg:text-white text-white lg:font-extrabold font-extrabold">Premier support</header>

                            <p className="lg:text-gray-400 text-gray-400 lg:my-5 my-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>

                        </div>

                        <div className="">

                            <header className="lg:text-3xl text-3xl lg:text-white text-white lg:font-extrabold font-extrabold">Regular updates</header>

                            <p className="lg:text-gray-400 text-gray-400 lg:my-5 my-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            <section className="lg:bg-gray-300 bg-gray-300 dark:lg:bg-gray-800 dark:bg-gray-800 lg:py-10 py-10">

                <header className="lg:text-4xl text-4xl lg:text-black text-black dark:lg:text-white dark:text-white lg:text-center text-center lg:font-extrabold font-extrabold">What Our Users Says </header>

                <div className="lg:text-center text-center lg:w-5/12 w-10/12 lg:mx-auto mx-auto lg:my-10 my-10 lg:text-black text-black dark:lg:text-gray-500 dark:text-gray-500">
                    There are many variations of passages of Lorem Ipsum available 
                    but the majority have suffered alteration in some form. 
                </div>

                <div className="lg:flex lg:flex-nowrap md:flex md:w-10/12 md:flex-wrap md:mx-auto md:justify-center md:items-center md:gap-10 md:m-auto lg:items-center lg:gap-7 lg:w-10/12 w-10/12 lg:mx-auto mx-auto">

                    {testimonials.map(testimonial => <Testimonials text={testimonial.testimonial} img={testimonial.t_img} role={testimonial.t_role} name={testimonial.t_name}/>)}

                </div>

            </section>

            <section className="lg:md:sm:bg-gray-400 dark:lg:md:sm:bg-gray-900 dark:bg-gray-900 lg:py-11 py-11">

                <header className="lg:md:sm:text-4xl text-3xl lg:md:sm:font-extrabold font-extrabold lg:md:sm:text-black text-black dark:lg:md:sm:text-white dark:text-white lg:md:sm:text-center text-center">
                    Simple and Affordable Pricing 
                </header>

                <div className="lg:md:sm:text-lg text-lg lg:m:sm:text-gray-800 text-gray-800 dark:lg:md:sm:text-gray-500 dark:text-gray-500 lg:w-5/12 w-10/12 lg:md:sm:mx-auto mx-auto lg:md:sm:my-10 my-10 lg:md:sm:text-center text-center">
                    There are many variations of passages of Lorem Ipsum 
                    available but the majority have 
                    suffered alteration in some form. 
                </div>

                <div className="lg:md:sm:my-14 my-14">

                    <header className="lg:my-5 my-5 lg:text-center text-center lg:flex flex lg:items-center items-center lg:justify-center justify-center">

                        <span className="lg:text-black text-black dark:lg:md:sm:text-white dark:text-white lg:inline-block inline-block lg:mr-5 mr-5">Monthly</span>

                        {ptoggle == true && 
                        
                            <span onClick={ptoggle_f} className="lg:bg-gray-500 bg-gray-500 lg:inline-block inline-block lg:rounded-lg rounded-lg lg:w-16 w-16 lg:relative relative lg:h-5 h-5 lg:cursor-pointer cursor-pointer">

                                <span className="lg:w-5 w-5 lg:h-5 h-5 lg:bg-white bg-white lg:rounded-full rounded-full lg:block block lg:m-0 m-0 lg:outline-8 outline-8 lg:outline outline lg:outline-blue-700 outline-blue-700"></span>

                            </span>
                        
                        }

                        {ptoggle == false && 
                        
                            <span onClick={ptoggle_f} className="lg:bg-gray-500 bg-gray-500 lg:inline-block inline-block lg:rounded-lg rounded-lg lg:w-16 w-16 lg:relative relative lg:h-5 h-5 lg:cursor-pointer cursor-pointer after:table">

                                <span className="lg:w-5 w-5 lg:h-5 h-5 lg:bg-white bg-white lg:rounded-full rounded-full lg:block block lg:m-0 m-0 lg:outline-8 outline-8 lg:outline outline lg:outline-blue-700 outline-blue-700 float-right"></span>

                            </span>
                        
                        }

                        <span className="lg:text-black text-black dark:lg:md:sm:text-white dark:text-white lg:inline-block inline-block lg:ml-5 ml-5">Yearly</span>

                    </header>

                    <div className="lg:flex lg:flex-nowrap md:flex md:flex-wrap md:justify-center md:gap-10 lg:gap-4 lg:w-10/12 w-10/12 lg:mx-auto mx-auto lg:my-10 my-10">

                        {pricings.map(pricing => <Pricing pricing={pricing} />)}

                    </div>

                </div>

            </section>

            <section className="lg:bg-gray-400 bg-gray-400 dark:lg:bg-gray-900 dark:bg-gray-900 lg:py-20 py-20">
                
                <header className="lg:text-white text-white lg:font-extrabold font-extrabold lg:text-4xl text-3xl lg:text-center text-center">
                    Our Latest Blogs 
                </header>

                <div className="lg:w-5/12 w-10/12 lg:mx-auto mx-auto lg:my-5 my-5 lg:text-center text-center lg:text-gray-700 text-gray-700 dark:lg:text-gray-700 dark:text-gray-700 lg:text-lg text-lg">
                    There are many variations of passages of Lorem Ipsum available 
                    but the majority have suffered alteration in some form. 
                </div>

                <article className="lg:flex lg:flex-nowrap flex lg:gap-4 lg:w-10/12 w-10/12 lg:mx-auto mx-auto lg:my-10 my-10 flex-wrap">

                    
                    {blog.map(article => <Article article={article}/>)}
                    

                </article>

            </section>

            <section className="lg:bg-gray-200 bg-gray-200 dark:lg:bg-gray-900 dark:bg-gray-900 lg:py-24 py-24">

                <article className="lg:flex lg:flex-nowrap flex lg:w-10/12 w-10/12 lg:gap-6 lg:mx-auto mx-auto flex-wrap">

                    <div className="lg:bg-gray-700 bg-gray-700 lg:p-10 p-10 lg:rounded-lg rounded-lg lg:w-8/12 w-full">

                        <header className="lg:text-white text-white lg:text-3xl text-3xl lg:font-extrabold font-extrabold">
                            Need Help? Open a Ticket 
                        </header>

                        <div className="lg:text-gray-400 text-gray-400 lg:my-2 my-2">
                            Our support team will get back to you ASAP via email. 
                        </div>

                        <div className="">

                            <form className="lg:my-5 my-5">

                                <div className="lg:flex flex lg:justify-between justify-between lg:flex-wrap flex-wrap lg:items-center items-center lg:my-5 my-3 lg:w-full w-full">

                                    <div className="lg:w-5/12 w-full md:w-full">

                                        <label className="lg:text-gray-200 text-gray-200 lg:my-5 my-3 lg:block block">
                                            Your Name 
                                        </label>

                                        <input className="lg:w-full md:w-full w-full lg:bg-gray-600 bg-gray-600 lg:p-4 p-4 lg:shadow-lg shadow-lg lg:rounded-lg rounded-lg lg:outline-none outline-none lg:border-none border-none lg:focus:outline-none focus:outline-none lg:focus:border-none focus:border-none" type="text" placeholder="Your name"/>

                                    </div>

                                    <div className="lg:w-5/12 w-full md:w-full">

                                        <label className="lg:text-gray-200 text-gray-200 lg:my-5 my-3 lg:block block">
                                            Your Email
                                        </label>

                                        <input className="lg:w-full md:w-full w-full lg:bg-gray-600 bg-gray-600 lg:p-4 p-4 lg:shadow-lg shadow-lg lg:rounded-lg rounded-lg lg:outline-none outline-none lg:border-none border-none lg:focus:outline-none focus:outline-none lg:focus:border-none focus:border-none" type="text" placeholder="Your name"/>

                                    </div>

                                </div>

                                <div className="lg:w-12/12 lg:my-5 lg:flex lg:flex-col">

                                    <label className="lg:text-gray-200 text-gray-200 lg:my-5 my-3 lg:block block">
                                       Your message
                                    </label>

                                    <textarea placeholder="Enter your message" className="lg:bg-gray-600 bg-gray-600 lg:w-full w-full lg:p-4 p-4 lg:shadow-lg shadow-lg lg:rounded-lg rounded-lg lg:outline-none outline-none lg:border-none border-none lg:focus:outline-none focus:outline-none lg:focus:border-none focus:border-none lg:h-44 h-44 lg:block block" />

                                </div>

                                <div className="lg:w-full w-full lg:my-5 my-5">

                                        <button className="lg:text-white text-white lg:bg-blue-500 bg-blue-500 lg:py-3 py-3 lg:px-10 px-5 lg:rounded-lg rounded-lg">Submit Ticket</button>

                                    </div>

                            </form>

                        </div>
                    
                    </div>

                    <div className="lg:w-4/12 w-full lg:bg-gray-900 bg-gray-900 dark:lg:bg-gray-800 dark:bg-gray-800 lg:rounded-lg rounded-lg lg:p-12 p-6 mt-7">

                        <header className="lg:text-white text-white lg:text-2xl text-2xl lg:font-extrabold font-extrabold">
                            Subscribe to receive future updates 
                        </header>

                        <div className="lg:text-gray-500 text-gray-500 lg:my-10 my-10 lg:text-lg text-lg border lg:border-slate-400 border-slate-400 lg:border-transparent border-transparent lg:border-spacing-y-2.5 border-spacing-y-2.5 lg:border-b-slate-500 border-b-slate-500 lg:pb-10 pb-7">
                            Lorem ipsum dolor sited Sed ullam corper 
                            consectur adipiscing Mae ornare massa quis lectus. 
                        </div>

                        <div className="">

                            <form className="">

                                <div className="lg:my-3 my-3">
                                    <input className="lg:bg-gray-700 w-full bg-gray-700 lg:p-3 p-3 lg:rounded-lg rounded-lg lg:focus:border-none focus:border-none lg:focus:outline-none focus:outline-none" placeholder="Enter your name" />
                                </div>

                                <div className="lg:my-1">
                                    <input className="lg:bg-gray-700 w-full bg-gray-700 lg:p-3 p-3 lg:rounded-lg rounded-lg lg:focus:border-none focus:border-none lg:focus:outline-none focus:outline-none" placeholder="Enter your email" />
                                </div>

                                <div className="lg:my-2 my-2">
                                     <button className=" lg:bg-blue-600 bg-blue-600 lg:text-white text-white lg:py-3 py-3 lg:rounded-lg rounded-lg lg:text-bold text-bold lg:block block lg:w-7/12 w-full">Suscribe</button>
                                </div>

                            </form>

                        </div>

                        <div className="lg:text-gray-500 text-gray-500 lg:my-4 my-4 lg:text-center text-center">
                            No spam guaranteed, So please don’t send any spam mail. 
                        </div>

                    </div>

                </article>

            </section>

            <Footer/>
        
        </>
    );

}