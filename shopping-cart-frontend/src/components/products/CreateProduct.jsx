import React, { useState } from 'react';
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


    const handleFileChange = (e) => {
        // Ensure a file is selected
        if (e.target.files && e.target.files.length > 0) {
          setPic(e.target.files[0].name); // Store the file name in the state
        }
      };

    const navigator=useNavigate();

    const submitProducts=(e)=>{
        e.preventDefault();

        const product={name,amt,shop,ftype,pic,latest};
       console.log(product);

        saveProducts(product).then((response)=>{
            console.log(response.data);
            navigator('/showProducts');
        })
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
                        <input type="text" name="name" className='form-control' placeholder='Enter the Product Name'required value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='amt' className='form-label'>Amount<span className='label-col'>*</span></label>
                        <input type="text" name="amt" className='form-control' placeholder='Enter the Amount' required value={amt} onChange={(e)=>setAmount(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='shop' className='form-label'>Shop<span className='label-col'>*</span></label>
                        <input type="text" name="shop" className='form-control' placeholder='Enter the Shop' required value={shop} onChange={(e)=>setShop(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='ftype' className='form-label'>Food Type<span className='label-col'>*</span></label>
                        <input type="text" name="ftype" className='form-control' placeholder='Enter the Food Type'required value={ftype} onChange={(e)=>setFtype(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='pic' className='form-label'>Upload Image<span className='label-col'>*</span></label>
                        <input type="file" name="pic" className='form-control' placeholder='Choose the Image..' required  onChange={handleFileChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='latest' className='form-label'>Latest<span className='label-col'>*</span></label>
                        <select className='form-select' required value={latest} onChange={(e)=>setLatest(e.target.value)}>
                            <option hidden>Choose Value</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
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