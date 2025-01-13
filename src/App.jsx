import Card from "./Card";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";


function App() {
  return (
    <>
      <div className="h-screen bg-[#040404]">
        <Navbar />
       <Hero />
       <Card/>
       <Footer/>
      </div>
    </>
  );
}

export default App;
