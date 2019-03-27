import React, {Component} from "react"
import Iframe from "react-iframe"


export const Login = () =>{
    return(
        <div className="header">

            <div className="inHeaderLeft">
                <h2>Client Login</h2>
                <hr></hr>
                
                <div className="formLogin">
                    <form method="GET">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required/>

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required/>

                        <button type="submit">LOGIN</button>

                    </form>
                </div>
                
            </div>

            


        </div>

    )
}