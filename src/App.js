import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import {getWeatherData} from './actions/weatherActions';
import WeatherList from './components/weatherList';
import WeatherChart from './components/weatherChart';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'fahrenheit',
            page: 0,
            chartData: [],
            selectedCard: {},
        }
    }

    componentDidMount() {
        this.props.getWeatherData().then((res) => {
            this.setState({
                currentData: res[0]
            },()=>{
                console.log('called did');
                this.setChartCardData(res[0])
            })
        })
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        },()=>{
            this.setChartCardData();
        })
    };

    onNextClick = () => {
        if ((this.props.weatherData.length / 3) - 1 !== this.state.page) {
            this.setState({ page: this.state.page + 1 })
        }
    };

    onPreviousClick = () => {
        this.setState({
            page: this.state.page - 1
        })
    };

    setChartCardData = (data = this.state.currentData) => {
        const chartData = data.weather.map((data1,inde) => {
            const time = this.formatAMPM(new Date(data1.dt_txt));
            return {
                weatherList: this.state.value === 'fahrenheit' ?
                    parseFloat(data1.fahrenheit_temp.toFixed(2)) :
                    parseFloat(data1.celcius_temp.toFixed(2)),
                time: time
            };
        });
        this.setState({
            chartData,
            currentData: data,
        })
    };

    formatAMPM = (date) => {
        let hours = date.getHours();
        let hours2 = date.getHours() + 3;
        let ampm = hours >= 12 ? 'PM' : 'AM';
        let ampm2 = hours2 >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        hours2 = hours2 % 12;
        hours2 = hours2 ? hours2 : 12; // the hour '0' should be '12'
        const strTime = hours + ampm;
        const strTime2 = hours2 + ampm2;
        return strTime + "-" + strTime2;
    };


    render() {
        const isNext = (this.props.weatherData.length / 3) - 1 !== this.state.page;
        if (this.props.loading) {
            return <div className="loading"><h3>Loading.....</h3></div>
        }
        if (this.props.weatherData.length === 0) {
            return <div className="loading"><h3>No Data Available</h3></div>
        }
        return (
            <div className="main-wrapper">
                <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    value={this.state.value}
                    onChange={this.handleChange}
                    row
                    className="radio-wrapper"
                >
                    <FormControlLabel value="celcius" control={<Radio/>} label="Celcius"/>
                    <FormControlLabel value="fahrenheit" control={<Radio/>} label="Fahrenheit"/>
                </RadioGroup>
                <div className="pagination-wrapper">
                    {this.state.page > 0 && <Icon fontSize='large' onClick={this.onPreviousClick}>arrow_back</Icon>}
                    {isNext &&
                    <Icon className="icon-right" fontSize='large' onClick={this.onNextClick}>arrow_forward</Icon>}
                </div>
                <WeatherList
                    page={this.state.page}
                    onWeatherCardSelect={this.setChartCardData}
                    tampType={this.state.value}
                />
                <div className="chart-wrapper">
                    <WeatherChart
                        chartData={this.state.chartData}
                    />
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