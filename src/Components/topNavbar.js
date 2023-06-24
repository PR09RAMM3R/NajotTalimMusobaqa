import React from 'react';
import "../Styles/topnavbar/topnavbar.css";
import vector from "../assets/Vector.png"

function login() {
    return (
        <div className='header'>
            <div className='nav'>
                <div className='nav-top'>
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <a href='/'>ShopNow</a>
                    <div className='lang'>
                        <p>English</p>
                        <img src={vector} alt=''></img>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default login;