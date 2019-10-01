import React from 'react';
import Topbar from './Topbar'
import Courses from './Courses'
import About from './About'
import './App.css';





class App extends React.Component{




  render(){
    return(
      <div className="App">
      <Topbar />
      <About />
      <Courses />
      
      
      
      
    </div>

    )
  }
}

export default App;
