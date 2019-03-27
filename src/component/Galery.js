import React, {Component} from "react"
import Iframe from "react-iframe"


export const Galery = () =>{
    return(
        <div className="header">

            <div className="inHeaderLeft">
                <h2>Galery</h2>
                <hr></hr>
                
                <div className="galery">
                    <Iframe url="https://www.w3schools.com" />
                </div>
            </div>

            


        </div>

    )
}