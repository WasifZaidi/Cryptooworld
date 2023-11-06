import React from "react";
import "./Css/HomePage.css";
import CryptoCurrencies from "./CryptoCurrencies";
import News from "./News";
import GlobalStats from "./Globalstats"
import { useContext } from "react";
import { Context } from "../Utils/context";
const HomePage = () => {
  const {globalstats, setglobalstats} = useContext(Context)
  return (
    <div className="Home">
    <GlobalStats/>
    <CryptoCurrencies/>
    <News/>
  </div>
  );
}
export default HomePage;