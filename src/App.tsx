import Aboutme from "./components/Aboutme";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen ml-[50px] mr-[50px] lg:ml-[200px] lg:mr-[200px] font-madeTommy">
        <Navbar />
        <Hero />
        <div className="text-primary flex flex-col leading-[150%] mb-[40px]">
          <h1 className="font-medium text-[32px] mb-2">Where <span className="text-secondary">Passion</span> meets pixels<span className="text-secondary">.</span></h1>
        </div>
        <Cards />
        <Aboutme />
      </div>
    </>
  )
}

export default App
