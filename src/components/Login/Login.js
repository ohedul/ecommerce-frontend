import React, { Component } from 'react';
import { Button, Form, Input, Label } from 'reactstrap';
import './Login.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            errorLogin: false,
            userLogin: {
                email: '',
                password: ''
            },
            user: {}

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let userLogin = {...this.state.userLogin};
        userLogin[name] = value;
        this.setState({userLogin});
    }

    async handleSubmit(event){
        event.preventDefault();

        const loginForm = this.state.userLogin;

        const requestBody = {
            method:  'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginForm),
          };
          await fetch('/login',requestBody)
          .then(response=> {
            if(response.ok){
                return response.json();
            } else{
                throw new Error("invalid transaction");
            }
          })
          .then(data=>{
              if(data){
                  this.props.handleHomePage(data);
              }
          })
          .catch(error=>{
              console.log(error);
                this.setState({
                    errorLogin: true,
                    userLogin:{
                    email: '',
                    password: ''
                    }
                })
          });
    }


    render(){
        return (<div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-title">
                            <h2>LOGIN</h2>
                        <div className="underline-title"></div>
                    </div>
                    <Form onSubmit={this.handleSubmit} className="form">
                                        
                                            <Label for="email"> Email</Label>
                                            <Input type="text" name="email" id="email" value={this.state.userLogin.email || ''}
                                                onChange={this.handleChange} autoComplete="email" className="form-content"/>
                                    
                                                    <div className="form-border"></div>
                                        <Label for="password">Password</Label>
                                            <Input type="password" name="password" id="password" value={this.state.userLogin.password || ''}
                                                onChange={this.handleChange} className="form-content"/>

                                            <div className="form-border"></div>
                                        {this.state.errorLogin && <div><p>Error happened</p></div>}
                                        
                                                <Button id="submit-btn" color="primary" type="submit">Login</Button>
                                        
                        </Form>
                </div>
            </div>

                    
    </div>);
    }

}
export default Login;