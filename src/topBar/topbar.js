import React from 'react'
import classes from './topbar.module.css'
import { Link } from 'react-router-dom'
const topbar=()=>{
    return(
        <div className={classes.topbar}>
            <Link className={classes.navmenu} to='/'><span >Home</span></Link>
            <span className={classes.navmenu}>Login</span>
        </div>
    )
}
export default topbar;