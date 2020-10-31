import React from 'react'
import classes from './login.module.css'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const login=(props)=>{
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.username.value)
    const data={
        username:e.target.username.value,
        password:e.target.password.value
    }

    Axios.post('https://5f97a7b942706e00169576e1.mockapi.io/login',data)
    .then(response =>{
        alert('login');
        props.userLoginStatus();
        props.history.push("/");
    })
    .catch(err=>{
        console.log(err)
    })
    }
    return(
        <div className={classes.mainContainer}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username"/>
                <input type="password" name="password" placeholder="Password"/>
                <input type="submit" value="login" />
            </form>
            {/* <button onClick={props.userLoginStatus}>Login Now</button> */}
        </div>
    )
}
export default login;