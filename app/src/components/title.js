import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <h1 class="title">{this.props.text}</h1>
        );
    }
}