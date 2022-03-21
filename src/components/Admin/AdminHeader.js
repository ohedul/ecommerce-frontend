import React from 'react';
import "./AdminHeader.css";

const AdminHeader = (props) => {
    return (
        <div className="admin-header">
            <nav className='admin-nav'>
                <div className='admin-left'>
                <button className='admin-action-button' onClick={e=>props.handleToggle(true)}>Home</button>
                <button className='admin-action-button' onClick={e=>props.handleToggle(false)}>Orders</button>
                </div>
                <div className='admin-right'>
                    <button className='admin-action-button' onClick={props.handleLogOut}>LOGOUT</button>
                </div>
            </nav>
        </div>
    );
};

export default AdminHeader;