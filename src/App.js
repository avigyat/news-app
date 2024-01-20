
import './App.module.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
   
  state = {
    progress : 0
   }
  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }

  //apiKey = process.env.REACT_APP_NEWS_API;
  apiKey='18fe02fe0db044b7839dfc65295f41ba'
  
  render() {
    const pageSize=9

    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        
        />
            <Navbar></Navbar>
            
           
            <Routes>
              <Route exact path="/"  element={<News setProgress={this.setProgress}  apiKey={this.apiKey}   pageSize={pageSize} country='in' key="/general"/>} />
              <Route exact path="/business"  element={<News setProgress={this.setProgress}  apiKey={this.apiKey}   pageSize={pageSize} country='in' category='business' key="business"/>} />
              <Route exact path="/technology" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}   pageSize={pageSize} country='in' category='technology' key="technology" />} />
              <Route exact path="/sports"   element={<News setProgress={this.setProgress}  apiKey={this.apiKey}   pageSize={pageSize} country='in' category='sports' key="sports"/>} />
              <Route exact path="/entertainment"  element={<News setProgress={this.setProgress}  apiKey={this.apiKey}   pageSize={pageSize} country='in' category='entertainment' key="entertainment"/>} />
              <Route exact path="/general"  element={<News setProgress={this.setProgress}  apiKey={this.apiKey}   pageSize={pageSize} country='in' category='general' key="general"/>} />
              <Route exact path="/health"  element={<News setProgress={this.setProgress}  apiKey={this.apiKey}   pageSize={pageSize} country='in' category='health' key="health"/>} />
              <Route exact path="/science"   element={<News setProgress={this.setProgress}  apiKey={this.apiKey}   pageSize={pageSize} country="in" category="science" key="science"/>} />
            </Routes>
              
              
            
        </Router>
        
        
      </div>
    )
  }
}

