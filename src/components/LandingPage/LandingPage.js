import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Login from '../Login/Login';
import BuyerHomePage from '../Buyer/BuyerHomePage';
import AdminHome from '../Admin/AdminHome';
import './LandingPage.css';

class LandingPage extends Component{
    constructor(props){
        super(props);
        this.state = JSON.parse(window.localStorage.getItem('state')) ||{
            redirect: false,
            user: {}
        };
        this.handleHomePage = this.handleHomePage.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleHomePage(user){
        const state = {
            redirect: true,
            user: user
        };
        window.localStorage.setItem('state', JSON.stringify(state));
        this.setState(state);
    }
   
    handleLogOut(){
        window.localStorage.clear();
        this.setState(
            {
                redirect: false,
                user: {}
            }
        );
    }

    render(){
        return(
        <div className='landing-page-container'>
            {console.log(this.state.isAdmin)}
            {this.state.redirect? 
                this.state.user.authority==="ADMIN" ?
                <AdminHome user={this.state.user} handleLogOut ={this.handleLogOut}/>:
                <BuyerHomePage user={this.state.user} handleLogOut ={this.handleLogOut}/>
            
            
            : 
            <div className='landing-page-login'>
             <div className='login-form'>
                     <Login handleHomePage ={this.handleHomePage}/>      
            </div>
            <div className='registration-footer'>
                 <Link to="/register">
                             <button className="primary-button" id="reg_btn"><span>register </span></button>
                 </Link>
            </div>
            </div>}
            
        </div>
        );
    }
}

export default LandingPage;