import React from 'react'
import {Link} from "react-router-dom"
import {CgMail} from "react-icons/cg"
import ImgCrypto from "../Images/crypto.png"
import {AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiFillGithub} from "react-icons/ai"

function Fotter() {
  return (
   <>
     <div className="fotter">
        <div>
            <img src={ImgCrypto} alt="Xcrypto" />
              <h4>Xcrypto</h4>
              <p>We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.</p>
        </div>
         
         <div className='Link-tag'>
     <Link to="/">Home</Link>
     <Link to="/exchanges">Exchanges</Link>
     <Link to="/coins">Coins</Link>
         </div>
        <div className='third-div'>
         <div className='mail'>
         <a href="#"><CgMail/></a>
         <input type="text" />
         </div>

        <div className="social">
           <a href="#"><AiFillLinkedin/></a>
           <a href="#"><AiFillFacebook/></a>
           <a href="#"><AiFillInstagram/></a>
           <a href="#"><AiFillGithub/></a>
           </div>
        </div>



     </div>
     <p className='fotter-copyright'>© Copyright 2023 Xcrypto || Sunny Mallick</p>
   </>
  )
}

export default Fotter