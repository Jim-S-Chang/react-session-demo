import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router'

class AfterLogin extends React.Component {
    componentDidMount() {
        const token = window.localStorage.getItem('token')
        axios.defaults.headers.token = token
        axios.defaults.headers.userId = window.localStorage.getItem('userId')
        console.log('componentDidMount')
        axios.get('http://localhost:8080/status').then((res) => {
        }).catch(e => {
            console.log(e);
            window.localStorage.clear()
            const {history} = this.props
            history.replace('/login')
        })
    }

    clickLogout = () => {
        const token = window.localStorage.getItem('token')
        axios.defaults.headers.token = token
        axios.defaults.headers.userId = window.localStorage.getItem('userId')
        console.log('componentDidMount')
        axios.post('http://localhost:8080/logout').then((res) => {
            console.log(res);
            window.localStorage.clear()
            const {history} = this.props
            history.replace('/login')
        }).catch(e => {
            console.log(e);
            window.localStorage.clear()
            const {history} = this.props
            history.replace('/login')
        })
    }

    render() {
        console.log(window.localStorage.getItem('userInfo'));

        if (window.localStorage.getItem('userInfo') === null) {
            alert('please Login')
            return (
                <Redirect to="/login" />
            )
        }
        return (
            <div>
                You have logged in success!
                <button onClick={this.clickLogout}>logout</button>
            </div>
        )
    }
}

export default AfterLogin
