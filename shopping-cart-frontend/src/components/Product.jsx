import React, { useContext } from 'react';
import "../css/Product.css";
import { cartContext } from './cartContext';
import Popup from 'reactjs-popup';

const Product = ({product}) => {

  const {cart,setCart}=useContext(cartContext);

  const name=product.name.length>21 ?product.name.substring(0,20)+"..  ":product.name;

  // Check if the product is already in the cart
  const isInCart = cart.some((cartItem) => cartItem.id === product.id);
  
  const addCart=()=>{
    setCart([...cart,product]); 
  }
  const removeCart=()=>{
    setCart(cart.filter((c)=>c.id!==product.id));
  }
  return (
    <div className='product'>
       <div className="img">
        <Popup trigger={
           <img src={`${product.pic}`} alt={product.name}/>
        } position="center">

          <div className='pop-up'>
            <img src={`${product.pic}`} alt={product.name}/>
            <h4>{product.name}</h4>
            <p>Shop: {product.shop}</p>
            <p>Food Type: {product.ftype}</p>
            <p>Price Rs:{product.amt}</p>
          </div>

        </Popup>

       </div>

       <div className="details">
        <h4>{name}</h4>
        <p>Price Rs:{product.amt}</p>
        {isInCart?<button className='btnRemove' onClick={removeCart}>Remove from Cart</button>: <button onClick={addCart}>Add to Cart</button>}
       </div>
    </div>
  )
}

export default Product