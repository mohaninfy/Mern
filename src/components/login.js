import React, { Component } from 'react';
import axios from 'axios';
import M from 'materialize-css';

export class login extends Component {
  constructor(props) {
    super(props);
    this.state = {showRegister: false,
      email: '',
      password: ''
    };
    this.RegisterFunc = this.RegisterFunc.bind(this);
    this.LoginFunc = this.LoginFunc.bind(this);
    this.handleChangeemail = this.handleChangeemail.bind(this);
    this.handleChangepass = this.handleChangepass.bind(this);
  }
  handleChangeemail = (event) =>{
    this.setState({email : event.target.value});
  }
  handleChangepass = (event) =>{
    this.setState({password : event.target.value});
  }

  RegisterFunc = (e) =>{
    e.preventDefault();
    this.props.functionCallFromParent(this.state.showRegister);     
  }
  LoginFunc = (e) =>{
    e.preventDefault();
    // this.props.functionCallFromParent(this.state.showRegister);
    const url = 'http://192.168.43.103:5000/login/';
    const data = this.state;
    axios.post(url, data).then(res => {
      //this.props.functionCallFromParent(this.state.showRegister);
      console.log('Response from server: ' + res);
      console.log('Response from server: ' + res.data.user);
      if(res.data.user) {
        this.props.functionCallFromParent(this.state.showRegister);    
      }
    }).catch(err => {
      console.log ('Error of post:' + err);
     // this.props.functionCallFromParent(this.state.showRegister);

    });

  }
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="row container">
        <form className="col s12 l12  m-tb-25 h50">
          <div className="row">
            <div className="input-field col s12 l6">
              <i className="material-icons prefix">email</i>
              <input id="prefix" type="text" value={this.state.email} className="validate" onChange={this.handleChangeemail} />
              <label for="prefix">Email</label>
            </div>
            <div className="input-field col s12 l6">
              <i className="material-icons prefix">assignment_ind</i>
              <input id="pass" type="text" value={this.state.password} className="validate" onChange={this.handleChangepass} />
              <label for="pass">Pass</label>
            </div>
            <div className="input-field col s12 l12 text-center">
              <a className="waves-effect waves-light btn" onClick={this.LoginFunc}>Login</a>
            </div>
            <div className="input-field col s12 l12 text-center m-tb-25">
              <p>Not Registered:  <a className="waves-effect waves-light btn" onClick={this.RegisterFunc}>Register</a></p>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default login
