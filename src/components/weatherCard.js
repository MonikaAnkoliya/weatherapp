import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';


const formatAMPM = (date) => {
    let time1 = moment(date).format("hA");
    let time2 = moment(date).add(3, 'h').format("hA");
    return time1 + "-" + time2;
};
const SimpleCard = (props) => {
    const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const selectedCard = props.selectDate === props.data.date ? 'select-card' : '';
    const isFahrenheit = props.tampType === 'fahrenheit';
    if(props.data) {
        const date = new Date(props.data.date)
        return (
            <div id="weather-card" onClick={() => props.onWeatherCardSelect(props.data)}>
                <Card className={`temp ${selectedCard}`}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {date.getDate() + ' ' + monthNames[date.getMonth()] + ',' + date.getFullYear()}
                        </Typography>
                        <Typography component="div">
                            Avg. Temp.: {isFahrenheit ?
                            props.data.avgFahTemp.toFixed(2) + '°F' :
                            props.data.avgCelTemp.toFixed(2) + '°C'
                        }
                        </Typography>
                        <div className="temp2">
                            Weather Info:-
                            {
                                props.data.weather.map((weather, index) => {
                                    const temp = isFahrenheit ?
                                        weather.fahrenheit_temp.toFixed(1) + '°F' :
                                        weather.celcius_temp.toFixed(1) + '°C';
                                    return (
                                        <div key={index}>
                                            <Typography className="weather-description-wrapper" component="div">
                                                {formatAMPM(weather.dt_txt)}:-&nbsp;{weather.weather[0].main}
                                                <img className="weather-description" alt=""
                                                     src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/>
                                            </Typography>
                                            <Typography className="weather-wind-wrapper" component="div">
                                                Wind Speed:- {weather.wind.speed} m/s
                                            </Typography>
                                            <Typography className="weather-wind-wrapper" component="div">
                                                Temp:- {temp}
                                            </Typography>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
    return <div/>
}

export default SimpleCard;