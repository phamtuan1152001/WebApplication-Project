import React from "react";
import Slider from "./Slider/Slider";
import TrendProduct from "./Trend Product/TrendProduct";
import BestSeller from "./BestSeller/BestSeller";
import Subcribe from "./Subcribe/Subcribe";


function Home() {
  return (
    <>
      <Slider />
      <TrendProduct />
      <BestSeller />
      <Subcribe />
    </>
  );
}

export default Home;
