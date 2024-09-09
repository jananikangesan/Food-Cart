import React, { useEffect, useState } from 'react';
import '../../css/Style.css';
import { saveProducts } from '../../services/ProductService';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {

    const [name,setName]=useState('');
    const [amt,setAmount]=useState('');
    const [shop,setShop]=useState('');
    const [ftype,setFtype]=useState('');
    const [pic,setPic]=useState(null);
    const [latest,setLatest]=useState('');
    const [viewPic,setViewPic]=useState(null);

    const [errors,setErrors]=useState({
        name:'',
        amt:'',
        shop:'',
        ftype:'',
        pic:'',
        latest:''
    })

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

    const navigator=useNavigate();

    const submitProducts=(e)=>{
        e.preventDefault();

        if(validateForm()){
            const formData = new FormData();
            formData.append("image", pic);
            formData.append("name", name);
            formData.append("amt", amt);
            formData.append("shop", shop);
            formData.append("ftype", ftype);
            formData.append("latest", latest);

            // Debugging: Log formData key-value pairs
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }


            saveProducts(formData).then((response)=>{
                console.log(response.data);
                navigator('/showProducts');
            }).catch((error) => {
                console.error("Error saving product:", error);
            });
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
                <h4 className='text-center'>Add Products</h4>
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
                        <label htmlFor='pic' className='form-label'>Upload Image<span className='label-col'>*</span></label>
                        <input type="file" name="pic" className={`form-control ${errors.pic?'is-invalid':''}`} placeholder='Choose the Image..'   onChange={handleFileChange}/>
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
                        <button type="submit" className="btn btn-success" onClick={submitProducts}>Save</button>
                    </div>   

                </form> 
               
            </div>
        </div>
        
    </div>
  )
}

export default CreateProduct