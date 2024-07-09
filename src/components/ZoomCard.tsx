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
    <div className="max-w-sm mx-auto rounded overflow-hidden">
      <Link to={link} target="_blank">
        <div className="overflow-hidden rounded-[4px]">
          <img
            src={image}
            alt="project_image"
            className="md:w-[340px] md:h-[300px] transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className="py-4 flex flex-col">
          <h1 className="font-medium lg:font-normal text-xl mb-2 text-center lg:text-start">
            {title}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Card;
