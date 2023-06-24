import React from 'react';
import '../Styles/most/most.css';
import arrow1 from "../assets/arrow.png";
import arrow2 from '../assets/arrow2.png';
import Most from "../json/most.json"

function most() {
    return (
        <div className='most'>
            <div className="top">
                <hr></hr>
                <h2>Today's</h2>
            </div>
            <div className="center">
                <h1>Most Sales</h1>
                <div className="container">
                    <div className="circle one">
                        <img src={arrow2} alt=''></img>
                    </div>
                    <div className="circle two">
                        <img src={arrow1} alt=''></img>
                    </div>
                </div>
            </div>
            <div className="bottom">
                {Most.map((post) => {
                    return (
                        <div className="cards">
                            <div className='card-top'>
                                <img src={post.img} alt='' className='img'></img>
                                <div className='container'>
                                    <div className='one'>
                                        <img src={post.like} alt=''></img>
                                    </div>
                                    <div className='two'>
                                        <img src={post.quick} alt=''></img>
                                    </div>
                                </div>
                            </div>
                            <div className='card-bottom'>
                                <p>{post.title}</p>
                                <div className='prices'>
                                    <p className='price1'>{post.price1}</p>
                                    <p className='price2'>{post.price2}</p>
                                </div>
                                <img src={post.point} alt=''></img>
                            </div>
                        </div>  
                    )
                },)}
            </div>
            <div className='past'>
                <a href='/'>View All Products</a>
            </div>
        </div>
     );
}

export default most;