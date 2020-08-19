import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import Login from './component/Login'
import AfterLogin from './component/AfterLogin'

function App(props) {

    console.log(`window.sessionStorage`, window.sessionStorage);

    if (!window.sessionStorage.getItem('userId')) {
        alert('please Login')
        props.history.push('/login')
    }

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