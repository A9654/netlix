import React from 'react'
import logo from "../../logo.png"
import { ImSearch } from "react-icons/im"

const Header = () => {
    return (
        <nav className="header">

            <img src={logo} alt="logo" />

            <div>
                <button to="/tvshows" >TV Shows</button>
                <button to="/movies" >Movies</button>
                <button to="/recent" >Recently Added</button>
                <button to="/mylist" >My List</button>
            </div>

            <ImSearch />

        </nav>
    )
}

export default Header