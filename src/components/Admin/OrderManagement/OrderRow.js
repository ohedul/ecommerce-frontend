import React from 'react';

const OrderRow = (props) => {
    return (
        <tr>
            <td>{props.order.orderId}</td>
            <td>{props.order.buyerEmail}</td>
            <td>{props.order.totalamount}</td>
            <td>
                <button onClick={()=>props.handleView(props.order)}>View</button>
                <button onClick={()=>props.handleAccept(props.order)}>Accept</button>
                <button onClick={()=>props.handleReject(props.order)}>Reject</button>
            </td>
        </tr>
    );
};
export default OrderRow;