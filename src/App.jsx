import Card from "./Card";
import Hero from "./Hero";
import Navbar from "./Navbar";


function App() {
  return (
    <>
      <div className="h-screen  bg-[#040404]">
        <Navbar />
       <Hero />
       <Card/>
      </div>
    </>
  );
}

export default App;
