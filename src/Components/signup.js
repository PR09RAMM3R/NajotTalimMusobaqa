import React from 'react';
import "../Styles/signup/signup.css";
import sideimage from "../assets/SideImage.png";
import googleicon from "../assets/googleicon.png";

function signup() {
    return (
        <div className="signup">
            <div className='left'>
                <img src={sideimage} alt='SideImage'></img>
            </div>
            <div className='right'>
                <h1>Create an account</h1>
                <p>Enter your details below</p>
                <form>
                    <input type="text" className="int name" placeholder="Name" required></input>
                    <input type='text' className='int emailorphone' placeholder='Email or Phone Number' required></input>
                    <input type='password' className='int password' placeholder='Password' required></input>
                    <input type='submit' className='btn' value="Create Account"></input>
                    <input type='button' className='google-btn' value="Sign up with Google"></input>
                    <img src={googleicon} alt='Google-icon' width="20" height="20"></img>
                </form>
                <p className='text'>Already have account?</p>
                <a href='/'>Log in</a>
            </div>
        </div>
    );
}

export default signup;