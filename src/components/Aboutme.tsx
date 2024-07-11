import rightImage from "../assets/profile.png";

export default function Aboutme() {
  return (
    <div className="w-full min-h-[90vh] place-content-center" id="aboutme">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start">
        <div className="w-full lg:w-[650px] lg:xl:pr-6 xl:w-[650px] h-auto lg:h-[490px] place-content-center">
          <div className="w-full space-y-6 text-primary1 text-base lg:text-[16px] flex flex-col items-center text-pretty lg:items-start justify-center mt-10 md:mt-0">
            <h1 className="text-[38px] lg:font-medium font-extrabold lg:text-5xl lg:text-left text-center text-primary">
              All about <span className="text-secondary">me</span>
              <span className="text-primary">.</span>
            </h1>
            <p className="lg:text-left text-center">
              Currently, I am based in Bangalore, India, working as a{" "}
              <span className=" text-primary">UI/UX Designer</span> at Tweeny
              Technologies Pvt Ltd. Previously, I worked at Kimp.
            </p>
            <p className="lg:text-left text-center">
              I completed my{" "}
              <span className=" text-primary">
                post-graduation in UI/UX Design
              </span>{" "}
              from Wiztoonz College of Media & Design, certified under Jain
              University.
            </p>
            <p className="lg:text-left text-center">
              My focus is predominantly on product design, but I also dabble in
              visual design, logo design, and costume design! I believe in
              continuously learning and upgrading my skills, which always
              excites me. Minimalist design is key for me, as I approach
              functional, clean, and intuitive design
            </p>
            <p className="lg:text-left text-center">
              If you would like to reach me, or perhaps meet for coffee, you can
              email me at{" "}
              <span className="text-primary">
                <a href="#">saishashiby@gmail.com</a>
              </span>{" "}
              or reach out to me{" "}
              <span className="text-primary">
                <a href="#">+91 9986563999</a>
              </span>
            </p>
          </div>
        </div>
        <div className="relative place-content-center overflow-hidden lg:ml-0 -mt-8 lg:mt-0 xl:w-[424px]">
          <img
            src={rightImage}
            className="lg:w-full object-cover lg:h-[482px] h-52 w-52 lg:rounded-[4px] rounded-[8px]"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}
