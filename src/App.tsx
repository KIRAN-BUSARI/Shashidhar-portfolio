import Aboutme from "./components/Aboutme";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen ml-[16px] mr-[16px] lg:ml-[200px] lg:mr-[200px] font-madeTommy">
        <Navbar />
        <Hero />
        <Cards />
        <Aboutme />
      </div>
    </>
  );
}

export default App;
