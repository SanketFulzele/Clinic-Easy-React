import React from 'react'
import { useState } from 'react';

const OTPPage = () => {

  const [otp, setOtp] = useState();

  
  const ClinicEasyLogo = `http://cliniceasy.in/admin/uploads/logo/2130_cliniceasy.png`;

  const getOTP = (e) => {
    setOtp(e.target.value);
  }

  // const getDatafromLS = () => {
  //   const Data = localStorage.getItem("OTP");
  //   if(Data) {
  //     return JSON.parse(Data);
  //   }else {
  //     return []
  //   }
  // }
  // console.log(getDatafromLS)
  
  const VerifyOTP = () => {
    console.log(otp)
  }
  
  return (
    <>
     <div className="loginContainer">
            
            <div className='login-form-header'>
                <img className='form-logo' src={ClinicEasyLogo}  alt="ClinicEasy-logo" />
                <h1 className='text-light'> Clinic Easy </h1>
            </div>
        <div className="login-form mt-4">
            <div className='form-info-holder'>

            
                <h4 className='text-center'> Verify With OTP </h4>
                <input type="number" name='otp' id='otp' value={otp} onChange={getOTP}
                 className='form-control mt-4 ' placeholder='Enter Your OTP Here' />
                <br />
             
               <button onClick={VerifyOTP} className='btn btn-primary px-3'>Submit</button>
               
            </div>
        </div>

    
    </div>
    </>
  )
}

export default OTPPage;
