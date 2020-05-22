import React, { Component } from 'react'

import NavBar from '../components/navBar';

import Login from '../components/login';
import Register from '../components/register';
import Dashboard from '../components/dashboard';


export class landing extends Component {
    constructor(props){
        super(props);
        this.state = {login : true, dashboard: false};
        this.getRegisterFunc = this.getRegisterFunc.bind(this);
    }

    getRegisterFunc = (data_from_login) => {
        console.log(data_from_login);
        this.setState({login : data_from_login}); 
        if(!data_from_login) {
            this.setState({dashboard: data_from_login});
        }
        // const {show} = this.state;
        // this.setState({show : !show});
    }
    render() {
        return (
            <div>                
                <NavBar functionCallFromParent = {this.getRegisterFunc}/>
                {!this.state.dashboard && this.state.login && <Dashboard/> }
                {this.state.login && !this.state.dashboard && <Login functionCallFromParent = {this.getRegisterFunc} />}
                {!this.state.login && !this.state.dashboard && <Register functionCallFromParent = {this.getRegisterFunc} LandingPageState= {this.state.login}/>}
            </div>
        )
    }
}
export default landing
