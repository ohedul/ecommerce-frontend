import React, { useEffect, useState } from 'react';
import './MyOrder.css';
import MyOrderRow from './MyOrderRow';

const MyOrder = (props)=>{
    const [orders, setOrders] = useState([]);
    const {user} = props.user;
    useEffect(()=>{
        console.log(props.user);
        fetch("/cart/customer/")
        .then(res => res.json())
        .then(data =>setOrders(data));
    },[]);

    const handleView = (order)=>{};

    return(
        <div className='order-management-container'>
            <div className='orderTable'>
                <table className='customer-order-table'>
                    <thead>
                            <tr>
                                <td>Order Id</td>
                                <td>Total Amount</td>
                                <td>Action</td>
                            </tr>
                    </thead>
                    <tbody>
                    {
                        orders.length >0 &&
                        orders.map(order=> <MyOrderRow key ={order.orderId} order={order} handleView={handleView}/>)
                    }
                    </tbody>
                    
                    
                </table>
            </div>

        </div>
    );

};
export default MyOrder;
