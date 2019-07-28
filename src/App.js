import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import {getWeatherData} from './actions/weatherActions';
import WeatherList from './weatherList';
import WeatherChart from './components/weatherChart';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import moment from 'moment';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'fahrenheit',
            page: 0,
            chartData: [],
            selectedCard: {},
            errText: '',
        }
    }

    componentDidMount() {
        this.props.getWeatherData().then((res) => {
            this.setState({
                currentData: res[0],
                selectDate: res[0].date
            },()=>{
                this.setChartCardData(res[0])
            })
        }).catch((err)=>{
            this.setState({
                currentData: err.data[0],
                selectDate: err.data[0].date,
                errText: err.errMsg,
            },()=>{
                this.setChartCardData(err.data[0])
            })
        })
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        }, () => {
            this.setChartCardData();
        })
    };

    onNextClick = () => {
        this.setState({page: this.state.page + 1})
    };

    onPreviousClick = () => {
        this.setState({
            page: this.state.page - 1
        })
    };

    setChartCardData = (data = this.state.currentData) => {
        const chartData = data.weather.map((data1) => {
            const tempType = this.state.value === 'fahrenheit' ?
                parseFloat(data1.fahrenheit_temp.toFixed(1)) :
                parseFloat(data1.celcius_temp.toFixed(1));
            const time = this.formatAMPM(data1.dt_txt);
            // const tempSym = this.state.value === 'fahrenheit' ? '°F' : '°C';
            return {
                weatherList: tempType,
                time: time,
            };
        });
        this.setState({
            chartData,
            currentData: data,
            selectDate: data.date,
        })
    };

    formatAMPM = (date) => {
        let time1 = moment(date).format("H");
        let time2 = moment(date).add(3, 'h').format("k");
        return time1 + "-" + time2;
    };


    render() {
        if (this.props.loading) {
            return <div className="loading"><h3>Loading.....</h3></div>
        }

        let isNext = false;
        if (this.props.weatherData.length > 3) {
            isNext = (this.props.weatherData.length / 3) - 1 !== this.state.page;
        }

        return (
            <div className="main-wrapper">
                <div>{this.state.errText}</div>
                <RadioGroup
                    value={this.state.value}
                    onChange={this.handleChange}
                    row
                    className="radio-wrapper"
                >
                    <FormControlLabel value="celcius" control={<Radio/>} label="Celcius"/>
                    <FormControlLabel value="fahrenheit" control={<Radio/>} label="Fahrenheit"/>
                </RadioGroup>
                <div className="pagination-wrapper">
                    <div>{this.state.page > 0 && <Icon id="previous-page" fontSize='large' onClick={this.onPreviousClick}>arrow_back</Icon>}</div>
                    <div>{isNext && <Icon id="next-page" fontSize='large' onClick={this.onNextClick}>arrow_forward</Icon>}</div>
                </div>
                <WeatherList
                    page={this.state.page}
                    onWeatherCardSelect={this.setChartCardData}
                    tampType={this.state.value}
                    selectDate={this.state.selectDate}
                />
                <div className="chart-wrapper">
                    <WeatherChart
                        chartData={this.state.chartData}
                    />
                </div>
                <div className="bottom-wrap">
                    <p>Temperature(°F/°C) vs Time(3 Hours)</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.weatherReducer.loading,
    weatherData: state.weatherReducer.weatherData
})

const mapDispatchToProps = dispatch => ({
    getWeatherData: () => dispatch(getWeatherData())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);