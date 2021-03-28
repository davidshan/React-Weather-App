import React, { Component } from 'react'

export default class Location extends Component {
    render() {
        return (
            <h2 class="cityLocation">{this.props.city}</h2>
        );
    }
}