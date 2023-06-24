import React from 'react';
import "../Styles/footer/footer.css";
import logo from "../assets/Exclusivelogotxt.png";
import send from "../assets/send.png";
import qr from "../assets/qrcode.png";
import appstore from "../assets/appstore.png";
import google from "../assets/GooglePlay.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import ins from "../assets/in.png";

function footer() {
    return (
        <div className='footer'>
            <div className='top'>
                <div className='card one'>
                    <img src={logo} alt='' className='logo'></img>
                    <h2>Subscribe</h2>
                    <p>Get 10% off your first order</p>
                    <input type="text" placeholder='Enter your email'></input>
                    <img src={send} alt='' className='send'></img>
                </div>
                <div className='card two'>
                    <h2>Support</h2>
                    <p>111 Bijoy sarani, Dhaka,<br></br>  DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className='card three'>
                    <h2>Account</h2>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className='card four'>
                    <h2>Quick Link</h2>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className='card five'>
                    <h2>Download App</h2>
                    <p>Save $3 with App New User Only</p>
                    <div className='container'>
                        <div className='left'>
                            <img src={qr} alt='' width="100" height="100"></img>
                        </div>
                        <div className='right'>
                            <img src={google} alt=''></img>
                            <img src={appstore} alt=''></img>
                        </div>
                    </div>
                    <div className='icons'>
                        <img src={instagram} alt='' width='25' height='25'></img>
                        <img src={twitter} alt='' width='25' height='25'></img>
                        <img src={facebook} alt='' width='13' height='20'></img>
                        <img src={ins} alt='' width='20' height='20'></img>
                    </div>  
                </div>  
            </div>
            <div className='bottom'>
                <p>Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
    );
}

export default footer;  