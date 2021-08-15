import React from 'react';
import './Home.css';
import first from '../../images/first.png';

const Home = () => {
    return (
        <div className="full">
           <div className="first-container">
               <div className="first-left">
                   <div className="first-left-details">
                        <h1>Miss Kottu</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                   </div>
                   <div className="first-left-image">
                       <img src={first} alt="" />
                   </div>
               </div>
               <div className="first-right">
                    <h2>left</h2>
               </div>
           </div>
        </div>
    )
}

export default Home
