import React,{useState,useEffect} from "react"
import Banner from "./Banner"
import Science from "./Science"
import "../../styles/Content.css"

export default function Content(){
    return(
        <div className="content">
            <div className="container">
                <Banner/>
                <Science/>
            </div>
            <div>
                events
            </div>
            
        </div>
    )
}