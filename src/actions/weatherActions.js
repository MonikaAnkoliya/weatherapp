export const getWeatherData = () => dispatch => {
    return new Promise((resolve,reject)=>{
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40')
            .then(response =>  response.json())
            .then(resData => {
                // ADD TEMPERATURE IN CELCIUS AND FAHRENHEIT
                const list = resData.list.map((data)=>{
                    const temperature = {
                        celcius_temp: data.main.temp - 273.15,
                        celcius_temp_min: data.main.temp_min - 273.15,
                        celcius_temp_max: data.main.temp_max - 273.15,
                        fahrenheit_temp: (data.main.temp - 273.15) * 9/5 + 32,
                        fahrenheit_temp_max: (data.main.temp_max - 273.15) * 9/5 + 32,
                        fahrenheit_temp_min: (data.main.temp_min - 273.15) * 9/5 + 32,
                    }

                    return {...data,...temperature};
                });;
                // UPDATE OBJECT BY DATE
                const groups = list.reduce((groups, game) => {
                    const date = game.dt_txt.split(' ')[0];
                    if (!groups[date]) {
                        groups[date] = [];
                    }
                    groups[date].push(game);
                    return groups;
                }, {});
                // UPDATE OBJECT USING BY DATE AND ITS WEATHER DATA
                const groupArrays = Object.keys(groups).map((date) => {
                    let avgCelTemp = 0;
                    for (let i=0;i<groups[date].length;i++){
                        avgCelTemp += groups[date][i].celcius_temp;
                    }
                    let avgFahTemp = 0;
                    for (let i=0;i<groups[date].length;i++){
                        avgFahTemp += groups[date][i].fahrenheit_temp;
                    }
                    return {
                        date,
                        avgCelTemp: avgCelTemp/groups[date].length,
                        avgFahTemp: avgFahTemp/groups[date].length,
                        weather: groups[date]
                    };
                });
                // UPDATE OBJECT USING GROUP BY DATE
                const groupBy = (xs, key) => {
                    return xs.reduce((rv, x) => {
                        (rv[key] = rv[key] || []).push(x);
                        return rv;
                    }, {});
                };
                // STORE VALUE IN REDUCER
                dispatch({
                    type: 'GET_WEATHER_DATA',
                    payload: groupBy(groupArrays,'date').date
                })
                //STORE LOADING FALSE BECAUSE AFTER DATA FETCHED
                dispatch({
                    type: 'SET_LOADER',
                    payload: false
                })
                resolve(groupBy(groupArrays,'date').date)
            }).catch((err)=>{
            dispatch({
                type: 'SET_LOADER',
                payload: false,
            })
        })
    });
};
