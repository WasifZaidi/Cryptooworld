
import { useContext } from "react";
import { createContext, useState, useEffect } from "react";
import { useRef } from "react";
import axios from "axios";
import { options, Newsoptions } from "../imports";
export const Context = createContext();

const AppContext = ({ children }) => {
    const [globalstats, setglobalstats] = useState([])
    const [Exchanges, setExchanges] = useState([])
    const [topcurrencies, settopcurrencies] = useState([])
    const [searchterm, setsearchterm] = useState("")
    const [CoinId, setCoinId] = useState("")
    const [coinDetails, setDetails] = useState([])
    const [coinHistory, setCoinHistory] = useState([])
    const [News, SetNews] = useState([])
    const [SelectNews, setSelectNews] = useState("Cryptocurrency")
    const [cuurencyName, setCurrencyName] = useState([])
    
    useEffect(()=>{
        try{
            axios.get("https://coinranking1.p.rapidapi.com/coins", options)
            .then((res)=> setglobalstats(res?.data?.data?.stats) )
        }catch{
            console.log("Error")
        }
        try{
            axios.get(`https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/markets`, options)
            .then((res) => setExchanges(res?.data?.data?.markets))
        }catch(Error){
            console.log(Error)
        }
        try{
            axios.get("https://coinranking1.p.rapidapi.com/coins", options)
            .then((res) => settopcurrencies(res?.data?.data?.coins.slice(0, 10)))
        }catch(Error){
            console.log(Error)
        }
    },[])
    useEffect(()=>{
        try{
            axios.get(`https://bing-news-search1.p.rapidapi.com/news/search?q=${SelectNews}&safeSearch=Off&textFormat=Raw&freshness=Day`, Newsoptions)
            .then((res) => (SetNews(res?.data?.value)))
        }catch(Error){
            console.log(Error)
        }
        try{
            axios.get("https://coinranking1.p.rapidapi.com/coins", options)
            .then((res) => setCurrencyName(res?.data?.data?.coins))
        }catch(Error){
        console.log(Error)
        }
      }, [SelectNews])
    useEffect(()=>{
        // try{
        //     axios.get(`https://coinranking1.p.rapidapi.com/coin/${CoinId}`, options)
        //     .then((res) => setDetails(res?.data?.data?.coin))
        // }catch(error){
        //     console.log(error.message)
        // }
        
        try{
            axios.get(`https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history`, options)
            .then((res) => setCoinHistory(res.data))
        }catch(Error){
            console.log(Error)
        }
      }, [CoinId])
    
    useEffect(()=>{
        const filterddata = topcurrencies.filter((coin) => coin.name.toLowerCase().includes(searchterm.toLowerCase()))
        settopcurrencies(filterddata)
      }, [searchterm])
    
    const showmoredata = () => {
        document.getElementById("search").style.display = "block"
        document.getElementById("title").innerHTML = "All Crypto Currencies"
        try{
            axios.get("https://coinranking1.p.rapidapi.com/coins", options)
        .then((res) => settopcurrencies(res?.data?.data?.coins))
        }catch(Error){
            console.log(Error)
        }
      }
  


    return (
        <Context.Provider
            value={{
                globalstats,
                setglobalstats,
                Exchanges,
                setExchanges,
                topcurrencies,
                settopcurrencies,
                searchterm, 
                setsearchterm,
                showmoredata,
                CoinId,
                setCoinId,
                coinDetails,
                setDetails,
                coinHistory,
                setCoinHistory,
                News,
                SetNews,
                SelectNews,
                setSelectNews,
                cuurencyName,
                setCurrencyName,

            }}
        >
            {children}
        </Context.Provider>
    )
}
export default AppContext