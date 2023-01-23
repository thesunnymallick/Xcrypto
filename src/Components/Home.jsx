import React from 'react'
import cryptoImg from "../Images/crypto.png" 

function Home() {
  return (
     <div className="Home">
      <img src={cryptoImg} alt="crypto" />
      <h4>Xcrypto</h4>
     </div>
  )
}

export default Home