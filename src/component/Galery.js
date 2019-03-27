import React, {Component} from "react"
import Iframe from "react-iframe"


export const Galery = () =>{
    return(
        <div className="header">

            <div className="inHeaderLeft">
                <h2>Galery</h2>
                <hr></hr>
                
                <div className="galery">
                    <Iframe url="https://unsplash.com/search/photos/furniture"
                        width="550px"
                        height="450px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"
                        allowFullScreen />
                </div>
            </div>

            


        </div>

    )
}