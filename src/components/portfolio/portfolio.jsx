import React from 'react'
import './portfolio.scss'

export default function Portfolio() {
    return (
        <div className = "portfolio" id = "portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Software Design</li>
                <li>Web App</li>
                <li>Mobile App</li>
            </ul>
            <div className="comtainer">
                <div className="item">
                    <img src = "" alt=""/>
                    <h3>Space Defender</h3>
                </div>
            </div>
        </div>
    )
}