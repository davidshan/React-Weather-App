import React, { Component } from 'react'
import ForecastDayCard from './forecastDayCard'

export default class ForecastCards extends Component {
    render() {
        return (
            <div class="forecastCards">
                <ForecastDayCard></ForecastDayCard>
                <ForecastDayCard></ForecastDayCard>
                <ForecastDayCard></ForecastDayCard>
                <ForecastDayCard></ForecastDayCard>
                <ForecastDayCard></ForecastDayCard>
            </div>
        );
    }
}