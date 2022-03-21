import React, { useEffect, useState } from 'react';
import { Button, Input } from 'reactstrap';
import  './Items.css';
import AdminItemCard from './AdminItemCard/AdminItemCard';

const Items = ()=>{
    const [products, setProducts] = useState([]);
    const [name, setName] = useState(['']);
    const [description, setDescription] = useState(['']);
    const [price, setPrice] = useState([0]);
    const [file, setFile] = useState(['']);
    const [imageUrl, setImageUrl] = useState(['']);

    useEffect(()=>{
        fetch("/items")
        .then(res => res.json())
        .then(data =>{
            setProducts(data);
          

        });
    },[]);

   function changeName(e) { 
       var tname = e.target.value;
       setName(tname);

   };
   function changeDescription(e) {
    setDescription(e.target.value);

};
function changePrice(e) {
    setPrice(e.target.value);

};

const handleDelete = (item)=>{
    fetch("/items/delete/"+ item.itemId)
    .then(res => res.json())
    .then(data =>{
        setProducts(data);
      

    });
};

function handleImageChange(e){
    e.preventDefault();
  
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
        setFile(file);
        setImageUrl(reader.result);
    }

    reader.readAsDataURL(file);
};

async function handleSubmit (){
    const formData  = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('file', file);
    const requestBody = {
        method:  'POST',
        body: formData
      };
      console.log(requestBody);
      await fetch('/items/upload',requestBody)
      .then(res=> res.json())
      .then(data =>{
          setProducts(data);
          setName(['']);
          setDescription(['']);
          setPrice(['']);
          setFile(['']);
          setImageUrl(['']);
    })
      .catch(error=> console.log(error));
    
};
    return (
        <div className='admin-home-container'>
          
            

        <div className='admin-edit-form'>
                <div className="previewComponent">
                <div className="imgPreview">
                        <img src={imageUrl} alt=''/>
                    </div>

                    <input className="fileInput" 
                    type="file" 
                    onChange={handleImageChange} />
                
                    
                </div>

            <div class="input-box">
                    <span class="details">Item Name</span>
                        <Input type="text" name="name" value={name}
                    onChange={changeName} autoComplete="name" />
                </div>
                <div class="input-box">
                    <span class="details">Description</span>
                        <Input type="text" name="description" value={description}
                    onChange={changeDescription} />
                </div>
                <div class="input-box">
                    <span class="details">Price</span>
                    <Input type="number" name="price" value={price}
                    onChange={changePrice} />
                </div>

                <div class="button">
                    <button class = "button-input" onClick={handleSubmit} >Save</button>
                </div>



            </div>


           
            <div className='admin-items-show'>
                {
                    products.map(product => <AdminItemCard key={product.itemId} product={product} handleDelete={handleDelete} />)
                }
            </div>

        </div>
    );


};
export default Items;