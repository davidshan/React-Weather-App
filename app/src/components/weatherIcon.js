import React, { Component } from 'react'

export default class WeatherIcon extends Component {
    render() {
        // Below is because webpack doesnt include the public folder in it's build
        // Or just use './sunny.png' as the src. React will know it's in the public folder
        return (
            <div>
                <img src={process.env.PUBLIC_URL + '/sunny.png'} alt="Sunny!"></img>
            </div>
        );
    }
}