import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import "../../css/Search.css";
import { deleteProduct, listProducts } from '../../services/ProductService';
import Button from 'react-bootstrap/Button';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import '../../css/Style.css';
import { downloadImage } from '../../services/FileDataService';
import Swal from 'sweetalert2';


const ViewProducts = () => {

  const [product,setProduct]=useState([]);

  const [find,setFind]=useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    listProducts().then((response)=>{
      setProduct(response.data);
    }).catch(error=>{
      console.error(error);
    })
  },[])

  const handleDownload = (filename) => {
    //console.log(filename);
    downloadImage(filename)
      .then((response) => {
        // Create a Blob from the response
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const url = window.URL.createObjectURL(blob);

        // Create a link element to trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;  // Set the file name for download
        link.click();  // Trigger the download

        // Cleanup the URL object after download
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error downloading image:', error);
      });
  };

  const handleDelete=(productId)=>{

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        
        deleteProduct(productId).then((response)=>{
          console.log(response.data);
          Swal.fire({
            title: "Deleted!",
            text: "Product details have been deleted successfully.",
            icon: "success"
          });
          
          setProduct((prevProduct)=>prevProduct.filter((currentProduct)=>currentProduct.id!==productId))
        }).catch((error)=>{
          console.error(error);
        })

      }
    });
    
  }

  const handleUpdate=(productId)=>{
    navigate(`/updateProduct/${productId}`)
  }

  return (
    <div className="container mt-5">
      <h4 className='text-primary'>Search Product</h4>

      <div className='d-flex justify-content-between'>
        
        <form className='col-md-6' >
            <div className="input-group">
            <input type="text" className='form-control' placeholder='Search Text' onChange={(e)=>setFind(e.target.value)}/>
            <CiSearch className='icon'/>
            </div>
        </form>

        <Button variant="success" onClick={()=>{navigate('/createProducts')}}><IoMdAddCircle /></Button>
     
      </div>
      
      <table className='table table-bordered table-striped mt-3'>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Shop</th>
            <th>Food Type</th>
            <th>Amount</th>
            <th>Stock</th>
            <th>Latest</th>
            <th>Image</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.filter((item)=>{
            return find==="" ?item:item.name.toLowerCase().includes(find.toLowerCase()) || item.shop.toLowerCase().includes(find.toLowerCase())|| item.ftype.toLowerCase().includes(find.toLowerCase()) ||item.latest.toLowerCase().includes(find.toLowerCase());
          })
          .map((item,index)=>(
            <tr  key={index}>
              <td>{index +1 }</td>
              <td>{item.name}</td>
              <td>{item.shop}</td>
              <td>{item.ftype}</td>
              <td>Rs {item.amt}</td>
              <td>{item.stock}</td>
              <td>{item.latest}</td>
              <td><img src={`images/${item.pic.name}`} alt={item.name} className='img-style' onClick={()=>handleDownload(item.pic.name)}/></td>
              <td><Button variant="primary"onClick={()=>handleUpdate(item.id)}><FaEdit /></Button></td>
              <td><Button variant="danger" onClick={()=>handleDelete(item.id)}><RiDeleteBin6Line /></Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewProducts