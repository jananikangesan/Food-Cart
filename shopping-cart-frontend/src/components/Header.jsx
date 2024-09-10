import React, { useContext } from 'react'; 
import {Link} from 'react-router-dom';
import "../css/Header.css";
import { cartContext } from './cartContext';

import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Header = () => {

  const {cart,setCart}=useContext(cartContext);

  return (
    <div className='navbar'>
        <div className="logo"><img src='food-cart-logo.jpg' alt="Logo"/></div>
        <ul>
            <li>
                <Link to={"/"}><FaHome size={35}/></Link>
            </li>
            <li>
                <Link to={"/Cart"}><span className='cart-count'>{cart.length}</span><FaShoppingCart size={35}/></Link>
            </li>
            <li>
                <Link to={"/Search"}><FaSearch size={35}/></Link>
            </li>
            <li>
                <Link to={"/showProducts"}><FaArrowAltCircleRight size={35}/></Link>
            </li>
        </ul>
    </div>
  )
}

export default Header