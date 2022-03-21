import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../App.css';

class NavBar extends Component{



    render() {
        return (
        <div className='Appnavbar'>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
        </Navbar>
        
        </div>
        );
      }

}

export default NavBar;