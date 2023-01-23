import React from 'react'
import {Link} from "react-router-dom"
function CoinCard({id,name, img, price ,symbol ,currencySymbol}) {
  return (
    <Link to={`/coin/${id}`}>
      <div className="CoinCard">
        <img src={img} alt={name} />
        <h4>{symbol}</h4>
         <p>{price? currencySymbol + price : "NA" }</p>
         <p>{name = name.length > 12 ? name.substring(0,12) + "..." : name}</p>
     </div>
   </Link>
  )
}

export default CoinCard