import React, { useState } from "react";
import "./Css/HomePage.css";
import { useContext } from "react";
import millify from "millify";
import { Context } from "../Utils/context";
import "./Css/Globalstats.css"
const HomePage = () => {
  const {globalstats, setglobalstats} = useContext(Context)
  return (
    <div className="Home">
    <div className="heading">
      <h1>Global Crypto Stats</h1>
      </div>
      <div className="top-section">
        <div className="Coloum">
          <p className="title">Total Cryto Currencies</p>
          <h2 className="value">{millify(globalstats.total)}</h2>
        </div>
        <div className="Coloum">
          <p className="title">Total Exchanges</p>
          <h2 className="value">{millify(globalstats.totalExchanges)}</h2>
        </div>
        <div className="Coloum">
          <p className="title">Total Market Cap</p>
          <h2 className="value">{millify(globalstats.totalMarketCap)}</h2>
        </div>
        <div className="Coloum">
          <p className="title">Total 24hr Volume</p>
          <h2 className="value">{millify(globalstats.total24hVolume)}</h2>
        </div>
        <div className="Coloum">
          <p className="title">Total Markets</p>
          <h2 className="value">{millify(globalstats.totalMarkets)}</h2>
      </div>
    </div>
  </div>
  );
}
export default HomePage;