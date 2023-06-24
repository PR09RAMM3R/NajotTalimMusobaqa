import React from 'react';
import Vector from '../assets/VectorRight.png';

function header() {
    return (
        <div className="header">
            <div className="category">
                <ul className='wFashion'>
                    <li><a href='/'>Women's Fashion</a></li>
                    <img src={Vector} alt=''/>
                </ul>
                <ul className='mFashion'>
                    <li><a href='/'>Men's Fashion</a></li>
                    <img src={Vector} alt=''/>
                </ul>
                <ul>
                    <li><a href='/'>Electronic</a></li>
                </ul>
                <ul>
                    <li><a href='/'>Home & Lifestyle</a></li>
                </ul>
                <ul>
                    <li><a href='/'>Medicine</a></li>
                </ul>
                <ul>
                    <li><a href='/'>Sports & Outdoor</a></li>
                </ul>
                <ul>
                    <li><a href='/'>Baby's & Toy</a></li>
                </ul>
                <ul>
                    <li><a href='/'>Groceries & Pets</a></li>
                </ul>
                <ul>
                    <li><a href='/'>Health & Beauty</a></li>
                </ul>
            </div>
            
            <div class="container">
                <div class="card"></div>
            </div>
        </div>
    );
}

export default header;