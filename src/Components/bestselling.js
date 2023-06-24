import React from 'react';
import '../Styles/bestselling/bestselling.css';
import Bestselling from '../json/bestselling.json';


function bestselling() {
    return (
        <div className='bestselling'>
            <div className="top">
                <hr></hr>
                <h2>Categories</h2>
            </div>
            <div className="center">
                <h1>Best Selling Products</h1>
                <button>View All</button>
            </div>
            <div className="bottom">
                {Bestselling.map((post) => {
                    return (
                        <div className="cards">
                            <div className='card-top'>
                                <img src={post.img}  alt='' className='img'></img>
                                <div className='container'>
                                    <div className='one'>
                                        <img src={post.like} alt='' ></img>
                                    </div>
                                    <div className='two'>
                                        <img src={post.quick} alt='' ></img>
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
        </div>
    );
}

export default bestselling;