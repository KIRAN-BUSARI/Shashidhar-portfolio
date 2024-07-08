import profile from "../assets/image.png";

export default function Hero() {
  return (
    <div className="lg:pt-[125px] pt-10 lg:pb-[125px] pb-10 w-full flex flex-col lg:flex-row items-center lg:items-start">
      <div className="relative h-[170px] w-[170px] lg:rounded-[4px] rounded-full shadow-neon">
        <img
          src={profile}
          alt="profile"
          className="w-full h-full lg:rounded-[4px] rounded-full"
        />
      </div>
      <div className="mt-6 lg:mt-4 lg:ml-12 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="pr-2 font-medium text-primary flex text-3xl sm:text-4xl leading-[150%]">
          Hey! I am Shashidhar<span className="text-secondary">.</span>
        </h1>
        {/* <span className="text-primary text-opacity-50">Yadawad</span> */}
        <div className="flex flex-col md:flex-row sm:space-x-4 mt-4 items-center lg:items-start sm:mt-5">
          <p className="bg-secondary md:m-0 w-1 h-60 md:h-[94px] rotate-90 md:rotate-0 rounded-t-md sm:mb-0 hidden md:block"></p>
          <p className="text-primary/60 sm:-m-24 lg:m-0 font-normal text-[20px] leading-[150%] md:ml-4 mt-4 md:mt-0">
            Creative choreographer turned into{" "}
            <span className="text-primary font-normal lg:font-light">
              <b>UI/UX designer </b>
            </span>
            <br className="hidden sm:block" />
            who crafts clean, intuitive interfaces, turning complex{" "}
            <br className="hidden sm:block" />
            processes into seamless and enjoyable experiences.
          </p>
        </div>
      </div>
      <div className="flex flex-1 text-opacity-10 lg:text-[48px] text-6xl font-medium -tracking-[0.04em] leading-none lg:leading-[80%] w-full text-secondary mt-8 lg:mt-4 lg:justify-end justify-center">
        <p className="lg:text-left text-center">
          D <br /> For <br /> Dance <br /> & Design
        </p>
      </div>
    </div>
  );
}
