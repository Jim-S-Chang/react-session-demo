import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    componentDidMount() {
        const token = window.localStorage.getItem('token')
        if (token === null) {
            return
        }
        axios.defaults.headers.token = token
        axios.defaults.headers.userId = window.localStorage.getItem('userId')
        console.log('componentDidMount')
        axios.get('http://localhost:8080/status').then((res) => {
            console.log(`login res`, res);
            if (res.status === 200) {
                const {history} = this.props
                history.replace('/afterLogin')
            }
        })
    }

    clickLogin = () => {
        axios.post('http://localhost:8080/login', {
            userId: '12345',
            password: '12345'
        }).then((res) => {
            if (res.status === 200) {
                console.log(`userInfo`, res.data.userInfo)
                console.log(`res.headers`, res)
                window.localStorage.setItem('userInfo', res.data.userInfo)
                window.localStorage.setItem('token', res.headers.token)
                window.localStorage.setItem('userId', res.headers.userid)
                this.props.history.replace('/afterLogin')
            }
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                please login
                <button onClick={this.clickLogin}>login</button>
            </div>
        )
    }
}

export default Login