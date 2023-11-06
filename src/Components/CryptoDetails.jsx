import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import millify from "millify";
import "./Css/CryptoDetails.css"
import axios from "axios";
import { options } from "../imports";
import LineChart from "./Linechart";
import { nanoid } from "@reduxjs/toolkit";
const CryptoDetails = () => {
  const { coinId } = useParams();
  const [coinDetails, setDetails] = useState([])
  const [timeperiod, setTimeperiod] = useState('7d');
  const [coinHistory, setCoinHistory] = useState([])
  useEffect(() => {
    axios.get(`https://coinranking1.p.rapidapi.com/coin/${coinId}`, options)
      .then((res) => setDetails(res?.data?.data?.coin))
  }, [])
  useEffect(() => {
    axios.get(`https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history`, options)
      .then((res) => setCoinHistory(res.data))
  }, [])
  
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']
  const CoinDet = [
    {title: 'Price to USD' , value: `${millify(coinDetails.price)}`},
    {title: 'Rank' , value: `${coinDetails.rank}`},
    {title: '24h volume' , value: `${millify(coinDetails['24hVolume'])}`},
    {title: 'MarketCap' , value: `${millify(coinDetails.marketCap)}`},
    {title: 'All time high' , value: `${millify(coinDetails?.allTimeHigh?.price)}`},
  ]
  const genericStats = [
    { title: 'Number Of Markets', value: coinDetails?.numberOfMarkets },
    { title: 'Number Of Exchanges', value: coinDetails?.numberOfExchanges},
    { title: 'Aprroved Supply', value: coinDetails?.supply?.confirmed},
    { title: 'Total Supply', value: `$ ${ millify(coinDetails?.supply?.total)}`},
    { title: 'Circulating Supply', value: `$ ${ millify(coinDetails?.supply?.circulating )}` },
  ];
  return (
    <div className="CryptoDetails">
      <h1 className="title">({coinDetails.name} {coinDetails.symbol}) Price </h1>
      <p className="details-para">{coinDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
      <select defaultValue="7d" >
        {
          time.map((curElem)=>{
            return(
              <option key={nanoid()}>{curElem}</option>
            )
          })
        }
      </select>
      <div className="chart"><LineChart coinHistory={coinHistory} currentPrice={millify(coinDetails?.price)} coinName={coinDetails?.name}  /></div>
       <div className="statisic">
        <div className="coin-statistic">
         <div className="navigate-heading">
         <h1>{coinDetails.name} Value Statistics </h1>
          <p>an Overviews showing the stats of {coinDetails.name} </p>
         </div>
          {
           CoinDet.map((curElem)=>{
            return(
              <div key={nanoid()} className="Det-card">
              <div className="card-titile">
              <p className="card-heading">{curElem.title}</p>
              </div>
              <p className="details">{curElem.value}</p>
              </div> 
            )
           })
          }
        </div>
        <div className="genral-statistics">
          <div className="navigate-heading">
        <h1> Other Statistics </h1>
          <p>an Overviews showing the stats of other crypto currencies</p>
          </div>
        {
           genericStats.map((curElem)=>{
            return(
              <div key={nanoid()} className="Det-card">
              <div className="card-titile">
              <p className="card-heading">{curElem.title}</p>
              </div>
              <p className="details">{curElem.value}</p>
              </div> 
            )
           })
          }
        </div>
       </div>
       <div className="description">
        <div className="text">
          <div className="desc-titile">
           <h1>What is {coinDetails.name}</h1>
           <p>{coinDetails.description}</p>
          </div>
        </div>
       </div>
       <div className="links">
       <div className="links-heading">
          <h1>Links</h1>
        </div>
        {
          coinDetails?.links?.map((curElem)=>{
            return(
              <a key={nanoid()} href={curElem?.url}>
              <div className="link-card">
                <div className="type">{curElem?.type}</div>
                <div className="name">{curElem?.name}</div>
              </div>
              </a>
            )
          })
        }
       </div>
    </div>
  );
}
export default CryptoDetails;