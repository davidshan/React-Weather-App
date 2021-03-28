import React, { Component } from 'react'
import DayOfWeek from './dayOfWeek.js'
import Date from './date.js'
import WeatherIcon from './weatherIcon.js'
import Temperature from './temperature.js'
import WeatherConditions from './weatherConditions.js'

export default class ForecastDayCard extends Component {
    render() {
        return (
            <div class="card">
                <DayOfWeek weekday="Friday"/>
                <Date date="March 1st, 1:00PM"/>
                <WeatherIcon/>
                <Temperature celsius="12"/>
                <WeatherConditions conditions="clear sky" />
            </div>
        );
    }
}