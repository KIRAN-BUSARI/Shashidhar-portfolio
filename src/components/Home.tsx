import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Hero from "./Hero";
import Cards from "./Cards";
import Aboutme from "./Aboutme";
import SocialMedia from "./SocialMedia";

const Home = forwardRef((_props, ref) => {
  const [showSocialMedia, setShowSocialMedia] = useState(false);

  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const aboutmeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === cardsRef.current) {
            setShowSocialMedia(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  useImperativeHandle(ref, () => ({
    heroRef: ref,
    cardsRef: cardsRef,
  }));

  return (
    <div className="min-h-screen ml-[16px] mr-[16px] lg:ml-[200px] lg:mr-[200px] font-madeTommy">
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={cardsRef}>
        <Cards />
      </div>
      <div ref={aboutmeRef}>
        <Aboutme />
      </div>
      {showSocialMedia && (
        <div className="z-20 fixed top-[290px] right-0">
          <SocialMedia />
        </div>
      )}
    </div>
  );
});

export default Home;
