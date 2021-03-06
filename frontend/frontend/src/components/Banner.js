import React,{useState,useEffect} from "react"
import "../styles/Banner.css"

export default function Banner(){
    let [value,setValue] = useState(0);
    let items = [{content:"Physics"},
                    {content:"AOL"},
                    {content:"RET"},
                    {content:"Mathematics"},
                    {content:"Computer science"}];


    const nextClick = ()=>{
        setValue(value>=items.length-1?value=0:value+1);
    }
    const prevClick = ()=>{
        setValue(value<1?value=items.length-1:value-1);
    }
    return(
        <div className="banner">
            <div className="scroll">
                <i>{value+1}/{items.length}</i>
                <i onClick={prevClick} className="prev">prev</i>
            </div>
            <hr></hr>
            <div className="next">
            <i></i>
            <i onClick={nextClick} className="next">next</i>
            </div>
            
            {
               items.map((item,index)=><b className={value==index?"bright":""} key={index}>{item.content}</b>)
            }
        </div>
    )
}
