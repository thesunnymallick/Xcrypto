import React from 'react'
import {Link} from "react-router-dom"
function Header() {


  return (
   <div className="nav">
    <div>
      <h2>Xcrypto</h2>
    </div>
    <div>
     <Link to="/">Home</Link>
     <Link to="/exchanges">Exchanges</Link>
     <Link to="/coins">Coins</Link>
    </div>
   </div>
  )
}

export default Header