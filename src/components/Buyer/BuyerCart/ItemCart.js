import React from 'react';
import "./BuyerCart.css";

const ItemCart =(props) => {
    const item = props.itemCart;
    console.log(item);
    return(
        <div className='cart-item-name-price-container'>
        <div className='cart-item-button'>
           <button className='increment-decrement' onClick={()=>props.handleDrecrement(item)}>-</button>
            </div>
            <div className='cart-item-name'>
                {item.name+ " " +item.quantity}
            </div>
            <div className='cart-item-button'>
            <button className='increment-decrement' onClick={()=>props.handleIncrement(item)}>+</button>
            </div>
        
        </div>
    );
    

};

export default ItemCart;