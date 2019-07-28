import React, {Component} from 'react';
import {connect} from 'react-redux';
import WeatherCard from './components/weatherCard';

class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherList: [],
        }
    }

    componentDidMount() {
        const data = [];
        for(let i=this.props.page; i < 3; i++){
            data.push(this.props.weatherData[i])
        }
        this.setState({
            weatherList: data
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const data = [];
        for(let i=nextProps.page*3; i < nextProps.page*3+3; i++){
            data.push(nextProps.weatherData[i])
        }
        this.setState({
            weatherList: data
        })
    }

    render() {
        return (
            <div className="card-wrapper">
                {this.state.weatherList.map((data, index)=>{
                    return (
                        <WeatherCard
                            key={index}
                            data={data}
                            onWeatherCardSelect={this.props.onWeatherCardSelect}
                            tampType={this.props.tampType}
                            selectDate={this.props.selectDate}
                        />
                    )
                })}
            </div>

        );
    }
}

const mapStateToProps = state => ({
    weatherData: state.weatherReducer.weatherData
});


export default connect(mapStateToProps, {})(WeatherList);