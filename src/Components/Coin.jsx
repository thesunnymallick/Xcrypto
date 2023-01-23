import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import CoinCard from './CoinCard';
import Loader from './Loader.jsx';
import ErrorComponet from './ErrorComponet.jsx';
function Coin() {

  const[exchanges, setExchanges]=useState([]);
  const[currency, setCurrency]=useState("inr")
  const[page, setPage]=useState(1);
  const[loading, setLoading]=useState(true);
  const[error, setError]=useState(false);

  const currencySymbol =
  currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"

  useEffect(()=>{
    const ExchangesApi=async()=>{
     try {
      const {data}=await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}&sparkline=false`)
 

      setExchanges(data)
      setLoading(false)
     } catch (error) {
      setError(true);
      setLoading(false);
     }
    }
    ExchangesApi();
  },[loading, exchanges,error, currency, page])

  if(error){
    return <ErrorComponet message={"Something Wrong!!"}/>
  }
  if(page===0)
  {
    setPage(3);
  }
  if(page===4)
  {
    setPage(1);
  }
 

  console.log(page)
  return (
    <>
    
     <div className="radio">
       <div>
        <label>inr</label>
        <input type="radio" name="CurrencyType" value="inr"  onChange={(e)=>setCurrency(e.target.value)} id="" />
       </div>
       <div>
        <label>usd</label>
        <input type="radio" name="CurrencyType" value="usd"  onChange={(e)=>setCurrency(e.target.value)}  id="" />
       </div>
       <div>
        <label>eur</label>
        <input type="radio" name="CurrencyType" value="eur"  onChange={(e)=>setCurrency(e.target.value)}  id="" />
       </div>
      
     
     </div>

     <div className="coins">

    {
      loading? <Loader/> :(
        exchanges.map((i)=>(
        <CoinCard 
        key={i.id}
        id={i.id}
         name={i.name}
         img={i.image}
         price={i.current_price}
         symbol={i.symbol}
         currencySymbol={currencySymbol}
         />
      ))
      )
    }
   </div>

   <div className='pagination-button'>
     <div>
     <button onClick={()=>setPage(page-1)}>PREV</button>
     <button onClick={()=>setPage(page+1)}>NEXT</button>
     </div>
   </div>
    </>
  )
}

export default Coin