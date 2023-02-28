import React, { Component } from 'react'
import './Styles.css'

class Navbar extends Component {
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked:!
        this.state.clicked
        })
    }
    render(){
  return (
    <nav>
        <img src='../Images/logo.png' />
        <div>
            <ul id='navbar' className={this.state.clicked? "#navbar active": "#navbar"}>
                <li>
                    <a className='home'href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>Browse</a>
                </li>
                <li>
                    <a href='#'>Create</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
                <li>
                    <a href='#'>Contact Us</a>
                </li>
            </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
    </nav>
  )
}
}
export default Navbar

