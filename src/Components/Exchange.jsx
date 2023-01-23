import React, {useEffect} from 'react'
import axios from "axios"
import { useState } from 'react'
import ExchangeCard from './ExchangeCard.jsx';
import Loader from './Loader.jsx';
import ErrorComponet from './ErrorComponet.jsx';
function Exchange() {
  const[exchanges, setExchanges]=useState([]);
  const[loading, setLoading]=useState(true);
  const[error, setError]=useState(false);




  useEffect(()=>{
    const ExchangesApi=async()=>{
     try {
      const {data}=await axios.get(`https://api.coingecko.com/api/v3/exchanges`)
      console.log(data)
      console.log(data[0].country)
      setExchanges(data)
      setLoading(false)
     } catch (error) {
      setError(true);
      setLoading(false);
     }
    }
    ExchangesApi();
  },[loading, exchanges, error])

  if(error){
    return <ErrorComponet message={"Something Wrong!!"}/>
  }

  return (
    <div className="exchanges">
    {
      loading? <Loader/> :(
        exchanges.map((i)=>(
        <ExchangeCard key={i.id} name={i.id}
         rank={i.trust_score_rank} 
         img={i.image}
         url={i.url}
    
         />
      ))
      )
    }
   </div>
  )
}



export default Exchange