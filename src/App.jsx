import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Affiliates from "./components/Affiliates";
import Expertise from "./components/Expertise";
import WorkExperience from "./components/Work-Experience";
import Footer from "./components/Footer";
import { BentoGridDemo } from "./components/Blog";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Affiliates />
      <Expertise />
      <WorkExperience />
      <BentoGridDemo />
      <Footer />
    </>
  );
}

export default App;
