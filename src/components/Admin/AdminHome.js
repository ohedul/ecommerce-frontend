import React, { Component } from 'react';
import AdminHeader from './AdminHeader';
import Items from './Home/Items'
import OrderManagement from './OrderManagement/OrderManagement';

class AdminHome extends Component{
    constructor(props){
        super(props);
        this.state={
            toggle: true
        };
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
                <AdminHeader handleLogOut = {this.props.handleLogOut} handleToggle ={this.handleToggle}/>
                {this.state.toggle?
                <Items/>:
                <OrderManagement/>
            }
                
            </div>
        );
    }
}
export default AdminHome;