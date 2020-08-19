import React from 'react'
import {Redirect} from 'react-router'

class AfterLogin extends React.Component {
    componentDidMount() {
        const expireTime = window.localStorage.getItem('expireTime')
        console.log(`expireTime`, expireTime);
        console.log(new Date().toISOString());
        if ( expireTime === null || expireTime <= new Date().toISOString() ) {
            const {history} = this.props
            history.replace('/login')
        }
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
            </div>
        )
    }
}

export default AfterLogin
