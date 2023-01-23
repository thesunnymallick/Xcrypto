import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Components/Home";
import Exchanges from "./Components/Exchange"
import Coins from "./Components/Coin"

import "./Style/app.scss"
import "./Style/header.scss"
import "./Style/exchange.scss"
import "./Style/coin.scss"
import "./Style/coinDetails.scss"
import CoinDetails from "./Components/CoinDetails";
import Fotter from "./Components/Fotter";



function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>}/>
      </Routes>
      <Fotter/>
     </Router>
    </div>
  );
}

export default App;
