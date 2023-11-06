import React from "react";
import "./Css/Exchanges.css"
import { useContext } from "react";
import { Context } from "../Utils/context";
import millify from "millify";
const Exchange = () => {
  const {Exchanges, setExchanges} = useContext(Context)
   

  return (
    <div className="Exchange">
    <div className="Exchanges-titile">
      <h1>Exchanges</h1>
    </div>
    <div className="Exchange-section">
      <div className="Exchange-card">
        <h1 className="Name" >Name</h1>
        <h1 className="Volume" > Volume</h1>
        <h1 className="Exchanges" >Exchanges</h1>
        <h1 className="Price" >Price</h1>
      </div>
      {
        Exchanges && Exchanges.map((curElem) => {
          return (
            <div className="Exchange-card">
              <div className="Exchange-card-title">
                <img src={curElem?.exchange?.iconUrl} alt="" />
                <p className="cuurency-name">{curElem?.exchange?.name}</p>
              </div>
              <p className="volume">{millify(curElem['24hVolume'])}</p>
              <p className="market-share">{curElem.marketShare}%</p>
              <p className="price">{millify(curElem.price)}$</p>
            </div>
          )
        })
      }
    </div>
  </div>
  );
}
export default Exchange;