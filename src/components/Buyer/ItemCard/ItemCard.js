import React from 'react';
import"./ItemCard.css";

const ItemCard = (props)=>{
    const{name, description, imageName, price,stock} = props.item;
    return (
        <div className="item">
            <div className="img-div">
                <img src={`${process.env.REACT_APP_API_KEY + '/image/'+ imageName}`} alt="" />
            </div>
            <div className="item-details">
                <h3 className="item-name">{name}</h3>
                <p><small> {description}</small></p>
                <h3>${price}</h3>
                <p>Only {stock} left in stock-order soon</p>
                <button className="default-btn" onClick={()=>props.handleAddToCart(props.item)}>add to cart</button>
            </div>
        </div>
    );
};
export default ItemCard;