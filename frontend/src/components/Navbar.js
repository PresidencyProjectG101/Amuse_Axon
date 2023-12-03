import {Component} from "react";
import "./NavbarStyles.css";


class Navbar extends Component{
    state = {clicked:false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
    return(
        <>
        <nav>
            <a href="index.html" id="logo">
            <svg width="52" height="36" viewBox="0 0 102 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="75.3818" width="101.624" height="11.7577" rx="5.87884" transform="rotate(-47.8825 0 75.3818)" fill="#008170"/>
            <rect x="27.595" y="17.5244" width="101.624" height="11.7577" rx="5.87884" transform="rotate(43.4941 27.595 17.5244)" fill="#008170"/>
            </svg>
            <p><span>Amuse </span>Axon</p>
            </a>

            <div >
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li><a className="active" href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><button href="/" className="inBtn btn">Log In</button></li>
                    <li><button href="/" className="upBtn btn">Sign Up</button></li>
                </ul>
            </div>

            <div id="mobile" onClick={this.handleClick}>
                <i
                    id="bar"
                    className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
                ></i>
            </div>
        </nav>
        </>
    )
}
}

export default Navbar;