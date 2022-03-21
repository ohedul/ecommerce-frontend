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
        const cartDto = this.state.cart.map((cart)=>{
            let items = {
                "itemId": cart.itemId,
                "quantity": cart.quantity
            }
            return items;
        });

        const requestBody = {
            method:  'POST',
            body: JSON.stringify(cartDto)
          };
       await  fetch('/cart/add/'+this.state.user.userId,requestBody)
            .then(res=> res.json())
            .then(data =>console.log(data))
            .catch(error=> console.log(error));
    }
    render(){
        return(
            <div className="buyer-home-container">
                {console.log(this.state.user)}
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