import React, { Component } from 'react'

export default class Date extends Component {
    render() {
        return (
            <div>
                {this.props.date}
            </div>
        );
    }
}