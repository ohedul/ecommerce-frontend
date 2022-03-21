import React from 'react';

const MyOrderRow = (props) => {
    return (
        <tr>
            <td>{props.order.orderId}</td>
            <td>{props.order.totalamount}</td>
            <td>
                <button onClick={()=>props.handleView(props.order)}>View</button>
            </td>
        </tr>
    );
};
export default MyOrderRow;