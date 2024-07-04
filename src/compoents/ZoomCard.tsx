import { Link } from "react-router-dom";

const Card = ({ title, image, link }: { title: string, image: string, link: string }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden">
            <div className="overflow-hidden rounded-[4px]">
                <Link to={link} target="_blank">
                    <img
                        src={image}
                        alt="Kapable Logo"
                        className="w-[340px] h-[300px] transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </Link>
            </div>
            <div className="py-4 flex flex-col ">
                <h1 className="font-[500px] text-xl mb-2">{title}</h1>
            </div>
        </div>
    );
};

export default Card;
