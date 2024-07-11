import { useRef, useState, useEffect } from "react";
import Aboutme from "./components/Aboutme";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import SocialMedia from "./components/SocialMedia";

function App() {
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

  return (
    <>
      <div className="min-h-screen ml-[16px] mr-[16px] lg:ml-[200px] lg:mr-[200px] font-madeTommy">
        <Analytics />
        <Navbar />
        <div ref={heroRef}>
          <Hero />
        </div>
        <div ref={cardsRef}>
          <Cards />
        </div>
        <div ref={aboutmeRef}>
          <Aboutme />
        </div>
      </div>
      {showSocialMedia && (
        <div className="z-20 fixed top-[290px] right-0">
          <SocialMedia />
        </div>
      )}
    </>
  );
}

export default App;
