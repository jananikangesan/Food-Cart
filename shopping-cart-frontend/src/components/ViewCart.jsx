import React, { useContext, useEffect, useState } from 'react';
import "../css/ViewCart.css";
import { cartContext } from './cartContext';
import { BiPlusCircle } from "react-icons/bi";
import { FiMinusCircle } from "react-icons/fi";
import { FaPrint } from "react-icons/fa6";

import Button from 'react-bootstrap/Button';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


const ViewCart = () => {

    const [total,setTotal]=useState(0);

    const {cart,setCart}=useContext(cartContext);

    const [count,setCount]=useState({});

    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>{
            const productCount=count[curr.id]||1;
            return acc+parseFloat(curr.amt)*productCount;
        },0))
        
    },[cart,count]);
    
    const removeCart=(productId)=>{
        setCart(cart.filter((c)=>c.id!==productId));
      }

    const handleIncrease=(id)=>{

        setCount((prev)=>({
            ...prev,
            [id]:Math.max((prev[id] || 1)+1,1)
        }));
    }

    const handleDecrease=(id)=>{
        setCount((prev)=>({
            ...prev,
            [id]:Math.max((prev[id] || 1)-1,1)
        }));
    }

    const generatePDF = () => {
        const doc = new jsPDF();

        // Add the logo image
        const logoUrl = '/food-cart-logo.jpg'; 
        doc.addImage(logoUrl, 'JPEG', 20, 10, 30, 30);


        // Add date and time
        doc.setFontSize(10);
        const date = new Date().toLocaleString();
        doc.text(`Date: ${date}`, 20, 50); // Adjust x, y as needed

        
        // Add invoice image
        const invoiceUrl = '/invoice.png'; 
        doc.addImage(invoiceUrl, 'PNG',100, 10, 30, 30); 


        // Define table columns and data
        const columns = [
            { header: 'Product', dataKey: 'name' },
            { header: 'Unit Price', dataKey: 'unitPrice' },
            { header: 'Quantity', dataKey: 'quantity' },
            { header: 'Amount', dataKey: 'amount' }
        ];

        const rows = cart.map(product => {
            const productCount = count[product.id] || 1;
            const unitPrice = parseInt(product.amt);
            const amount = unitPrice * productCount;
            return {
                name: product.name,
                unitPrice: `Rs ${unitPrice}`,
                quantity: productCount,
                amount: `Rs ${amount}`
            };
        });

        // Add table to PDF
        doc.autoTable({
            columns: columns,
            body: rows,
            startY: 60, // Start position after the images
            theme: 'striped',
        });

        // Add total amount
        doc.setFontSize(14);
        doc.text(`Total Amount Rs: ${total}`, 135, doc.lastAutoTable.finalY + 10);

         // Add a paragraph
         doc.setFontSize(12);
         doc.text('Thank you for ordering from us!.', 70, 280, { maxWidth: 180 }); // Adjust x, y, and maxWidth as needed

         doc.setFontSize(12);
         doc.text('We appreciate your business and hope you enjoy your meal.',40, 284, { maxWidth: 180 });
        // Save PDF
        doc.save('invoice.pdf');
    };


  return (
    <>
        <h1 className='cart-heading'>Cart Products</h1>
        <div className="cart-container">
            {
                cart.map((product)=>(
                    <div className="cart-product" key={product.id}>
                        <div className="img">
                            <img src={`images/${product.pic.name}`} alt="image"/>
                        </div>
                   
                        <div className="cart-product-details">

                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"  onClick={()=>removeCart(product.id)}/>
                                
                            <h3>{product.name}</h3>
                            <p>Price Rs: {product.amt*(count[product.id]||1)}</p>
                            <div className='cart-product-count'>
                                <FiMinusCircle size={28} color='#838524' onClick={()=>handleDecrease(product.id)} className="button-click"/>
                                <p>{count[product.id]||1}</p>
                                <BiPlusCircle  size={30} color='#838524' onClick={()=>handleIncrease(product.id)}  className="button-click"/>
                            </div> 
                        </div>
                    </div>
                ))
            }
            
        </div>
        <h2 className='cart-amt'>Total Amount Rs: {total}</h2>
        <div className="button-container">
          {total>0 &&  <Button variant="secondary" onClick={generatePDF} className='print-button'><FaPrint /> Invoice</Button>}
        </div>
    </>
  )
}

export default ViewCart