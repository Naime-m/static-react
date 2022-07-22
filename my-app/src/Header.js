import React from "react"
import logo from "./logo.png"

export default function Header() {
    return(
        <header>
            <nav className= "nav">
            <img className = "logo" src={logo} alt="logo" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </nav>
        </header>
    )
}