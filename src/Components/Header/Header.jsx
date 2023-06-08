import React from 'react'
import logo from "../../logo.png"
import { ImSearch } from "react-icons/im"

const Header = () => {
    return (
        <nav className="header">

            <img src={logo} alt="logo" />

            <div>
                <a href="#" to="/tvshows" >TV Shows</a>
                <a href="#" to="/movies" >Movies</a>
                <a href="#" to="/recent" >Recently Added</a>
                <a href="#" to="/mylist" >My List</a>
            </div>

            <ImSearch />

        </nav>
    )
}

export default Header