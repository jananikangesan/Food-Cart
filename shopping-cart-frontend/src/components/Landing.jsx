import React from 'react'
import '../css/Landing.css'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";
import { FaShop } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Landing = () => {
  return (
    <div className="landing-container">
        <div className="landing-header">
            <div className="logo">
                <img src='food-cart-logo.jpg' alt="Logo"/>
            </div> 
            <ul>
                <li>
                   <button className='btn-align'><Link to={"/login"} >Login</Link></button> 
                </li>
            </ul>
           
        </div>
        <div className="landing-body">

            <div className="row row1">
                <hr/>
                <div className="col-4">
                    <img src='pngtree.png' alt="food" className='foods-img'/>
                </div>
                <div className="col-4 p-2">
                    <h1 className='heading'>
                        Order food online from your favourite local restaurants.
                    </h1>
                    <p className='para'>Freshly made food delivered to your door.</p>
                </div>
                <div className="col-4 p-2">
                    <img src='food.png' alt="food" className='food-img'/>
                </div>
            </div>

            <div className="row row2">
               
                <div className="col-5 p-5">
                    <h1 className='heading2'>Explore your favourite city's food.</h1>
                    <p className='para2'>Fastest food delivery service takes customer satisfaction to new heights with lightning-quick deliveries.</p>
                    <button className='explore'>Explore <FaLongArrowAltRight size={35} /></button>
                </div>
                <div className="col-2">

                </div>
                <div className="col-3 p-2">
                    <img src='Delivery-Scooter-PNG-Picture.png' alt="food-delivery" className='food-delivery'/>
                </div>

            </div>
            <div className="row row3">
                <div className="col-3 p-2 m-5">
                    <div className="card"style={{ backgroundColor: '#f3f5ed', width: '20rem'}} >
                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: 'center' }}><IoLocationSharp size={50} color='green'/></h5>
                            <h6 className="card-subtitle mb-2 text-muted" style={{fontWeight:"bold"}}>Wide selection of Restaurants</h6>
                            <p className="card-text">Explore a variety of restaurants offering different cuisines. Whether you're craving pizza, sushi, or vegan options, we've got something for everyone!</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 p-2 m-5">
                    <div className="card" style={{ backgroundColor: '#f3f5ed', width: '20rem'}}>
                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: 'center' }}><FaShop size={50} color='green'/></h5>
                            <h6 className="card-subtitle mb-2 text-muted" style={{fontWeight:"bold"}}>Easy ordering Process</h6>
                            <p className="card-text">Our user-friendly platform allows you to place an order in just a few clicks. Enjoy a seamless and hassle-free experience from start to finish.</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 p-2 m-5">
                    <div className="card" style={{ backgroundColor: '#f3f5ed', width: '20rem'}}>
                        <div className="card-body">
                            <h5 className="card-title"style={{ textAlign: 'center' }}><BsFillClockFill size={50} color='green'/></h5>
                            <h6 className="card-subtitle mb-2 text-muted" style={{fontWeight:"bold"}}>Fast delivery within 20 mins</h6>
                            <p className="card-text">Get your food delivered hot and fresh in under 20 minutes! Our delivery team ensures your meal arrives quickly and on time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing