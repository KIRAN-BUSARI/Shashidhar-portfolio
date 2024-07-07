import { CgMenuRight } from "react-icons/cg";
import "./style.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="bg-white border-b border-gray-200 pt-5 pb-5">
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
            className={`w-full lg:flex lg:items-center lg:w-auto space-y-2 lg:space-y-0 lg:space-x-12 mt-4 lg:mt-0 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <a
              href="#"
              className="custom-underline block text-base text-primary font-normal relative"
            >
              Home
            </a>
            <a
              href="#aboutme"
              className="custom-underline block text-base text-primary font-normal relative"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="custom-underline block text-base text-primary font-normal relative"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
