import React from 'react'
import './intro.scss'
import {init} from 'ityped'
import{useEffect , useRef} from 'react'

export default function Intro() {
      const textRef = useRef();
     
    useEffect(()=>{
       init(textRef.current, {
           showCursor: false,
           strings: ["Web Development", "App Development", "Software Development"],
       })
    })
    return (
        <div className = "intro" id = "intro">
        <div className="left">
            <div className="imagecontainer"></div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hi There, I'm</h2>
                <h1>Jay Barot</h1>
                <h3> I do <span ref = {textRef}></span></h3>

                <a href ="#portfolio">
                <img src = "assets/down.png" alt=""/>
            </a>
            </div>
            
        </div>
        </div>
    )
}