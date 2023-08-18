import { Component } from "react";
import "./SharedWeather.css"

class CurrentWeather extends Component
{
    constructor()
    {
        super()
        this.state = {
            weatherData : {
                location: {name: 'None'},
                current:{
                    condition:
                    {
                        text:'None',
                        icon:'None'
                    },
                    wind_mph: 0,
                    temp_c:0,
                    feelslike_c:0,
                    wind_degree:30
                }
            },
            style : {
                transform: 'rotate(0deg)',
                transition: 'transform 500ms ease'
            }
        }
    }

    update(weatherDataIn)
    {
        this.setState({weatherData: weatherDataIn, style : {
            transform: 'rotate('+weatherDataIn.current.wind_degree+'deg)',
            transition: 'transform 500ms ease'
        }})
    }

    render()
    {
        return(
            <div className="WeatherContainerCurrent rounded-lg">
                <h4 className="h4Mod">Current Weather</h4>
                <div className="infoBox">
                    <div className="imgThenText">
                        <img style={this.state.style} alt='Weather Arrow' src="upArrowLarge.png"></img>
                        <p className="pMod">{this.state.weatherData.current.wind_mph}mph</p>    
                    </div>
                    <div className="imgThenText">
                        <img alt="Weather Icon" src={this.state.weatherData.current.condition.icon}></img>
                        <p className="pMod">{this.state.weatherData.current.condition.text}</p>    
                    </div>
                    <div className="imgThenText">
                        <p className="pMod">Temp:</p>
                        <p>{this.state.weatherData.current.temp_c}°</p>
                        <div className="imgThenText">
                            <p className="pMod">Feels like:</p>
                            <p>{this.state.weatherData.current.feelslike_c}°</p>
                        </div>   
                    </div>  
                </div>
            </div>
        )
    }
}

export default CurrentWeather