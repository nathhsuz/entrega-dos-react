import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import Inicio from './components/Inicio';
import Login from './components/Login'
import Patines from './components/Patines'

const App = () => {
  return (
    <>
     <Navbar /> 
     <Router>
<Switch>

<Route path='/' component ={Inicio} exact>
 <Inicio />
</Route>

<Route path='/' component ={Patines} exact>
  <Patines />
</Route>
<Route path='/' component ={Login} exact>
  <Login />
</Route>

</Switch>

     </Router>
    </>
  )
}

export default App
