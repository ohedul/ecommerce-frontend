import React, { Component } from 'react';
import './BuyerHome.css';
import ItemCard from './ItemCard/ItemCard';
import BuyerCart from './BuyerCart/BuyerCart';

class BuyerHome extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : [],
            cart :[],
            user: props.user
        };
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDrecrement = this.handleDrecrement.bind(this);
        this.handleOrder = this.handleOrder.bind(this);
    }
    componentDidMount(){
        fetch('/items')
        .then(res=> res.json())
        .then(data=>this.setState({
            items: data
        }))
        .catch(error=> console.log(error));
    }

    handleAddToCart = (item) =>{
        const checkAlreadyAdded = this.state.cart.find(addedProduct => item.itemId === addedProduct.itemId);
        if(!checkAlreadyAdded){
           item["quantity"] = 1;
            const newCart = [...this.state.cart, item];
            this.setState({
                cart: newCart
            });
        } else {
            checkAlreadyAdded["quantity"] += 1;
            const updatedCart = [...this.state.cart];
            this.setState({
                cart: updatedCart
            });
        }
    }

    handleIncrement = (item) =>{
        const addedItem = this.state.cart.find(addedItem => item.itemId === addedItem.itemId);
        addedItem["quantity"] += 1;
        const updatedCart = [...this.state.cart];
        this.setState({
            cart: updatedCart
        });
    }

    handleDrecrement = (item) =>{
        const addedItem = this.state.cart.find(addedItem => item.itemId === addedItem.itemId);
        addedItem["quantity"] -= 1;
        const updatedCart = [...this.state.cart];
        this.setState({
            cart: updatedCart
        });
    }

     async handleOrder(){
        const cartDto = [];
        for(var i=0; i<this.state.cart.length; i++){
            const val = this.state.cart[i];
            let arr = [
                val.itemId,
                val.quantity
            ];
            cartDto.push(arr);
        }
        const customerId = this.state.user.userId;
        const requestBody = {
            method:  'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(cartDto)
          };
       await  fetch('/cart/add/'+customerId,requestBody)
            .then(res=> res.json())
            .then(data =>this.setState({
                cart: []
            }))
            .catch(error=> console.log(error));
    }
    render(){
        return(
            <div className="buyer-home-container">
            <div className="item-container">
                {
                    this.state.items.map(item => <ItemCard key={item.itemId} item={item} handleAddToCart={this.handleAddToCart}/>)
                }
            </div>
            <div className="cart-container">
                <BuyerCart cart = {this.state.cart} handleIncrement ={this.handleIncrement} handleDrecrement ={this.handleDrecrement} saveOrder ={this.handleOrder}/>
            </div>
        </div>
        );
    }
}
export default BuyerHome;