import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const formatAMPM = (date) => {
    let hours = date.getHours();
    let hours2 = date.getHours()+3;
    let ampm = hours >= 12 ? 'PM' : 'AM';
    let ampm2 = hours2 >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours2 = hours2 % 12;
    hours2 = hours2 ? hours2 : 12; // the hour '0' should be '12'
    const strTime = hours + ampm;
    const strTime2 = hours2 + ampm2;
    return strTime + "-" + strTime2;
}

const SimpleCard = (props) => {
    const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const date=new Date(props.data.date)
    return (
        <div onClick={()=>props.onWeatherCardSelect(props.data)}>
            <Card className="temp">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {date.getDate()+' '+monthNames[date.getMonth()]+','+date.getFullYear()}
                    </Typography>
                    <Typography component="div">
                        Avg. Temp.: {props.tampType === 'fahrenheit' ?
                            props.data.avgFahTemp.toFixed(2)+'°F' :
                            props.data.avgCelTemp.toFixed(2)+'°C'
                        }
                    </Typography>
                    <div className="temp2">
                        Weather Info:-
                        {
                        props.data.weather.map((weather,index)=>{
                            return(
                                <div key={index}>
                                    <Typography className="weather-description-wrapper" component="div">
                                        {formatAMPM(new Date(weather.dt_txt))}:- {weather.weather[0].description}
                                        <img className="weather-description" alt="" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} />
                                    </Typography>
                                    <Typography className="weather-wind-wrapper"component="div">
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

export default SimpleCard;