import React, { Component } from 'react';
import axios from 'axios';
import M from 'materialize-css';
export class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegister: true,
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };
    this.RegisterFunc = this.RegisterFunc.bind(this);

    this.handleChangeFname = this.handleChangeFname.bind(this);
    this.handleChangeLname = this.handleChangeLname.bind(this);
    this.handleChangeemail = this.handleChangeemail.bind(this);
    this.handleChangepass = this.handleChangepass.bind(this);
  }

  handleChangeFname = (event) =>{
    this.setState({firstname : event.target.value});
  }
  handleChangeLname = (event) =>{
    this.setState({lastname : event.target.value});
  }
  handleChangeemail = (event) =>{
    this.setState({email : event.target.value});
  }
  handleChangepass = (event) =>{
    this.setState({password : event.target.value});
  }
  RegisterFunc = (e) =>{
    e.preventDefault();
    const url = 'http://192.168.43.103:5000/register/add';
    const data = this.state;
    axios.post(url, data).then(res => {
      this.props.functionCallFromParent(this.state.showRegister);
    }).catch(err => {
      console.log ('Error of post:' + err);
      this.props.functionCallFromParent(this.state.showRegister);

    });    
  }

    componentDidMount(){
        M.AutoInit();
    }
    render() {
        return (
            <div className="row container">
            <form className="col s12 l12  m-tb-25 h50">
              <div className="row">
                <div className="input-field col s12 l6">
                  <i className="material-icons prefix">account_circle</i>
                  <input id="icon_prefix" type="text" value={this.state.firstname} className="validate"  onChange={this.handleChangeFname} />
                  <label for="icon_prefix">First Name</label>
                </div>
                <div className="input-field col s12 l6">
                  <i className="material-icons prefix">account_circle</i>
                  <input id="icon_prefix1" type="text" value={this.state.lastname} className="validate" onChange={this.handleChangeLname} />
                  <label for="icon_prefix">Last Name</label>
                </div>
                <div className="input-field col s12 l6">
                  <i className="material-icons prefix">mail</i>
                  <input id="icon_prefix2" type="text" value={this.state.email} className="validate" onChange={this.handleChangeemail} />
                  <label for="icon_prefix2">Email</label>
                </div> 
                <div className="input-field col s12 l6">
                  <i className="material-icons prefix">assignment_ind</i>
                  <input id="icon_prefix3" type="text" value={this.state.password} className="validate" onChange={this.handleChangepass} />
                  <label for="icon_prefix3">Pass</label>
                </div>             
                <div className="input-field col s12 l12 text-center">
                    <a className="waves-effect waves-light btn" onClick={this.RegisterFunc}>Register</a>                  
                </div>
              </div>
            </form>
          </div>
        )
    }
}

export default register
