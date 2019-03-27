import React, {Component} from "react"
import Iframe from "react-iframe"


export const Galery = () =>{

    const urlImg = "https://www.pexels.com/search/furniture/"
    const sth = {
        justifyContent : "center",
        textAlign : "center",
        alignItems : "center"
    }
    return(
        <div className="header">

            <div className="galery">
                
                <div className="iframe">
                    <Iframe url={urlImg}
                        height="450px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="absolute"
                        allowFullScreen />
                        
                        <h1 style={sth}>Loading</h1>
                </div>
            </div>

            


        </div>

    )
}