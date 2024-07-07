import React, { useState } from "react";
import Card from "./ZoomCard";
import Kapable from "../assets/projects/Kapable.png";
import Rider from "../assets/projects/Rider.png";
import MyLar from "../assets/projects/MyLar.png";
import Typography from "../assets/projects/Typography.png";
import MailScape from "../assets/projects/MailScape.png";
import Social from "../assets/projects/SocialMediaApp.png";

interface CardData {
  title: string;
  image: string;
  link: string;
  category: string;
}

const cardsData: CardData[] = [
  {
    title: "Branding & Logo Design",
    image: Kapable,
    link: "https://www.behance.net/gallery/151375765/Kapable-Logo-Design",
    category: "Branding",
  },
  {
    title: "UI/UX - Rider App",
    image: Rider,
    link: "https://www.behance.net/gallery/127419845/Rider-UIUX-Project",
    category: "UI/UX",
  },
  {
    title: "Logo Design",
    image: MyLar,
    link: "https://www.behance.net/gallery/116686631/MYLAR-PACKAGING-SOLUTIONS-PVT-LTD",
    category: "Branding",
  },
  {
    title: "Typography",
    image: Typography,
    link: "https://www.behance.net/gallery/105377499/Typeface-Poster-Design",
    category: "Graphic Design",
  },
  {
    title: "UI/UX - Mail Scape",
    image: MailScape,
    link: "https://www.behance.net/gallery/116828259/Mailscape-Email-App",
    category: "UI/UX",
  },
  {
    title: "Social Media App",
    image: Social,
    link: "https://www.behance.net/gallery/112139341/Creative-Poster-Design",
    category: "Graphic Design",
  },
];

const CardComponent: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");

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

  return (
    <div className="container mx-auto mb-16">
      <div className="flex flex-wrap justify-start gap-2 sm:gap-4 pb-4">
        <button
          onClick={() => handleFilterChange("All")}
          className={`rounded-full px-4 sm:px-6 py-1 border transition-all duration-300 hover:border-secondary text-primary backdrop-blur-sm ${
            filter === "All" ? "bg-secondary" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange("UI/UX")}
          className={`rounded-full px-4 sm:px-6 py-1 border transition-all duration-300 hover:border-secondary text-primary backdrop-blur-sm ${
            filter === "UI/UX" ? "bg-secondary" : ""
          }`}
        >
          UI/UX
        </button>
        <button
          onClick={() => handleFilterChange("Graphic Design")}
          className={`rounded-full px-4 sm:px-6 py-1 border transition-all duration-300 hover:border-secondary text-primary backdrop-blur-sm ${
            filter === "Graphic Design" ? "bg-secondary" : ""
          }`}
        >
          Graphic Design
        </button>
        <button
          onClick={() => handleFilterChange("Branding")}
          className={`rounded-full px-4 sm:px-6 py-1 border transition-all duration-300 hover:border-secondary text-primary backdrop-blur-sm ${
            filter === "Branding" ? "bg-secondary" : ""
          }`}
        >
          Branding
        </button>
        <button
          onClick={() => handleFilterChange("Archive")}
          className={`rounded-full px-4 sm:px-6 py-1 border transition-all duration-300 hover:border-secondary text-primary backdrop-blur-sm ${
            filter === "Archive" ? "bg-secondary" : ""
          }`}
        >
          Archive
        </button>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mb-16">
        {sortedCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            link={card.link}
            audio="/hover_audio_effect.mp3"
            volume={0.1}
          />
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
