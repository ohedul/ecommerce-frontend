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
        const checkAlreadyAdded = this.state.cart.find(addedProduct => item.itemId === addedProduct.item.itemId);
        if(!checkAlreadyAdded){
            const price =  item.price;
            const orderDetails= {
                item: item,
                quantity : 1,
                subTotal: price
            };
            const newCart = [...this.state.cart, orderDetails];
            this.setState({
                cart: newCart
            });
        } else {
            const quantity = checkAlreadyAdded.quantity +1;
            const price =  item.price;
            checkAlreadyAdded["quantity"] = quantity;
            checkAlreadyAdded["subTotal"] = quantity*price;
            const updatedCart = [...this.state.cart];
            this.setState({
                cart: updatedCart
            });
        }
    }

    handleIncrement = (item) =>{
        const addedItem = this.state.cart.find(addedItem => item.itemId === addedItem.item.itemId);
        console.log("increment");
        const quantity = addedItem["quantity"] +1;
        addedItem["quantity"] = quantity;
        addedItem["subTotal"] = quantity*item.price;
        const updatedCart = [...this.state.cart];
        this.setState({
            cart: updatedCart
        });
        console.log(item);
    }

    handleDrecrement = (item) =>{
        const addedItem = this.state.cart.find(addedItem => item.itemId === addedItem.item.itemId);
        console.log("decrement");
        const quantity = addedItem["quantity"] -1;
        addedItem["quantity"] = quantity;
        addedItem["subTotal"] = quantity*item.price;
        const updatedCart = [...this.state.cart];
        this.setState({
            cart: updatedCart
        });
        console.log(item);
    }

     async handleOrder(){
        const itemIds = this.state.cart.map((cart)=>{
            let items = {
                itemId: cart.item.itemId,
                quantity: cart.quantity
            }
            return items;
        });
        const requestBody = {
            method:  'POST',
            body: JSON.stringify(itemIds)
          };
          console.log(itemIds);
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