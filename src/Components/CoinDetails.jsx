import React from 'react'
import { useEffect } from 'react';
import { useParams } from "react-router-dom"
import axios from 'axios';
import { useState } from 'react';
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai"
import ErrorComponet from './ErrorComponet';
import Loader from './Loader';
import Chart from './Chart';
function CoinDetails() {
  const { id } = useParams();

  const [currency, setCurrency] = useState("inr")
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [coin, setCoin] = useState({});
  const[chartArray, setChartArray]=useState([]);
  const[days, setDays]=useState("24h");

  const currencySymbol =
  currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"

  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];




  const switchChartStats = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
      case "14d":
        setDays("14d");
        setLoading(true);
        break;
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
      case "60d":
        setDays("60d");
        setLoading(true);
        break;
      case "200d":
        setDays("200d");
        setLoading(true);
        break;
      case "1y":
        setDays("365d");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;

      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  };


  useEffect(() => {

    const fetchCoin = async () => {
       try {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        const {data:chartData} =await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)
        console.log(chartData.prices);
        setChartArray(chartData.prices);

        setCoin(data);
        setLoading(false)
        
       } catch (error) {
        setLoading(false)
        setError(true);
        
       }
    }

    fetchCoin()
  }, [id, currency, days])


  if(error){
    return <ErrorComponet message={"Something Wrong!!"}/>
  }

  return (
    <>

  
     {
      loading ? <Loader/> : (
        <>
         <div className="radio">
        <div>
          <label>inr</label>
          <input type="radio" name="CurrencyType" value="inr" onChange={(e) => setCurrency(e.target.value)} id="" />
        </div>
        <div>
          <label>usd</label>
          <input type="radio" name="CurrencyType" value="usd" onChange={(e) => setCurrency(e.target.value)} id="" />
        </div>
        <div>
          <label>eur</label>
          <input type="radio" name="CurrencyType" value="eur" onChange={(e) => setCurrency(e.target.value)} id="" />
        </div>


         </div>

           <div className="chart">
            <Chart arr={chartArray} currency={currencySymbol} days={days}/>
             <div className="btns">
             {
              btns.map((i)=>(
              <button
               key={i}
               onClick={()=>{switchChartStats(i)}}
               >{i}</button>
              ))
            }
             </div>
           </div>

          <div className="coin">
        
        <p className='coin-date'>Last Upadte On : {Date(coin.market_data).split("G")[0]}</p>


       <div className="coinDetails">
          
          <div>
            <img src={coin.image.large} alt={coin.name} />
             <p>{coin.name}</p>
             <h4>{currencySymbol} {coin.market_data.current_price[currency]}</h4>
             <div className='priceChange'>
              <p>
              {coin.market_data.price_change_percentage_24h>0?<AiOutlineArrowUp/> :<AiOutlineArrowDown/> }
              </p>
               <p>{coin.market_data.price_change_percentage_24h}%</p>
             </div>
             <span className='market_Rank'>#{coin.market_cap_rank}</span>

              <div className="market">
                <div>
                  <p>Max Supply</p>
                   <p>{coin.market_data.max_supply}</p>
                </div>
                <div>
                  <p>Circulating Supply</p>
                   <p>{coin.market_data.circulating_supply}</p>
                </div>
                <div>
                  <p>Market Cap</p>
                   <p>{`${currencySymbol}${coin.market_data.market_cap[currency]}`}</p>
                </div>
                <div>
                  <p>All Time Low</p>
                   <p>{`${currencySymbol}${coin.market_data.atl[currency]}`}</p>
                </div>
                <div>
                  <p>All Time High</p>
                   <p>{`${currencySymbol}${coin.market_data.ath[currency]}`}</p>
                </div>
              </div>

          </div>

       </div>

          </div>
        </>

      )
     }

     
    </>
  )
}

export default CoinDetails