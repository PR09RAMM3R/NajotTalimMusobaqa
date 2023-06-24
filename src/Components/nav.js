import React from 'react';
import logo from '../assets/logo.png';
import favourite from '../assets/favourite.png';
import shoppingCart from '../assets/shopping-cart.png';
import search from '../assets/search.png';
import Header from './header.js';
import '../Styles/header/header.css';
import { Link } from 'react-router-dom';

function nav() {
  return (
    <header>
        <nav>
          <div className='left'>
            <a href='/'><img src={logo} alt='Logo'></img></a>
          </div>
          <div className='center'>
            <a href='/'>Home</a>
            <a href='/'>Contact</a>
            <a href='/'>About</a>
            <Link to='/sign-up'>Sign Up</Link>
            {/* <a href='/sign-up'>Sign Up</a> */}
          </div>
          <div className='right'>
            <input type='text' placeholder='What are you looking for?'/>
            <img src={search} alt='Search' className='search'></img>
            <img src={favourite} alt='favourite-icon' width='22px' height='20px'></img>
            <img src={shoppingCart} alt='shopping-cart-icon' width='25px' height='25px'></img>
          </div>
        </nav>
        <Header />
    </header>
  );
}

export default nav;