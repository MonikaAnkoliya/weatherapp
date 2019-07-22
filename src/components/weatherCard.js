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
    if(props.data) {
        const date = new Date(props.data.date)
        return (
            <div onClick={() => props.onWeatherCardSelect(props.data)}>
                <Card className="temp">
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {date.getDate() + ' ' + monthNames[date.getMonth()] + ',' + date.getFullYear()}
                        </Typography>
                        <Typography component="div">
                            Avg. Temp.: {props.tampType === 'fahrenheit' ?
                            props.data.avgFahTemp.toFixed(2) + '°F' :
                            props.data.avgCelTemp.toFixed(2) + '°C'
                        }
                        </Typography>
                        <div className="temp2">
                            Weather Info:-
                            {
                                props.data.weather.map((weather, index) => {
                                    return (
                                        <div key={index}>
                                            <Typography className="weather-description-wrapper" component="div">
                                                {formatAMPM(weather.dt_txt)}:- {weather.weather[0].description}
                                                <img className="weather-description" alt=""
                                                     src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/>
                                            </Typography>
                                            <Typography className="weather-wind-wrapper" component="div">
                                                Wind Speed:- {weather.wind.speed} m/s
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
    return <div />
}

export default SimpleCard;