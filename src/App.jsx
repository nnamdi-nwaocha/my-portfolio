import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Technologies />
      <Navbar />
    </>
  );
}

export default App;
