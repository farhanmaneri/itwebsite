import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Navigation = ()=>{
    return(
        <>
       <div className="container-fluid marquee">
  <div className="row">
    <div className="col">
      <marquee behavior="scroll" direction="left">
       Digitalize your bussiness, Multiply your income! Contact at <span className='contact'>0311-9265290</span>
      </marquee>
    </div>
  </div>
</div>
    </>
    )
}

export default Navigation;