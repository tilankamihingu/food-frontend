import React from 'react';
import './Home.css';
import first from '../../images/banner.png';

const Home = () => {
    return (
        <div className="full">
           <div className="first-container">
               <div className="first-left">
                   <div className="first-left-details">
                        <h1>Miss Kottu</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt libero, dolorum at deleniti molestiae accusamus quasi quas dolorem nobis quod ipsa sint perspiciatis! Pariatur laudantium cupiditate qui quibusdam ducimus. Accusantium!</p>
                        <button className="first-btn">Watch Items</button>
                   </div>
                   <div className="first-left-image">
                       <img src={first} alt="" />
                   </div>
               </div>
               <div className="first-right">
                  
               </div>
           </div>
        </div>
    )
}

export default Home
