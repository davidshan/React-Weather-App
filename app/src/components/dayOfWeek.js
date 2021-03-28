import React, { Component } from 'react'

export default class DayOfWeek extends Component {
    render() {
        return (
            <div>
                {this.props.weekday}
            </div>
        );
    }
}