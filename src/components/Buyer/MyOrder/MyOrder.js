import React, { useEffect, useState } from 'react';
import './MyOrder.css';
import MyOrderRow from './MyOrderRow';
import EditOrder from './EditOrder/EditOrder';

const MyOrder = (props)=>{
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState([{
        orderItems: [],
        selected: false,
        orderId: '',
        totalAmount:''

    }]);
    useEffect(()=>{
        fetch("/cart/customer/"+ props.user.userId)
        .then(res => res.json())
        .then(data =>setOrders(data));
    },[]);

    const handleView = (order)=>{
        const selectedOrder = {
            orderItems: order.orderItems,
            selected: true,
            orderId: order.orderId,
            totalAmount:order.totalamount
        };
        setSelectedOrder(selectedOrder);
    };

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
            <div className='order-edit-part'>
                    {selectedOrder.selected && <EditOrder order={selectedOrder.orderItems}
                    orderId={selectedOrder.orderId}
                    totalAmount={selectedOrder.totalAmount}/>}
            </div>

        </div>
    );

};
export default MyOrder;
