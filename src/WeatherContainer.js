import React, { Component, createRef } from "react";
import "./WeatherContainer.css"
import WeatherSlot from "./WeatherSlots";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

class WeatherContainer extends Component
{
    slotarr = []; //not part of parent state to not have to re-render each component on update
    curWeatherRef;
    forecastWeatherarr = [];
    static forecastDays = 2 //max the free api tier allows
    constructor()
    {
        super()
        
        for(let i = 0;i < 24;i++)
        {
            let curRef = createRef();
            this.slotarr.push(curRef);
        }
        let curRef = createRef();
        this.curWeatherRef = curRef;
        for(let i = 0; i < WeatherContainer.forecastDays; i++)
        {
            let curRef = createRef();
            this.forecastWeatherarr.push(curRef);
        }
    }
    
    componentDidMount()
    {
        this.updateChildren();
    }

    async getWeatherData()
    {
        const headers = {
            "Access-Control-Allow-Origin":"http://api.weatherapi.com" //only allowing weatherapi for getting cross origin resources
        }
        let resp = await fetch('http://api.weatherapi.com/v1/forecast.json?key=aa343e79c9484c7eadc184343231204&q=DH1&days='+(WeatherContainer.forecastDays+1)+'&aqi=no&alerts=no',headers)
        let weatherData = await resp.json();
        return weatherData
    }

    async updateChildren()
    {
        let weatherDataFull = await this.getWeatherData();
        let weatherData = weatherDataFull.forecast.forecastday[0].hour
        let forecastData = weatherDataFull.forecast.forecastday.slice(1)
        forecastData = forecastData.map(data => data.day)
        for(let i = 0; i < this.slotarr.length; i++)
        {
            this.slotarr[i].current.update(weatherData[i].time.slice(-5),weatherData[i].temp_c, weatherData[i].condition, {speed: weatherData[i].wind_mph, angle: weatherData[i].wind_degree})
        }
        for(let i = 0; i < WeatherContainer.forecastDays; i++)
        {
            this.forecastWeatherarr[i].current.update(WeatherContainer.formatDate(new Date(Date.now() + (i+1)*24*60*60*1000)),forecastData[i])
        }
        this.curWeatherRef.current.update(weatherDataFull)
    }

    static formatDate(date)
    {
        const formattedDate = date.toLocaleDateString('en-GB', {
            day: '2-digit', month: 'short', year: 'numeric'
        }).replace(/ /g, '-');
        return formattedDate
    }

    render()
    {
        return(
            <div className="parentContainer">
                <div className="topPanel">
                    <CurrentWeather ref={this.curWeatherRef}/>
                    {Array(this.forecastWeatherarr.length).fill(true).map((_,i) => <ForecastWeather key={i} ref={this.forecastWeatherarr[i]}/>)}
                </div>
                <div className="WeatherContainer rounded-lg">
                    {Array(this.slotarr.length).fill(true).map((_,i) => <WeatherSlot key={i} ref={this.slotarr[i]}/>)}
                </div>
            </div>
            
            
        )
    }
}

export default WeatherContainer