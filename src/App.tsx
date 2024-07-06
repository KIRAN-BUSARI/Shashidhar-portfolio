import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import Tabs from "./components/Tabs";

function App() {
  return (
    <>
      <div className="min-h-screen ml-[50px] mr-[50px] lg:ml-[200px] lg:mr-[200px] font-madeTommy">
        <Navbar />
        <Hero />
        <div className="text-primary flex flex-col pt-[100px] leading-[150%] mb-[40px]">
          <h1 className="font-medium text-[32px] mb-2">Where <span className="text-secondary">Passion</span> meets pixels!</h1>
        </div>
        <Tabs />
        <Cards />
        <SocialMedia />
      </div>
    </>
  )
}

export default App
