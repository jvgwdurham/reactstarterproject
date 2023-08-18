import { Component } from "react";
import "./SharedWeather.css"

class ForecastWeather extends Component
{
    constructor()
    {
        super()
        this.state = {
            date : 0,
            weatherData : {
                avgtemp_c:0,
                maxwind_mph:0,
                condition: {
                    text:"None",
                    icon:"None"
                }
            }
        }
    }

    update(date, weatherDataIn)
    {
        this.setState({date: date, weatherData : weatherDataIn})
    }

    render()
    {
        return(
            <div className="WeatherContainerCurrent rounded-lg">
                <h4 className="h4Mod">{this.state.date}</h4>
                <div className="infoBox">
                <div className="imgThenText">
                    <img alt="Weather Icon" src={this.state.weatherData.condition.icon}></img>
                    <p className="pMod">{this.state.weatherData.condition.text}</p>    
                </div>
                <div className="imgThenText">
                        <p className="pMod">Temp:</p>
                        <p>{this.state.weatherData.avgtemp_c}°</p>
                        <div className="imgThenText">
                            <p className="pMod">Wind Speed:</p>
                            <p>{this.state.weatherData.maxwind_mph}mph</p>
                        </div>   
                    </div>      
                </div>
            </div>
        )
    }
}

export default ForecastWeather