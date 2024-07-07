import profile from "../assets/image.png";
// import SocialMedia from "./SocialMedia";
import "./style.css";

export default function Hero() {
    return (
        <div className="pt-[120px] w-full flex flex-col lg:flex-row items-center lg:items-start">
            <div className="relative h-[170px] w-[170px] lg:rounded-lg rounded-full">
                <img src={profile} alt="profile" className="w-full h-full lg:rounded-lg rounded-full" />
            </div>
            <div className="ml-0 lg:ml-[48px] lg:mt-4 flex flex-col">
                <h1 className="pr-2 text-[48px] font-medium text-primary flex text-3xl sm:text-4xl leading-[150%]">Hey! I am Shashidhar<span className="text-secondary">.</span></h1>
                {/* <span className="text-primary text-opacity-50">Yadawad</span> */}
                <div className="flex flex-col md:flex-row sm:space-x-4 mt-0 sm:mt-5">
                    <p className="bg-secondary -m-24 md:m-0 w-1 h-60 md:h-[94px] rotate-90 md:rotate-0 rounded-t-md sm:mb-0"></p>
                    <p className="text-primary/60 sm:-m-24 lg:m-0 font-normal text-[20px] leading-[150%]">
                        Creative choreographer turned into <span className="text-primary font-light"><b>UI/UX designer</b></span><br className="hidden sm:block" />
                        who crafts clean, intuitive interfaces, turning complex <br className="hidden sm:block" />
                        processes into seamless and enjoyable experiences.
                    </p>
                </div>
            </div>
            <div className="flex-1 text-opacity-20 text-[48px] font-medium -tracking-[0.04em] leading-[80%] w-full text-secondary lg:mt-4 flex justify-end">
                <p className="text-left">D <br /> For <br /> Dance <br /> & Design</p>
            </div>
        </div>
    )
}
