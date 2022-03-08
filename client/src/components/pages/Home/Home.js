import React from "react";
import Slider from "./Slider/Slider";
import TrendProduct from "./Trend Product/TrendProduct";
import BestSeller from "./BestSeller/BestSeller";
import Subcribe from "./Subcribe/Subcribe";
import Benefit from "./Benefit/Benefit";
// import Login from "./pages/Login&Register/Login/Login";
// import Register from "./pages/Login&Register/Register/Register";
function Home() {
  return (
    <>
      <Slider />
      <TrendProduct />
      <BestSeller />
      <Subcribe />
      <Benefit />
    </>
  );
}

export default Home;
