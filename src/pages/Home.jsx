import React from "react";
import Banner from "../containers/Banner";
import Hero from "../containers/Hero";
import HowItWorks from "../containers/HowItWorks";
import TestimonialVideo from "../containers/TestimonialVideo";
import TradeWithUs from "../containers/TradeWithUs";
import WhoWeAre from "../containers/WhoWeAre";

const Home = () => {
  return (
    <>
      <Hero />
      <TradeWithUs />
      <WhoWeAre />
      <HowItWorks />
      <TestimonialVideo />
      <Banner />
    </>
  );
};

export default Home;
