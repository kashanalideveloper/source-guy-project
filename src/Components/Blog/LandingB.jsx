import React from "react";
import HeroBlog from "./HeroBlog";
import Section2 from "./Section2";

// Agar aap wo Pricing/Why Choose Us wala Dashboard bhi Home pe dikhana chahte hain to neeche wali line uncomment karein:
// import Dashboard from "../Dashboard";

const LandingB = () => {
  return (
    <>
      <HeroBlog />
      <Section2 />

      {/* <Dashboard /> */}
    </>
  );
};

export default LandingB;
