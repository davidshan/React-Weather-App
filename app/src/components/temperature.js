import React, { Component } from 'react'

export default class Temperature extends Component {
    render() {
        return (
            <div>
                {this.props.celsius + " C"}
            </div>
        );
    }
}