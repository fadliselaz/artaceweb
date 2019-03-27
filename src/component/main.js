import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {About} from "./About"
import {Contact} from "./Contact"
import {Galery} from "./Galery"
import {Login} from "./Login"


class Main extends Component {
    
    constructor(){
        super()
        this.state = {
            textLogin : "LOGIN",
            linkTo : "about"
        }

        this.al = this.al.bind(this)
        this.lk = this.lk.bind(this)
    }

    al(){
        if (this.state.linkTo == "about") {
            return(
                <About />
            )
        }
        if (this.state.linkTo == "contact") {
            return(
                <Contact />
            )
        }
        if (this.state.linkTo == "galery") {
            return(
                <Galery />
            )
        }
        if (this.state.linkTo == "login") {
            return(
                <Login />
            )
        }
    }

    lk(e){
        this.setState({linkTo: e.target.name})
    }
    
    render() {
       

        return (
            <Router>

            <div className="top">
                <div className="navbar">

                    <div className="logo">
                        <img src={require('./logo.png')} />
                    </div>

                    <div className="navbar-right">
                        <div className="menu">

                                <button onMouseOver={this.lk} name="about">ABOUT</button>
                                <button onMouseOver={this.lk} name="contact">CONTACT</button>
                                <button onMouseOver={this.lk} name="galery">GALERY</button>
                                <button onMouseOver={this.lk} name="login">{this.state.textLogin}</button>

                          
                            
                        </div>
                    </div>

                </div>    
            </div>


                   
                    
                    {this.al()}
                    

            {/* <Route exact path="/" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/galery" component={Galery} />
            <Route path="/login" component={Login} /> */}


            </Router>
        )
        
    }
    
}

export default Main
