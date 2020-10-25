import React from 'react';
import { Link } from 'react-router-dom';
import classes from './videCard.module.css'
const videoCard = (props)=>{
    console.log(props)
    return(
        <Link className={classes.thumbnailWrapper} to='/watch'>
        
        <div >
            <img className={classes.thumbnail} src={props.thumbnail} alt={props.title}/>
            <h1 className={classes.heading}>{props.title}</h1>
        
        </div>
        </Link>
        
    )
}

export default videoCard;