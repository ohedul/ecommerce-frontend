import React, { useState } from 'react';
import { Form, Input } from 'reactstrap';
import './Registration.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Registration =() =>{
    const [firstname , setFirstname] =useState('');
    const [lastName , setLastName] =useState('');
    const [email , setEmail] =useState('');
    const [password , setPassword] =useState('');
    const navigate = useNavigate();
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isLoggedIn: false,
    //         userForm: {
    //             firstname: '',
    //             lastName: '',
    //             email: '',
    //             password: ''
    //         }
    //     };
        

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);

    // }

   const  handleFirstName = (e)=>{
        console.log(e.target.name);
        const name = e.target.name
        setFirstname(e.target.value);
    };

    const  handleLastName = (e)=>{
        console.log(e.target.name);
        const name = e.target.name
        setLastName(e.target.value);
    };

    const  handleEmail = (e)=>{
        console.log(e.target.name);
        const name = e.target.name
        setEmail(e.target.value);
    };

    const  handlePassword = (e)=>{
        console.log(e.target.name);
        const name = e.target.name
        setPassword(e.target.value);
    };

    const  handleSubmit = async (event) =>{
        event.preventDefault();
        const userForm = {
            'firstName': firstname,
            'lastName': lastName,
            'email': email,
            'password': password
        };
    
        await fetch('/register', {
            method:  'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userForm),
          })
          .then(response=>{
              if(response.ok){
                  return response.json();
              }else{
                  throw new Error("could not save")
              }
          }
          ).then(data=>{
            window.localStorage.setItem('state', JSON.stringify({
                redirect: true,
                user: data
            }));
            navigate('/');
          }
            
          )
          .catch(error=> console.log(error));
      };




  
        return(
            <div className='registration-form-container'>
                <div class="container">
                <div class="title">Registration</div>
                    <div class="content">
                        <Form onSubmit={handleSubmit}>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">First Name</span>
                                        <Input type="text" name="firstName" id="firstName" value={firstname || ''}
                                    onChange={handleFirstName} autoComplete="firstName" />
                                </div>
                                <div class="input-box">
                                    <span class="details">Last Name</span>
                                        <Input type="text" name="lastName" id="lastName" value={lastName || ''}
                                    onChange={handleLastName} autoComplete="lastName" />
                                </div>
                                <div class="input-box">
                                    <span class="details">Email</span>
                                    <Input type="text" name="email" id="email" value={email || ''}
                                    onChange={handleEmail} autoComplete="email" />
                                </div>
                                <div class="input-box">
                                    <span class="details">Password</span>
                                    <Input type="password" name="password" id="password" value={password || ''}
                                    onChange={handlePassword} />
                                </div>
                                
                            </div>
                        
                    <div class="button">
                    <Input type="submit" value="Register" />
                    </div>
                    <Link to="/">
                                   <span>Allready have an account? Login </span>
                        </Link>
                    </Form>
                    </div>
                </div>



            </div>
            
        );
 
};
export default Registration;