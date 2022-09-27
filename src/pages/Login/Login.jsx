import React, { useState } from 'react'
import { useEffect } from 'react';
import "./login.css";
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [number, setNumber] = useState("");
    const [otp, setOtp] = useState();
    const [RespOTP, setRespOTP] = useState();
    const [RespMsg, setRespMsg] = useState();
    const [RespSuccess, setRespSuccess] = useState();

    const navigate = useNavigate();
    
    const url = `https://trickysys.com/demo/olf/androidApi/Master/Client_Login`;
    const ClinicEasyLogo = `http://cliniceasy.in/admin/uploads/logo/2130_cliniceasy.png`;

    const handleChange = (event) => {
        setNumber(event.target.value);
    }    
    
    useEffect(() => {
        localStorage.setItem("OTP", JSON.stringify(RespOTP))
    },[RespOTP])

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
                console.log(resp)
                setRespOTP(resp.otp) 
                setRespMsg(resp.message) 
                setRespSuccess(resp.success) 
                console.log(resp.message, resp.otp, resp.success)
                alert(resp.otp);
            })
        }) 

    }

    let HideId1 = "";
    HideId1 += RespSuccess === 1 ? "hidden" : "";
    
    let HideId2 = "hidden";
    HideId2 += RespSuccess === 1 ? "hidden" : "";

    const handleOTP = (e) => {
        setOtp(e.target.value);
    }
    const handleSubmit = () => {
        console.log(otp ,"is otp variable")
        console.log(RespOTP, "is a response otp");
        if(otp == RespOTP) {
            console.log("OTP is correct")
            // alert("OTP is Correct");
            navigate("/dashboard")

        }else {
            console.log("OTP is incorrect")
            // alert("OTP is Incorrect");
        }
    }


    return (
        <>
            <div className="loginContainer">

            
                    <div className='login-form-header'>
                        <img className='form-logo' src={ClinicEasyLogo} alt="ClinicEasy-logo" />
                        <h1 className='text-light'>Clinic Easy </h1>
                    </div>
                <div className="login-form mt-4">
                {/* hide containers */}
                    <div className='form-info-holder' id={HideId1} >

                        <h4 className='text-center'>LogIn With Your Mobile Number</h4>
                        <input type="number" name='number' id='number' value={number} onChange={handleChange}
                         className='form-control mt-4 ' placeholder='Enter Your Phone Number' required />
                        <br />
                       <button onClick={FormSubmit} className='btn btn-primary px-3'>Get OTP</button>

                    </div>
                {/* hide containers */}
                {RespSuccess === 1 ? console.log("response is 1  and ok") : console.log("response is 0 not okay")}
                    <div className='form-info-holder' id={HideId2} >

                    <h4 className='text-center'> Verify With OTP </h4>
                <input type="number" name='otp' id='otp' value={otp} onChange={handleOTP}
                 className='form-control mt-4 ' placeholder='Enter Your OTP Here' />
                <br />
             
               <button onClick={handleSubmit} className='btn btn-primary px-3'>Submit</button>

                    </div>
                {/* hide containers */}

                { RespSuccess === 0 ? 
                    <Alert key="danger" className='mt-4 alertTag' variant="danger">
                        {RespMsg}
                    </Alert>
                    :""
                }

                </div>
            
            </div>
        </>
    )
}
// 9850111244
// 7276070179
export default Login;
