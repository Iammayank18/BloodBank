import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home';
import Getblood from './Components/Getblood';
import Donate from './Components/Donate';
import Search from './Components/Search';
import {Route} from 'react-router-dom'
function App() {
  return (
    <div>
       <Header/>
       <Route exact  path='/'>
       <Home/>
       </Route>

       <Route path='/Getblood'>
       <Getblood/>
       </Route>

       <Route path='/Donate'>
       <Donate/>
       </Route>

       <Route path='/Search'>
       <Search/>
       </Route>
    </div>
  )
}

export default App
