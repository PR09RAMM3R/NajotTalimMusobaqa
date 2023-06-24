import React from 'react';
import '../Styles/Explore/explore.css';
import Explore from "../json/explore.json";
import Explore2 from "../json/explore2.json";
import arrow1 from '../assets/arrow.png';
import arrow2 from '../assets/arrow2.png';

function explore() {
    return (
        <div className='explore'>
                <div className="top">
                    <hr></hr>
                    <h2>Categories</h2>
                </div>
                <div className="center">
                    <h1>Best Selling Products</h1>
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
                <div className='first'>
                    {Explore.map((post) => {
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
                                    </div>
                                    <img src={post.point} alt=''></img>
                                </div>
                            </div>
                        )
                    },)}
                </div>
                <div className='second-bottom'>
                    {Explore2.map((post) => {
                        return (
                            <div className='first'>
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
                                        </div>
                                        <img src={post.point} alt=''></img><br></br>
                                    </div>
                                </div>
                            </div>
                        )
                    },)}
                </div>
            </div>
        </div>
    );
}

export default explore;