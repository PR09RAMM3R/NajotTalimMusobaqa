import React from 'react';
import '../Styles/New/new.css';
import ps5 from '../assets/ps5.png';
import woman from '../assets/woman.png'
import amazon from '../assets/amazon.png';
import gucci from '../assets/gucci.png';


function newpage() {
    return (
        <div className='new'>
            <div className="top">
                <hr></hr>
                <h2>Featured</h2>
            </div>
            <div className="center">
                <h1>New Arrival</h1>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <div className='left-container'>
                        <img src={ps5} alt=''></img>
                        <h3>PlayStation 5</h3>
                        <p>Black and White version of the PS5<br></br> coming out on sale.</p>
                        <a href='/'>Shop Now</a>
                    </div>
                </div>
                <div className='right'>
                    <div className='top'>
                        <div className='container'>
                            <img src={woman} alt='' height={250}></img>
                            <h3>Women's Collections</h3>
                            <p>Featured woman collections that<br></br> give you another vibe..</p>
                            <a href='/'>Shop Now</a>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='first'>
                            <div className='con'>
                                <img src={amazon} alt=''></img>
                            </div>
                            <h3>Speakers</h3>
                            <p>Amazon wireless speakers</p>
                            <a href='/'>Shop Now</a>
                        </div>
                        <div className='second'>
                            <div className='con'>
                                <img src={gucci} alt=''></img>
                            </div>
                            <h3>Perfume</h3>
                            <p>GUCCI INTENSE OUD EDP</p>
                            <a href='/'>Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default newpage;