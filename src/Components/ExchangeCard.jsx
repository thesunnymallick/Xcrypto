
import React from 'react'

function ExchangeCard({name, rank, img, url}) {
  return (
   <a href={url} target="blank">
      <div className="exchangeCard">
        <img src={img} alt={name} />
         <h4>{rank}</h4>
         <p>{name = name.length > 12 ? name.substring(0,12) + "..." : name}</p>
     </div>
   </a>
  )
}

export default ExchangeCard