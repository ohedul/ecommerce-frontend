import React from 'react';
import './BuyerHeader.css'

const BuyerHeader = (props) => {
    return (
        <div className="buyer-header">
            <nav className='buyer-nav'>
                <div className='left-nav'>
                    <button className='buyer-button' onClick={(e)=>props.handleToggle(true)}>Home</button>
                    <button className='buyer-button' onClick={(e)=>props.handleToggle(false)}>My Order</button>
                </div>
                <div className='right-nav'>
                    <h1 className='buyer-name'>{props.user.fullName}</h1>
                    <button className='buyer-button' onClick={props.handleLogOut}>LOGOUT</button>
                </div>
            </nav>
        </div>
    );
};

export default BuyerHeader;