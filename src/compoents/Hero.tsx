import profile from "../assets/image.png";
// import SocialMedia from "./SocialMedia";
import "./style.css";

export default function Hero() {
    return (
        <div className="pt-[120px] pb-[60px] flex flex-col lg:flex-row items-center lg:items-start">
            <div className="relative h-[170px] w-[170px] lg:rounded-lg rounded-full border-4 border-transparent animate-border">
                <img src={profile} alt="profile" className="w-full h-full lg:rounded-lg rounded-full" />
            </div>
            <div className="ml-0 lg:ml-[48px] mt-2 lg:mt-0 flex flex-col justify-center">
                <div className="uppercase flex text-3xl sm:text-4xl leading-[54px]">
                    <h1 className="pr-2 font-medium text-[#1B1B1E]">Shashidhar </h1>
                    <span className="text-[#1B1B1E] text-opacity-50">Yadawad</span>
                </div>
                <div className="flex flex-col md:flex-row sm:space-x-4 mt-0 sm:mt-2 justify-start items-center lg:items-start">
                    <p className="bg-[#FFCC33] -m-24 md:m-0 w-1 h-60 md:h-20 rotate-90 md:rotate-0 rounded-md sm:mb-0"></p>
                    <p className="text-[#1B1B1E] sm:-m-24 lg:m-0">
                        Creative choreographer turned into UI/UX designer <br className="hidden sm:block" />
                        who crafts clean, intuitive interfaces, turning <br className="hidden sm:block" />
                        complex processes into seamless and enjoyable experiences.
                    </p>
                </div>
            </div>
            <div className="flex-1 tracking-[.18em] leading-5 text-right text-[#FFCC33] font-bold mt-4 lg:mt-0 hidden md:block">
                {/* <p>......................</p>
                <p>..........</p>
                <p>..................</p>
                <p>........................</p>
                <p>.......</p>
                <p>............</p>
                <p>.........</p>
                <p>..............</p> */}
                {/* <SocialMedia /> */}
            </div>
        </div>
    )
}
