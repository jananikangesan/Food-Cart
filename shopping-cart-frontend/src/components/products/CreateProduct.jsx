import React, { useEffect, useState } from 'react';
import '../../css/Style.css';
import { getProduct, saveProducts, updateProduct } from '../../services/ProductService';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const CreateProduct = () => {

    const [name,setName]=useState('');
    const [amt,setAmount]=useState('');
    const [shop,setShop]=useState('');
    const [ftype,setFtype]=useState('');
    const [stock,setStock]=useState(0);
    const [pic,setPic]=useState(null);
    const [latest,setLatest]=useState('');

    const [viewPic,setViewPic]=useState(null);

    const navigator=useNavigate();

    const [errors,setErrors]=useState({
        name:'',
        amt:'',
        shop:'',
        ftype:'',
        stock:'',
        pic:'',
        latest:''
    })

    const {id}=useParams();

    const pageTitle=()=>{
        if(id){
            return "Update Product";
        }
        return "Add Products";
    }

    useEffect(()=>{
        if(id){
            getProduct(id).then((response)=>{
                setName(response.data.name);
                setAmount(response.data.amt);
                setShop(response.data.shop);
                setFtype(response.data.ftype);
                setStock(response.data.stock);
                setLatest(response.data.latest);
                setPic(response.data.pic[0]);

                // Set the image preview if the pic is already saved
                const imageUrl = `/images/${response.data.pic.name}`;
                setViewPic(imageUrl);  // Assuming this URL points to your image endpoint

            }).catch((error)=>{
                console.error(error);
                
            })
        }
    },[id])

    const handleFileChange = (e) => {
        // Ensure a file is selected
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (allowedTypes.includes(file.type)) {
                setPic(file);
                setViewPic(URL.createObjectURL(file));
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    pic: ''
                }));
            }
        }else {
            setPic(null);
            setViewPic(null);
            setErrors((prevErrors) => ({
                ...prevErrors,
                pic: 'Invalid file type. Only JPG, PNG, and GIF are allowed.'
            }));
        }
    };

    const saveOrUpdateProducts=(e)=>{
        e.preventDefault();

        if(validateForm()){
            const formData = new FormData();
            formData.append("image", pic);
            formData.append("name", name);
            formData.append("amt", amt);
            formData.append("shop", shop);
            formData.append("ftype", ftype);
            formData.append("stock",stock);
            formData.append("latest", latest);

            // Debugging: Log formData key-value pairs
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }

            if(id){

                updateProduct(formData,id).then((response)=>{
                    console.log(response.data);
                    Swal.fire({
                        icon: "success",
                        title:"Product is updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigator("/showProducts")
                }).catch((error)=>{
                    console.error(error);

                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Error updating product",
                    });
                })

            }else{

                saveProducts(formData).then((response)=>{
                    console.log(response.data);

                    Swal.fire({
                        icon: "success",
                        title:"Product is added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    
                    navigator('/showProducts');
                }).catch((error) => {
                    console.error("Error saving product:", error);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Error saving product",
                    });
                });
            }
            
        }

    }

    const validateForm=()=>{
        let valid =true;
        const errorsCopy={...errors}

        if(name.trim()){
            errorsCopy.name=''
        }else{
            errorsCopy.name='Name is required'
            valid=false;
        }

        if(amt.trim()){
            if(isNaN(amt)) {
                errorsCopy.amt="Amount must be a valid number"
                valid=false;
            }else{
                errorsCopy.amt=''
            }
        }else{
            errorsCopy.amt="Amount is required"
            valid=false;
        }

        if(shop.trim()){
            errorsCopy.shop=''
        }else{
            errorsCopy.shop="Shop is required"
            valid=false;
        }

        if(ftype.trim()){
            errorsCopy.ftype=''
        }else{
            errorsCopy.ftype="Food Type is required"
            valid=false;
        }

        if(stock.trim()){
            errorsCopy.stock=''
        }else{
            errorsCopy.stock="Stock is required"
            valid=false;
        }

        if(pic){
            errorsCopy.pic=''
        }else{
            errorsCopy.pic="Image is required"
            valid=false;
        }

        if(latest.trim()){
            errorsCopy.latest=''
        }else{
            errorsCopy.latest="Latest is required"
            valid=false;
        }

        setErrors(errorsCopy);

        return valid;

    }
return (
    <div className='d-flex justify-content-center'>
        <div className="card">
            <div className="card-header">
                <h4 className='text-center'>{pageTitle()}</h4>
            </div>
            <div className="card-body">
                <form >
                    <div className="mb-3">
                        <label htmlFor='name' className='form-label'>Name<span className='label-col'>*</span></label>
                        <input type="text" name="name" className={`form-control ${errors.name?'is-invalid':''}`} placeholder='Enter the Product Name' value={name} onChange={(e)=>setName(e.target.value) }/>
                        {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor='amt' className='form-label'>Amount<span className='label-col'>*</span></label>
                        <input type="text" name="amt" className={`form-control ${errors.amt?'is-invalid':''}`} placeholder='Enter the Amount'  value={amt} onChange={(e)=>setAmount(e.target.value)}/>
                        {errors.amt && <div className='invalid-feedback'>{errors.amt}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor='shop' className='form-label'>Shop<span className='label-col'>*</span></label>
                        <input type="text" name="shop" className={`form-control ${errors.shop?'is-invalid':''}`} placeholder='Enter the Shop'  value={shop} onChange={(e)=>setShop(e.target.value)}/>
                        {errors.shop && <div className='invalid-feedback'>{errors.shop}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor='ftype' className='form-label'>Food Type<span className='label-col'>*</span></label>
                        <input type="text" name="ftype" className={`form-control ${errors.ftype?'is-invalid':''}`} placeholder='Enter the Food Type' value={ftype} onChange={(e)=>setFtype(e.target.value)}/>
                        {errors.ftype && <div className='invalid-feedback'>{errors.ftype}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor='stock' className='form-label'>Stock<span className='label-col'>*</span></label>
                        <input type="text" name="stock" className={`form-control ${errors.stock?'is-invalid':''}`} placeholder='Enter the stock' value={stock} onChange={(e)=>setStock(e.target.value)}/>
                        {errors.stock && <div className='invalid-feedback'>{errors.stock}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor='pic' className='form-label'>Upload Image<span className='label-col'>*</span></label>
                        <input type="file" name="pic" className={`form-control ${errors.pic?'is-invalid':''}`} placeholder='Choose the Image..'  onChange={handleFileChange}/>
                        {errors.pic && <div className='invalid-feedback'>{errors.pic}</div>}
                        <div className='showImg'>{viewPic && <img src={viewPic} alt="image" width="100" height="100"/>}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='latest' className='form-label'>Latest<span className='label-col'>*</span></label>
                        <select className={`form-select ${errors.latest?'is-invalid':''}`} value={latest} onChange={(e)=>setLatest(e.target.value)}>
                            <option hidden>Choose Value</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        {errors.latest && <div className='invalid-feedback'>{errors.latest}</div>}
                    </div>

                    <div className="d-grid justify-content-md-end">
                        <button type="submit" className="btn btn-success" onClick={saveOrUpdateProducts}>Save</button>
                    </div>   

                </form> 
               
            </div>
        </div>
        
    </div>
  )
}

export default CreateProduct