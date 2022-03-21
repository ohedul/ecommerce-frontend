import React from 'react';
import "./AdminItemCard.css";

const AdminItemCard = (props)=>{

    return(
    <div className='admin-item-card'>

        <div className="img-div">
                <img src={`${process.env.REACT_APP_API_KEY + '/image/'+ props.product.imageName}`} alt="" />
            </div>
            <h1>{props.product.name}</h1>
            <p>{props.product.description}</p>
            <p className='price'>{props.product.price}</p>
            <p><button onClick={(e)=>props.handleDelete(props.product)}>Delete</button></p>
            <p><button>Edit</button></p>
       
            
     

    </div>
    );

};
export default AdminItemCard;