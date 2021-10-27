import React, { Component } from 'react'

export default class UserInfo extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.user.User.first_Name} {this.props.user.User.last_name} </h4> 
            </div>
        )
    }
}