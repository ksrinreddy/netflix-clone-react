import React from "react";
import Banner from "../components/Banner";
import Faqs from "../components/Faqs";
import Platforms from "../components/Platforms";

const Home = () => {
  return (
    <section className="home">
      <div className="home__x-center">
        <Banner />
        <Platforms />
        <Faqs />
      </div>
    </section>
  );
};

export default Home;
