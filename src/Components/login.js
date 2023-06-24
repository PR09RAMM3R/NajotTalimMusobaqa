import React from 'react';
import '../Styles/login/login.css';
import sideimage from '../assets/SideImage.png';

function login() {
    return ( 
        <div className="login">
            <div className='left'>
                <img src={sideimage} alt='sideimage'></img>
            </div>
            <div className='right'>
                <h1>Log in to Exclusive</h1>
                <p>Enter your details below</p>
                <form>
                    <input type='text' className='int emailorphone' placeholder='Email or Phone Number' required></input>
                    <input type='password' className='int password' placeholder='Password' required></input>
                    <input type='submit' className='btn' value="Log In"></input>
                    <a href='/'>Forget Password?</a>
                </form>
            </div>
        </div>
     );
}

export default login;