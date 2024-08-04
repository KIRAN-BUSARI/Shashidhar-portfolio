import { CgMenuRight, CgClose } from "react-icons/cg";
import "./style.css";
import { useRef } from "react";
import { useState } from "react";
import audio from "/hover_audio_effect.mp3";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const closeMenu = () => {
    setIsMenuOpen(false);
    location.reload();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-bg px-2 md:px-[200px] font-madeTommy">
      <nav className="pt-5 pb-5">
        <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto">
          <a href="/" className="text-3xl font-medium uppercase">
            <h1 className="text-[#5B5B5B]">
              s<span className="text-secondary">y</span>
            </h1>
          </a>

          <button
            onClick={toggleMenu}
            className="block lg:hidden p-2 rounded-md text-primary relative"
          >
            {isOpen ? (
              <CgClose className="text-2xl" />
            ) : (
              <CgMenuRight className="text-2xl" />
            )}
          </button>
          {isOpen ? (
            <>
              <div className="md:hidden flex fixed right-0 w-full">
                <div
                  className={`items-end h-48 w-full absolute flex mt-10 text-end flex-col ${
                    isMenuOpen ? "block" : "hidden"
                  }`}
                >
                  <div className="rounded-lg pr-5 space-y-5 font-semibold text-[20px] p-[24px] shadow-lg bg-bg">
                    <a
                      href="#projects"
                      onMouseLeave={handleMouseLeave}
                      onMouseEnter={handleMouseEnter}
                      onClick={closeMenu}
                      className="hover:underline decoration-secondary underline-offset-8 block text-primary font-normal relative"
                    >
                      Projects
                    </a>
                    <a
                      href="#aboutme"
                      onMouseLeave={handleMouseLeave}
                      onMouseEnter={handleMouseEnter}
                      onClick={closeMenu}
                      className="hover:underline decoration-secondary underline-offset-8 block text-primary font-normal relative"
                    >
                      About Me
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                className={`lg:flex lg:items-center lg:w-auto lg:space-y-0 lg:space-x-12 mt-4 lg:mt-0 w-full ${
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
              </div>
            </>
          )}
          <audio src={audio} ref={audioRef}></audio>
        </div>
      </nav>
    </header>
  );
}
