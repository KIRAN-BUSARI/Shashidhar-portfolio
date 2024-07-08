import rightImage from "../assets/aboutmeimage.png";
import SocialMedia from "./SocialMedia";

export default function Aboutme() {
  return (
    <div className="w-full px-4 lg:px-0" id="aboutme">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className="w-full lg:w-[650px] h-auto lg:h-[490px]">
          <h1 className="text-2xl lg:text-[32px] mb-4 pb-4 text-center lg:text-left">
            All about me
          </h1>
          <div className="w-full lg:w-[650px] space-y-6 text-primary/60 text-base lg:text-[16px] flex flex-col items-center text-pretty lg:items-start justify-center mb-4 pb-4">
            <p className="lg:text-left">
              Currently I am based in Bangalore, India working as a{" "}
              <span className=" text-primary">UIUX Designer</span> at Tweeny
              Technologies Pvt Ltd, previously at Kimp.
            </p>
            <p className="lg:text-left">
              I have completed my{" "}
              <span className=" text-primary">
                Post-graduation in UIUX Design
              </span>{" "}
              from Wiztoonz College of Media & Design certified by under Jain
              University.
            </p>
            <p className="lg:text-left">
              My focus is predominantly product design, but I also dabble in
              visual design, logo design, Costume design! I believe in learning
              & upgrading my skills which excites me more always! Minimalism
              design is the key for me to approach functional, clean and
              intuitive design.
            </p>
            <p className="lg:text-left">
              If you would like to reach me, or maybe even meet for some coffee,
              email me at{" "}
              <span className="text-primary">
                <a href="#">saishashiby@gmail.com</a>
              </span>{" "}
              or reach out to me{" "}
              <span className="text-primary">+91 9986563999</span>
            </p>
            <div className="flex justify-start w-full">
              <SocialMedia />
            </div>
          </div>
        </div>
        <div className="w-full -ml-8 lg:ml-0 -mt-8  lg:w-[424px] lg:h-[490px] lg:mt-0">
          <img src={rightImage} className="w-full h-auto" alt="image" />
        </div>
      </div>
    </div>
  );
}
