import React from 'react';
import './App.css';
import RenderVideoCard from './videoCard/videoCard';
import {videoData as VideoDataSource, APIENDPOINT} from './videoData'
import axios from 'axios'
import Button from './button/button'
import HomePage from './homePage/homePage'
import {BrowserRouter, Route,Redirect} from 'react-router-dom'
import WatchPage from './VideoWatchPage/watchpage'
import Topbar from './topBar/topbar'
import LoginPage from './login/login'
class App extends React.Component{
 constructor(props){
   super(props)
   this.state={
     isUserLoggedin:false,

   }
 }
userLoginStatus=()=>{
  this.setState({isUserLoggedin:true})
}
userLogoutStatus=()=>{
  this.setState({isUserLoggedin:false})

}
  render(){
    return(
      <BrowserRouter>
      <Topbar userLogin={this.state.isUserLoggedin} userLogoutStatus={this.userLogoutStatus}/>
      <div className="App">
        <Route exact  path='/' component={HomePage}/>
        <Route path='/watch' component={WatchPage}/>
        <Route path='/login' render={(routeProps)=> this.state.isUserLoggedin ? <Redirect to="/"/> : <LoginPage userLoginStatus={this.userLoginStatus} history={routeProps.history} location={routeProps.location} />
        }/>
    </div>
    </BrowserRouter>
    )
  } 
}
export default App;
