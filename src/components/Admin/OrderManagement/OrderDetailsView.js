import React from 'react';

const OrderDetailsView = (props)=>{
    const items = props.order.orderItems;

    return(
        <div>
            <h1>Id: {props.order.orderId}</h1>
            <h3>Customer Email: {props.order.buyerEmail}</h3>
            <h3>Total Amount: {props.order.totalAmount}</h3>
        </div>
    );
};
export default OrderDetailsView;