import React, { Component } from 'react'
import Title from './title.js'
import Location from './location.js'
import ForecastCards from './forecastCards.js'

export default class Forecast extends Component {
    render() {
        return (
            <div>
                <Title text="5 Day Forecast"></Title>
                <Location city="New York, USA"></Location>
                <ForecastCards></ForecastCards>
            </div>
        );
    }
}