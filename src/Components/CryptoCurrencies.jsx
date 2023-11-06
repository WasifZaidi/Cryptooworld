import React, { useContext } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import "./Css/CryptoCurrencies.css"
import { Context } from "../Utils/context";
import { nanoid } from "@reduxjs/toolkit";
const CryptoCurrencies = () => {
  // const [topcurrencies, settopcurrencies] = useState([])
  const {searchterm, setsearchterm} = useContext(Context)
  const {topcurrencies, settopcurrencies} = useContext(Context)
  const {showmoredata}= useContext(Context)
  return (
    <div className="CryptoCurrencies">
      <div className="Logo">
        <h1 id="title">Top 10 Best Crypto Currencies</h1>
        <h1 onClick={showmoredata} id="see-more" className="see-more">See More Content</h1>
      </div>
      <div className="search">
          <input  id="search"  type="text" placeholder="Search Hear..."  onChange={(e)=> setsearchterm(e.target.value)}  />
      </div>
      <div className="Currencies-section">
        {topcurrencies && topcurrencies.map((curElem) => {
          return (
            <Link to={`/crypto/${curElem.uuid}`} key={nanoid()}>
            <div className="Currencies-card">
              <div className="logo">
                <p className="title">{curElem.rank}. {curElem.name}</p>
                <img src={curElem.iconUrl} alt="" />
              </div>
              <div className="details">
                <p className="price">Price: {millify(curElem.price)}$</p>
                <p className="price">Market Cap: {millify(curElem.marketCap)}</p>
                <p className="price">Change: {millify(curElem.change)}%</p>
              </div>
            </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
export default CryptoCurrencies;