import React from 'react';
import { shallow} from 'enzyme';
import WeatherCard from '../../src/components/weatherCard';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const selectedCard ={
    avgCelTemp: 17.28475000000003,
    avgFahTemp: 63.112550000000056,
    date: "2019-07-29",
    weather: [
        {
            celcius_temp: 15.090000000000032,
            celcius_temp_max: 15.801000000000045,
            celcius_temp_min: 15.090000000000032,
            clouds: {all: 100},
            dt: 1564358400,
            dt_txt: "2019-07-29 00:00:00",
            fahrenheit_temp: 59.162000000000056,
            fahrenheit_temp_max: 60.44180000000008,
            fahrenheit_temp_min: 59.162000000000056,
            main:{
                grnd_level: 954.32,
                humidity: 94,
                pressure: 1008.94,
                sea_level: 1008.94,
                temp: 288.24,
                temp_kf: -0.71,
                temp_max: 288.951,
                temp_min: 288.24,
            },
            rain:{
                "3h": 0.625,
            },
            weather:[{
                description: "light rain",
                icon: "10n",
                id: 500,
                main: "Rain",
            }],
            wind:{
                deg: 278.703,
                speed: 6.84,
            },
            sys:{
                pod: "n",
            }
        }
    ]
}

describe('App component', () => {
    let wrapper;
    let instance;
    const props = {
        data: selectedCard,
        selectDate: "2019-07-29",
        onWeatherCardSelect: jest.fn(),
        tampType: "fahrenheit"
    };

    beforeAll(() => {
        wrapper = shallow(<WeatherCard {...props}/>);
        instance = wrapper.instance();
    });

    afterAll(()=>{
        wrapper.reset();
    });

    it('should render Card and CardContent', () => {
        const card = wrapper.find(Card);
        const cardContent = wrapper.find(CardContent);
        expect(card).toHaveLength(1);
        expect(cardContent).toHaveLength(1);
    });

    it('handle card click', () => {
        const card = wrapper.find('#weather-card');
        card.simulate('click',selectedCard);
    });
});