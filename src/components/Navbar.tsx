import { CgMenuRight } from "react-icons/cg";
import "./style.css";
import { useRef } from "react";
import { useState } from "react";
import audio from "/hover_audio_effect.mp3";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Set the volume
      audioRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio to start
    }
  };

  return (
    <header className="sticky top-0 z-10 w-full border-b border-gray-200 bg-bg">
      <nav className="pt-5 pb-5">
        <div className="flex flex-wrap justify-between items-center max-w-screen-xl">
          <a href="#" className="text-3xl font-medium uppercase">
            <h1 className="text-[#5B5B5B]">
              s<span className="text-secondary">y</span>
            </h1>
          </a>

          <button
            onClick={toggleMenu}
            className="block lg:hidden p-2 rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
          >
            <CgMenuRight className="font-bold text-2xl" />
          </button>

          <div
            className={`w-full lg:flex lg:items-center lg:w-auto space-y-2 lg:space-y-0 lg:space-x-12 mt-4 lg:mt-0 text-right ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <a
              href="#projects"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              className="custom-underline block text-lg text-primary font-normal relative"
            >
              Projects
            </a>
            <a
              href="#aboutme"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              className="custom-underline block text-lg text-primary font-normal relative"
            >
              About Me
            </a>
            <a
              href="#contact"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              className="custom-underline block text-lg text-primary font-normal relative"
            >
              Resume
            </a>
          </div>
          <audio src={audio} ref={audioRef}></audio>
        </div>
      </nav>
    </header>
  );
}
