import React from "react";
import "../Styles/categories/categories.css";
import Categories from "../json/categories.json";
import arrow1 from "../assets/arrow.png";
import arrow2 from "../assets/arrow2.png";


function categories() {
    return (
        <div className="categories">
            <div className="top">
                <hr></hr>
                <h2>Categories</h2>
            </div>
            <div className="center">
                <h1>Browse By Category</h1>
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
                {Categories.map((post) => {
                    return (
                        <div className="cards" >
                            <img src={post.img} alt=''></img>
                            <p>{post.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default categories;
