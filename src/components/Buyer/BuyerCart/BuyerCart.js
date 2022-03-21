import React from 'react';
import "./BuyerCart.css";
import ItemCart from './ItemCart';

const BuyerCart = (props) => {
    const {cart} = props;

    const handleIncrement = (item) =>{
       props.handleIncrement(item);
    }

    const handleDrecrement = (item) =>{
        props.handleDrecrement(item);
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Items ordered: {cart.reduce((prev, curr)=>prev + curr.quantity, 0)}</h3>
            { cart.map(cart=><ItemCart key={cart.itemId} itemCart={cart} handleIncrement = {handleIncrement} handleDrecrement={handleDrecrement}/>)}
            <h3>Order Total: ${cart.reduce((prev, curr)=>prev + (curr.quantity*curr.price), 0)}</h3>
            <button onClick={props.saveOrder}>Save</button>
        </div>
    );
};
export default BuyerCart;