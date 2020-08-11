
import React from 'react'
import './Header.css'
import {Avatar} from '@material-ui/core'
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                {/* Avatars for logged in user */}
                <Avatar 
                      className="header__avatar"
                      alt="Manav"
                      src = ""/>
                {/* Time Icon */}
                <AccessTimeIcon/>


            </div>
            <div className="header__search">
                {/* Search Icon */}
                <SearchIcon/>
                {/* Input */}
                <input type="text" placeholder="Search slack"/>
            </div>
            <div className="header__right">
                {/* help icon */}
                 <HelpOutlineIcon/>
            </div>
            
        </div>
    )
}

export default Header
