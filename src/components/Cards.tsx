import React, { useRef, useState } from "react";
import Card from "./ZoomCard";
import Kapable from "../assets/projects/Kapable.png";
import Rider from "../assets/projects/Rider.png";
import Typography from "../assets/projects/Typography.png";
import Iconography from "../assets/projects/Iconography.png";
import MixedMediaDesign from "../assets/projects/Mixed-Media-Design.png";
import PackagingDesign from "../assets/projects/Packaging-Design.png";
import IconsRedesign from "../assets/projects/Icons-Redesign.png";
import ArticleLayoutDesign from "../assets/projects/Article-Layout-Design.png";
import SandraHotel from "../assets/projects/Sandra_hotel.png";
import MoodMobileApp from "../assets/projects/Mood_Tracking_App.png";
import KiddleOS from "../assets/projects/Kiddle_Operating_System.png";
import LowPolyDesign from "../assets/projects/Low-poly-design.png";

import audio from "/hover_audio_effect.mp3";

interface CardData {
  title: string;
  image: string;
  link: string;
  category: string;
}

const cardsData: CardData[] = [
  {
    title: "Kapable Branding & Logo Design",
    image: Kapable,
    link: "https://www.behance.net/gallery/151375765/Kapable-Logo-Design",
    category: "Branding",
  },
  {
    title: "Rider App",
    image: Rider,
    link: "https://www.behance.net/gallery/127419845/Rider-UIUX-Project",
    category: "UI/UX",
  },
  {
    title: "Typography",
    image: Typography,
    link: "https://www.behance.net/gallery/105377499/Typeface-Poster-Design",
    category: "Archive",
  },
  {
    title: "Iconography",
    image: Iconography,
    link: "https://www.behance.net/gallery/124837177/Iconography-Favourite-Food-Icons",
    category: "Archive",
  },
  {
    title: "Mixed Media Design",
    image: MixedMediaDesign,
    link: "https://www.behance.net/gallery/121280673/Mixed-Media-Design-Zine-(-Analog-Digital)",
    category: "Archive",
  },
  {
    title: "Packaging Design",
    image: PackagingDesign,
    link: "https://www.behance.net/gallery/123719901/Packaging-Design-Coffee",
    category: "Archive",
  },
  {
    title: "Icons Redesign",
    image: IconsRedesign,
    link: "https://www.behance.net/gallery/109087633/Google-Icons-Redesign",
    category: "Branding",
  },
  {
    title: "Low Poly 3D Design",
    image: LowPolyDesign,
    link: "https://www.behance.net/gallery/125058855/Low-Poly-Building-3D-Design",
    category: "Archive",
  },
  {
    title: "Article Layout Design",
    image: ArticleLayoutDesign,
    link: "https://www.behance.net/gallery/103899101/Magazine-Layout-Design",
    category: "Archive",
  },
  {
    title: "Sandra Hotels",
    image: SandraHotel,
    link: "https://www.behance.net/gallery/124079993/SandAra-Logo-Design",
    category: "Branding",
  },
  {
    title: "Mood Tracking App",
    image: MoodMobileApp,
    link: "https://www.behance.net/gallery/116658513/UIUX-Design-Mood-Tracking-App",
    category: "UI/UX",
  },
  {
    title: "Kiddle Operating System",
    image: KiddleOS,
    link: "https://www.behance.net/gallery/109391939/Design-Sprint-The-Mobile-Operating-Sytem-For-Children",
    category: "UI/UX",
  },
];

const CardComponent: React.FC = () => {
  const [filter, setFilter] = useState<string>("UI/UX");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleFilterChange = (category: string) => {
    setFilter(category);
  };

  const getFilteredCards = () => {
    if (filter === "All") {
      return cardsData;
    }
    return cardsData.filter((card) => card.category === filter);
  };

  const sortedCards = getFilteredCards().sort((a, b) =>
    a.title.localeCompare(b.title)
  );

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
    <div className="container mx-auto mb-16">
      <div
        className="text-primary lg:pt-[130px] pt-32 -mt-40 lg:-mt-[157px] flex flex-col leading-[150%] text-center lg:text-left"
        id="projects"
      >
        <h1 className="lg:font-medium font-extrabold leading-[140%] text-[38px] lg:text-5xl text-3xl">
          Where passion{" "}
          <p className="m-0 p-0 lg:hidden h-0 md:block">
            <br />
          </p>
          meets pixels
          <span className="text-secondary">.</span>
        </h1>
      </div>
      <div className="grid grid-cols-3 lg:flex lg:justify-start justify-center items-center gap-2 sm:gap-4 pt-[40px] pb-[40px]">
        <button
          onClick={() => handleFilterChange("UI/UX")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`rounded-full px-4 md:font-semibold lg:font-normal sm:px-6 py-1 border transition-all duration-300 hover:border-secondary text-primary backdrop-blur-sm ${
            filter === "UI/UX" ? "bg-secondary" : ""
          }`}
        >
          UI/UX
        </button>
        <button
          onClick={() => handleFilterChange("Branding")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`rounded-full px-4 md:font-semibold lg:font-normal sm:px-6 py-1 border transition-all duration-300 hover:border-secondary text-primary backdrop-blur-sm ${
            filter === "Branding" ? "bg-secondary" : ""
          }`}
        >
          Branding
        </button>
        <button
          onClick={() => handleFilterChange("Archive")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`rounded-full px-4 md:font-semibold lg:font-normal sm:px-6 py-1 border transition-all duration-300 hover:border-secondary text-primary backdrop-blur-sm ${
            filter === "Archive" ? "bg-secondary" : ""
          }`}
        >
          Archive
        </button>
        <audio src={audio} ref={audioRef}></audio>
      </div>
      <div className="grid gap-8 md:mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mb-16">
        {sortedCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
