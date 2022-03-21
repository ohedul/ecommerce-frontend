import React, { useEffect, useState } from 'react';
import OrderDetailsView from './OrderDetailsView';
import "./OrderManagement.css";
import OrderRow from './OrderRow';

const OrderManagement = () =>{
    const [orders, setOrders] = useState([]);
    const [selectedorder, setSelectedOrder] = useState({});
    useEffect(()=>{
        fetch("/cart")
        .then(res => res.json())
        .then(data =>setOrders(data));
    },[]);

    const handleView =(order)=>{
        setSelectedOrder(order);
    }
    const handleAccept =(order)=>{
        fetch("/cart/accept/"+ order.orderId);
    }
    const handleReject =(order)=>{
    }

    return(
        <div className='order-management-container'>
            <div className='orderTable'>
                <table className='admin-order-table'>
                    <thead>
                            <tr>
                                <td>Order Id</td>
                                <td>Customer Email</td>
                                <td>Total Amount</td>
                                <td>Action</td>
                            </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map(order=> <OrderRow key ={order.orderId} order={order}
                        handleView={handleView} 
                        handleAccept={handleAccept} 
                        handleReject={handleReject}/>)
                    }
                    </tbody>
                    
                    
                </table>
            </div>

        </div>
    );
};
export default OrderManagement;