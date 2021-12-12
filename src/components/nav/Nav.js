import React from 'react'
import Accounts from '../accounts/Accounts'
import classes from './nav.module.css'
import logo from '../../assets/images/logo-bg.png'
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/" className={classes.brand}>
              <img src={logo} alt="Learn with Sumit Logo" />
              <h3>Learn with Munna</h3>
            </Link>
          </li>
        </ul>
         <Accounts/>
      </nav>
    )
}

export default Nav
