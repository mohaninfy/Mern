import React, { Component } from 'react'
import M from 'materialize-css';

export class navBar extends Component {
    constructor(props){
        super(props);
        this.state = {showRegister: true };
        this.LoginFunc = this.LoginFunc.bind(this);
    }
    LoginFunc = (e) =>{
        e.preventDefault();
        this.props.functionCallFromParent(this.state.showRegister);     
      }
    // get a reference to the element after the component has mounted
    componentDidMount() {
        M.AutoInit();
    }
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo" onClick={this.LoginFunc}>Logo</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default navBar
