import React from 'react';
import './App.css';
import RenderVideoCard from './videoCard/videoCard';
import {videoData as VideoDataSource, APIENDPOINT} from './videoData'
import axios from 'axios'
import Button from './button/button'
import HomePage from './homePage/homePage'
import {BrowserRouter, Route} from 'react-router-dom'
import WatchPage from './VideoWatchPage/watchpage'
import Topbar from './topBar/topbar'
class App extends React.Component{
 

  
  render(){
     
    
    return(
      <BrowserRouter>
      <Topbar/>
      <div className="App">
        <Route exact  path='/' component={HomePage}/>
        <Route path='/watch' component={WatchPage}/>
    </div>
    </BrowserRouter>
    )
  }

  
}


export default App;
