import Aboutme from "./components/Aboutme";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <nav className="bg-white border-b border-gray-200 z-10 pl-[200px] pr-[200px] sticky top-0">
        <Navbar />
      </nav>
      <div
        id="#"
        className="min-h-screen ml-[10px] mr-[1px] lg:ml-[200px] lg:mr-[200px] font-madeTommy"
      >
        <Hero />
        <div className="text-primary flex flex-col leading-[150%] mb-[40px]">
          <h1 className="font-medium lg:text-[32px] text-3xl mb-2">
            Where <span className="text-secondary">Passion</span> meets pixels
            <span className="text-secondary">.</span>
          </h1>
        </div>
        <Cards />
        <Aboutme />
      </div>
    </>
  );
}

export default App;
