import React, { useContext, useState } from "react";
import "./Css/News.css"
import { nanoid } from "@reduxjs/toolkit";
import moment from 'moment';
import imgnotfound from "../img/image not found.png"
import { Context } from "../Utils/context";

const News = () => {
  const {News, SetNews} = useContext(Context)
  const {SelectNews, setSelectNews} = useContext(Context)
  const {cuurencyName, setCurrencyName} = useContext(Context)

  if(News.length == 0){
       return <h1 style={{textAlign: 'center', fontSize: "2vw", marginTop: "2vw", marginBottom: "2vw"}}> No results Found </h1>
  }
  const id = nanoid()
  return (
    <div className="News">
      <div className="Logo">
        <div className="logo-select">
          <h1 id="title">News</h1>
        </div>
        <h1 id="see-more" className="see-more">See More Content</h1>
      </div>
      <div className="search">
        <select  value={SelectNews} onChange={(e)=>{setSelectNews(e.target.value)
        } } >
         {cuurencyName && cuurencyName.map((curElem)=>{
           return(
            <option key={nanoid()} value={curElem.name}>{curElem.name}</option>
           )
         })}
        </select>
      </div>
      <div className="News-section">
        {
          News.map((curElem) => {
            return (
              <a href={curElem.url} key={nanoid()}>
                <div className="News-card" key={nanoid()}>
                  <div className="logo">
                    <p id="title" className="title">{curElem.name}</p>
                    <img src={curElem?.image?.thumbnail?.contentUrl || imgnotfound} alt="" />
                  </div>
                  <div className="details">
                    <p>{curElem.description?.slice(0, 120)}</p>
                  </div>
                  <div className="providers">
                    <div className="provider-details">
                      <img src={curElem.provider[0].image?.thumbnail?.contentUrl ||  imgnotfound } alt="" />
                      <p>{curElem.provider[0].name}</p>
                    </div>
                    <div className="date">
                      <p>{moment(curElem.datePublished).startOf('ss').fromNow()}</p>
                    </div>
                  </div>
                </div>
              </a>
            )
          })
        }
      </div>
    </div>
  );
}
export default News;