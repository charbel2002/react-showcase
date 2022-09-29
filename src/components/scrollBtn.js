import '../App.css';

export default function Scroll()
{

    const goUp = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    }

    return (

        <div onClick={goUp} id="goup" className="w-10 h-10 fixed bottom-10 right-10 rounded-lg bg-blue-700 flex items-center justify-center cursor-pointer z-30">
                <svg fill="white" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
                </svg>
            </div>

    );
}