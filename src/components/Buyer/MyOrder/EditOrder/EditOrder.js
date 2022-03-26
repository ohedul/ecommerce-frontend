import React from 'react';
import './EditOrder.css';
import OrderItemRow from './OrderItemRow';

const EditOrder = (props)=>{
    return (
        <div className='editorder-container'>
            <h1>OrderId: {props.orderId}</h1>
            <p>Total Amount: {props.totalAmount}</p>
            {props.order.map(order=><OrderItemRow key={order.orderItemId} order={order}/>)}
        </div>
        
    );

};
export default EditOrder;