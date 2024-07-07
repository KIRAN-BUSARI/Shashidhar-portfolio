import { Link } from "react-router-dom";

const Card = ({
  title,
  image,
  link,
}: {
  title: string;
  image: string;
  link: string;
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden group">
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
    </div>
  );
};

export default Card;
