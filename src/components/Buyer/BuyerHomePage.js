import React, { Component } from 'react';
import BuyerHeader from './BuyerHeader';
import BuyerHome from './BuyerHome';
import MyOrder from './MyOrder/MyOrder';


class BuyerHomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            toggle: true,
            user: props.user
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(toggle){
        this.setState({
            toggle: toggle
        });
    }

    render(){
        return(
            <div>
                <BuyerHeader user ={this.props.user} handleLogOut = {this.props.handleLogOut} handleToggle={this.handleToggle}/>
                { this.state.toggle?
                <BuyerHome user = {this.state.user}/>:
                <MyOrder user={this.state.user}/>
            }
            </div>
        );
    }
}
export default BuyerHomePage;