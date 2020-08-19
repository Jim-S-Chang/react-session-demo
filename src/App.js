import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import Login from './component/Login'
import AfterLogin from './component/AfterLogin'

function App(props) {

    return ( 
        <div className = "App" >
            <HashRouter >
                <Route exact path = '/afterLogin' component = { AfterLogin }/>
                <Route exact path = '/login' component = { Login }/> 
            </ HashRouter>
        </div>
    );
}

export default App