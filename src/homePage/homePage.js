import React from 'react';
import classes from './homepage.module.css'
import axios from 'axios';
import Button from '../button/button'
import RenderVideoCard from '../videoCard/videoCard'

class homepage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          currentCount  :0,
          videoData:[],
        }
    }
    handleIncreamentClick =() => {
        if(this.state.currentCount<5){
        const updatedCount = this.state.currentCount+1;
        this.setState({currentCount:updatedCount});
        }
      }
    
      handleDecreamentClick =() => {
        if(this.state.currentCount>0){
        const updatedCount = this.state.currentCount-1;
        this.setState({currentCount:updatedCount});
        } 
        
      }
      // handleHideCards=()=>{
      //   // const changeBool=
      //   this.setState({showGrid:!this.state.showGrid}) 
        
      // }
      componentDidMount(){
        axios.get('https://5ee248998b27f3001609487b.mockapi.io/playlist')
        .then((response)=>{
            console.log(response.data)
            this.setState({videoData:[...response.data]})
            console.log('inside Component Did Mount')
        })
        .catch(err=>{
            console.log(err)
        })
      }
    render(){
        const renderVideo = this.state.videoData.map((item)=>{
            return <RenderVideoCard thumbnail={item.thumbnail} title={item.title}/>
          })
          return(
              <div className={classes.mainContainer}>
            <button onClick={this.handleHideCards}>Hide cards</button>
            <h1>Count: {this.state.currentCount}</h1>
            <p>Min count: 0 Max count: 5</p>
            <Button onBtnClick={this.handleIncreamentClick} label ={'Count ++'} totalCount={this.state.currentCount}/>
            <Button onBtnClick={this.handleDecreamentClick} label ={'Count --'} totalCount={this.state.currentCount} />

            <div className={classes.videoWrapper}>
                
                {renderVideo}       
        </div>
        </div>
          )
    }
}
export default homepage;