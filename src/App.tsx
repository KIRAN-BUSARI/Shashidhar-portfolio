import Cards from "./compoents/Cards"
import Hero from "./compoents/Hero"
import Navbar from "./compoents/Navbar"
import SocialMedia from "./compoents/SocialMedia"

function App() {
  return (
    <>
      <div className="min-h-screen ml-[50px] mr-[50px] lg:ml-[200px] lg:mr-[200px] font-madeTommy">
        <Navbar />
        <Hero />
        <div className="text-[#1B1B1E] flex flex-col md:mt-20 sm:mt-28">
          <h1 className="font-medium text-[32px] mb-2 ml-4">Projects</h1>
        </div>
        <Cards />
        <div className="md:hidden">
          <SocialMedia />
        </div>
      </div>
    </>
  )
}

export default App
