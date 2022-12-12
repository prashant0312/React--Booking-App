import React from 'react';
import "./mailList.css";

const MailList = () => {
  return (
    <div className='mail'>
      <h1 className='mailTitle'>Invest Less Time, Save More Money!!!</h1>
      <span className='mailDesc'>SIGN UP FOR SPECIAL OFFERS</span>
      <div className='mailInputContainer'>
        <input type="text" placeholder='Your Email'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
