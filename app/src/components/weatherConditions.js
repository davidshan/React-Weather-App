import React, { Component } from 'react'

export default class WeatherConditions extends Component {
    render() {
        return (
            <div>
                {this.props.conditions}
            </div>
        );
    }
}