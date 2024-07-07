import rightImage from "../assets/aboutmeimage.png"
import SocialMedia from "./SocialMedia"
export default function Aboutme() {
    return (
        <div className="w-full">
            <div className="flex justify-between">
                <div className="w-[650px] h-[490px]">
                    <h1 className="text-[32px] mb-4 pb-4">
                        All about me
                    </h1>
                    <div className="w-[650px] h-[354px] space-y-6 text-primary/60 text-[16px] flex flex-col items-center justify-center mb-4 pb-4">
                        <p>
                            Currently I am based in Bangalore, India working as a <span className=" text-primary">UIUX Designer</span> at Tweeny Technologies Pvt Ltd, previously at Kimp.
                        </p>
                        <p>
                            I have completed my <span className=" text-primary">Post-graduation iin UIUX Design</span> from Wiztoonz College of Media & Design certified by under Jain University.
                        </p>
                        <p>
                            My focus is predominantly product design, but I also dabble in visual design, logo design, Costume design! I belive in learning & upgrading my skills which excites me more always! Minimalism design is the key for me to approach functional, clean and intutive design.
                        </p>
                        <p>
                            If you would like to reach me, or maybe even meet for some coffee, email me at <span className="text-primary">saishashiby@gmail.com</span> or reach out to me <span className="text-primary">+91 9986563999</span>
                        </p>
                        <div className="flex justify-start w-full">
                            <SocialMedia />
                        </div>
                    </div>
                </div>
                <div className="w-[424px]">
                    <img src={rightImage} className='' alt="image" />
                </div>
            </div>
        </div>
    )
}
