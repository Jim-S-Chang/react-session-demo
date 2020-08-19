import React from 'react'
import {useHistory} from 'react-router'

class AfterLogin extends React.Component {
    render() {
        if (!window.sessionStorage.getItem('userId')) {
            this.props.history.push('/login')
            return null
        }
        return (
            <div>
                You have logged in success!
            </div>
        )
    }
}

export default AfterLogin
