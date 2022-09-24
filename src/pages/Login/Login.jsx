import React, { useState } from 'react'
import "./login.css";

const Login = () => {
    const url = `https://trickysys.com/demo/olf/androidApi/Master/Client_Login`;
    const [number, setNumber] = useState("");
    
    const handleChange = (event) => {
        setNumber(event.target.value);
    }    
    
    const FormSubmit = () => {
        console.log(number)
        let data = {
            mobile: number,
        }
       fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
       }).then((result) => {
            result.json().then((resp)=> {
                console.warn(resp,"response");
            })
       })
    }

    return (
        <>
            <div className="loginContainer">
            
                    <div className='login-form-header'>
                        <img className='form-logo' src="http://cliniceasy.in/admin/uploads/logo/2130_cliniceasy.png" alt="ClinicEasy-logo" />
                        <h1 className='text-light'>Clinic Easy </h1>
                    </div>
                <div className="login-form">
                    <div className='form-info-holder'>
                        <h4 className='text-center'>LogIn With Your Mobile Number</h4>
                        <input type="number" name='number' id='number' value={number} onChange={handleChange}
                         className='form-control mt-4 ' placeholder='Enter Your Phone Number' />
                        <br />
                        <button onClick={FormSubmit} className='btn btn-primary px-3'>Get OTP</button>
                    </div>
                </div>

            
            </div>
        </>
    )
}

export default Login
