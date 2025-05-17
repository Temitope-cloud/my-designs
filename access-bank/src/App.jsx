// import { useState } from "react";
import "./App.css";
import IntroText from "./components/animate-text-intro";
import Header from "./components/header";
import HeroSection from "./components/hero";
import SecondSect from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

function App() {
  return (
    <>
      <IntroText />
      <HeroSection />
      <SecondSect />
      <ThirdSection />
    </>
  );
}

export default App;
