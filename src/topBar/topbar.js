import React from 'react'
import classes from './topbar.module.css'
import { Link } from 'react-router-dom'
const topbar=(props)=>{
    console.log(props);
    return(
        <div className={classes.topbar}>
            <span  ><Link className={classes.navmenu}to='/'>Home</Link></span>
            <span >
                {
                    props.userLogin ?
                    <span onClick={props.userLogoutStatus}>LogOut</span>:
                    <Link className={classes.navmenu} to='/login'>Login</Link>
                }
            </span>
        </div>
    )
}
export default topbar;