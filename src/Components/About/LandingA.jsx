import React from "react";
import AboutHero from "./AboutHero";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
// Agar aap wo Pricing/Why Choose Us wala Dashboard bhi Home pe dikhana chahte hain to neeche wali line uncomment karein:
// import Dashboard from "../Dashboard";

const LandingA = () => {
  return (
    <>
      <AboutHero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      {/* <Dashboard /> */}
    </>
  );
};

export default LandingA;
