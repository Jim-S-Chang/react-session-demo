import React from 'react'
import {Redirect} from 'react-router'

class AfterLogin extends React.Component {
    render() {
        console.log(`window.sessionStorage`, window.sessionStorage);

        if (!window.sessionStorage.getItem('userId')) {
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
