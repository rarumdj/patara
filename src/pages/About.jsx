import React from "react";
import NavBgWrap from "../components/NavBgWrap";
import Company from "../containers/about/Company";
import Cryptos from "../containers/about/Crytops";
import Service from "../containers/about/Service";
import Statement from "../containers/about/Statement";
import TrustSection from "../containers/about/TrustSection";

const About = () => {
  return (
    <>
      {/* <NavBgWrap /> */}
      <TrustSection />
      <Company />
      <Service />
      <Cryptos />
      <Statement />
    </>
  );
};

export default About;
