import { Component } from "react";
import "./WeatherSlots.css"

class WeatherSlot extends Component
{
    constructor()
    {
        super();
        this.state = {
            time: "no data",
            temp: 0, 
            condition: {icon:'none'},
            windInfo: {}
        }
    }

    update(timeIn, tempIn, conditionIn, windInfoIn)
    {
        this.setState({time: timeIn, temp: tempIn, condition: conditionIn, windInfo: windInfoIn})
    }
    
    render()
    {
        return(
            <div className="weatherSlot">
                <p className="timeText">{this.state.time}</p>
                <h4>{this.state.temp}°</h4>
                <div>
                    <img src={this.state.condition.icon} alt="weather symbol"></img>
                    <p className="smallText noWhiteSpace">{this.state.condition.text}</p>    
                </div>
                
                
            </div>
        )
    }
}

export default WeatherSlot