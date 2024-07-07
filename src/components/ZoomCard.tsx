import { useRef } from "react";
import { Link } from "react-router-dom";

const Card = ({
  title,
  image,
  link,
  audio,
  volume = 0.5, // Default volume set to 50%
}: {
  title: string;
  image: string;
  link: string;
  audio: string;
  volume?: number;
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.volume = volume; // Set the volume
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
    <div
      className="max-w-sm rounded overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={link} target="_blank">
        <div className="overflow-hidden rounded-[4px]">
          <img
            src={image}
            alt="Kapable Logo"
            className="md:w-[340px] md:h-[300px] transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="py-4 flex flex-col">
          <h1 className="font-medium lg:font-normal group-hover:underline text-xl mb-2">
            {title}
          </h1>
        </div>
      </Link>
      <audio ref={audioRef} src={audio} />
    </div>
  );
};

export default Card;
