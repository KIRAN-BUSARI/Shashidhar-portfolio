export default function Hero() {
  return (
    <div
      className="h-screen place-content-center flex place-items-center flex-col gap-y-4"
      id="#"
    >
      <h1 className="lg:text-5xl text-[38px] leading-[140%] text-primary text-center font-extrabold md:font-bold lg:font-medium lg:leading-[128%] -mt-7 lg:mt-0">
        Hey! <br />I am Shashidhar<span className="text-secondary">.</span>
      </h1>
      <p className="bg-secondary w-[3px] rotate-90 h-[256px] -mt-[140px] rounded-full"></p>
      <div className="text-primary1 font-medium lg:font-normal lg:leading-[150%] text-[20px] -mt-[125px]">
        <p className="text-center">
          Creative choreographer turned{" "}
          <span className="text-primary text-[20px] lg:font-normal font-medium">
            User Interface & User Experience Designer,
          </span>{" "}
          crafting clean,
          <br />{" "}
          <span>
            intuitive interfaces and transforming complex processes into
            seamless and enjoyable experiences.
          </span>
        </p>
      </div>
      <button className="text-primary mt-3 lg:mt-0 lg:font-normal font-bold shadow-lg bg-secondary rounded-full px-8 py-3">
        Let's talk about design?
      </button>
      <div className="mt-[150px] animate-bounce">
        <a href="#projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            version="1.1"
            width="21.33333396911621"
            height="21.33333396911621"
            viewBox="0 0 21.33333396911621 21.33333396911621"
          >
            <g transform="matrix(0,-1,1,0,-21.33333396911621,21.33333396911621)">
              <path
                d="M10.6667,33.33333396911621L10.6667,42.66663396911621L0,32.00003396911621L10.6667,21.33333396911621L10.6667,30.66666396911621L21.3333,30.66666396911621L21.3333,33.33333396911621L10.6667,33.33333396911621Z"
                fill="#1B1B1E"
                fillOpacity="1"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}
