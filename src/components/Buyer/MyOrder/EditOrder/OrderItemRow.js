import React from 'react';
import './EditOrder.css';

const OrderItemRow =(props)=>{
    return(
        <div className='order-item-row-container'>
            <p>{props.order.itemName}</p>
            <p>{props.order.quantity}</p>
            <p>{props.order.price}</p>
            <p>{props.order.subTotal}</p>
            <button className='itemedit' >Edit</button>
            <button className='itemdelete' >Delete</button>
        </div>
    );
};
export default OrderItemRow;