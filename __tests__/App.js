import React from 'react';
import {shallow} from 'enzyme';
import RadioGroup from '@material-ui/core/RadioGroup';

import {App} from '../src/App';

const mockData = [
    {
        avgCelTemp: 18.47666666666667,
        avgFahTemp: 65.258,
        date: "2019-07-28",
        weather: [
            {
                celcius_temp: 20.670000000000016,
                celcius_temp_max: 20.826000000000022,
                celcius_temp_min: 20.670000000000016,
                fahrenheit_temp: 69.20600000000003,
                fahrenheit_temp_max: 69.48680000000004,
                fahrenheit_temp_min: 69.20600000000003,
                dt: 1564326000,
                main: {
                    temp: 293.82,
                    temp_min: 293.82,
                    temp_max: 293.976,
                    pressure: 1002.67,
                    sea_level: 1002.67,
                    grnd_level: 948.23,
                    humidity: 86,
                    temp_kf: -0.16
                },
                weather: [{id: 501, main: "Rain", description: "moderate rain", icon: "10d"}],
                clouds: {all: 100},
                wind: {speed: 4.34, deg: 314.869},
                rain: {"3h": 6.875},
                sys: {pod: "d"},
                dt_txt: "2019-07-28 15:00:00"
            }
        ],
    },
    {
        avgCelTemp: 18.47666666666667,
        avgFahTemp: 65.258,
        date: "2019-07-28",
        weather: [
            {
                celcius_temp: 20.670000000000016,
                celcius_temp_max: 20.826000000000022,
                celcius_temp_min: 20.670000000000016,
                fahrenheit_temp: 69.20600000000003,
                fahrenheit_temp_max: 69.48680000000004,
                fahrenheit_temp_min: 69.20600000000003,
                dt: 1564326000,
                main: {
                    temp: 293.82,
                    temp_min: 293.82,
                    temp_max: 293.976,
                    pressure: 1002.67,
                    sea_level: 1002.67,
                    grnd_level: 948.23,
                    humidity: 86,
                    temp_kf: -0.16
                },
                weather: [{id: 501, main: "Rain", description: "moderate rain", icon: "10d"}],
                clouds: {all: 100},
                wind: {speed: 4.34, deg: 314.869},
                rain: {"3h": 6.875},
                sys: {pod: "d"},
                dt_txt: "2019-07-28 15:00:00"
            }
        ],
    },
    {
        avgCelTemp: 18.47666666666667,
        avgFahTemp: 65.258,
        date: "2019-07-28",
        weather: [
            {
                celcius_temp: 20.670000000000016,
                celcius_temp_max: 20.826000000000022,
                celcius_temp_min: 20.670000000000016,
                fahrenheit_temp: 69.20600000000003,
                fahrenheit_temp_max: 69.48680000000004,
                fahrenheit_temp_min: 69.20600000000003,
                dt: 1564326000,
                main: {
                    temp: 293.82,
                    temp_min: 293.82,
                    temp_max: 293.976,
                    pressure: 1002.67,
                    sea_level: 1002.67,
                    grnd_level: 948.23,
                    humidity: 86,
                    temp_kf: -0.16
                },
                weather: [{id: 501, main: "Rain", description: "moderate rain", icon: "10d"}],
                clouds: {all: 100},
                wind: {speed: 4.34, deg: 314.869},
                rain: {"3h": 6.875},
                sys: {pod: "d"},
                dt_txt: "2019-07-28 15:00:00"
            }
        ],
    },
    {
        avgCelTemp: 18.47666666666667,
        avgFahTemp: 65.258,
        date: "2019-07-28",
        weather: [
            {
                celcius_temp: 20.670000000000016,
                celcius_temp_max: 20.826000000000022,
                celcius_temp_min: 20.670000000000016,
                fahrenheit_temp: 69.20600000000003,
                fahrenheit_temp_max: 69.48680000000004,
                fahrenheit_temp_min: 69.20600000000003,
                dt: 1564326000,
                main: {
                    temp: 293.82,
                    temp_min: 293.82,
                    temp_max: 293.976,
                    pressure: 1002.67,
                    sea_level: 1002.67,
                    grnd_level: 948.23,
                    humidity: 86,
                    temp_kf: -0.16
                },
                weather: [{id: 501, main: "Rain", description: "moderate rain", icon: "10d"}],
                clouds: {all: 100},
                wind: {speed: 4.34, deg: 314.869},
                rain: {"3h": 6.875},
                sys: {pod: "d"},
                dt_txt: "2019-07-28 15:00:00"
            }
        ],
    },
];
describe('App component', () => {
    let wrapper;
    let instance;
    let mockedCallbackResolve = () => Promise.resolve(mockData);
    let mockedCallbackReject = () => Promise.reject({data: mockData, errMsg: "API Error:- get Data From Local"});
    let promise = Promise.resolve(mockData);
    const getWeatherData = () => {
        return promise.then(mockedCallbackResolve).catch(mockedCallbackReject);
    };

    const props = {
        loading: true,
        weatherData: mockData,
        getWeatherData: getWeatherData,
    };

    beforeAll(() => {
        wrapper = shallow(<App {...props}/>);
        wrapper.setProps({loading: false})
        wrapper.update();
        instance = wrapper.instance();
    })

    afterAll(() => {
        wrapper.reset();
    })

    it('should componentDidMount is called', () => {
        expect(instance.state).toHaveProperty('currentData');
        expect(instance.state).toHaveProperty('selectDate');
    });

    it('should data is not from local', () => {
        expect(instance.state.errText).toEqual('');
    });

    it('should render RadioGroup', () => {
        const radioGroup = wrapper.find(RadioGroup);
        expect(radioGroup).toHaveLength(1);
        radioGroup.simulate('change', {target: {value: 'celcius'}});
        expect(instance.state.value).toEqual('celcius');
    });

    it('should handle next page', () => {
        wrapper.setState({page: 3});
        const icon = wrapper.find('#next-page');
        expect(icon).toHaveLength(1);
        icon.simulate('click');
        expect(instance.state.page).toEqual(4);
    })

    it('should handle previous page', () => {
        wrapper.setState({page: 3});
        const icon = wrapper.find('#previous-page');
        expect(icon).toHaveLength(1);
        icon.simulate('click');
        expect(instance.state.page).toEqual(2);
    })

    it('should set chart card data', () => {
        const selectedCard = {
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
                    main: {
                        grnd_level: 954.32,
                        humidity: 94,
                        pressure: 1008.94,
                        sea_level: 1008.94,
                        temp: 288.24,
                        temp_kf: -0.71,
                        temp_max: 288.951,
                        temp_min: 288.24,
                    },
                    rain: {
                        "3h": 0.625,
                    },
                    weather: {
                        description: "light rain",
                        icon: "10n",
                        id: 500,
                        main: "Rain",
                    },
                    wind: {
                        deg: 278.703,
                        speed: 6.84,
                    },
                    sys: {
                        pod: "n",
                    }
                }
            ]
        }
        instance.setChartCardData(selectedCard);
        expect(instance.state.selectDate).toEqual("2019-07-29");
        expect(instance.state.chartData.length).toEqual(1);
        expect(instance.state.currentData).toMatchObject(selectedCard);
    })

    it('should check sun is shining and its 30 degrees or more than 30', () => {
        const dataObj = {
            celcius_temp: 30.670000000000016,
            celcius_temp_max: 30.826000000000022,
            celcius_temp_min: 30.670000000000016,
            fahrenheit_temp: 69.20600000000003,
            fahrenheit_temp_max: 69.48680000000004,
            fahrenheit_temp_min: 69.20600000000003,
            dt: 1564326000,
            main: {
                temp: 293.82,
                temp_min: 293.82,
                temp_max: 293.976,
                pressure: 1002.67,
                sea_level: 1002.67,
                grnd_level: 948.23,
                humidity: 86,
                temp_kf: -0.16
            },
            weather: [{id: 501, main: "Rain", description: "moderate rain", icon: "10d"}],
            clouds: {all: 100},
            wind: {speed: 4.34, deg: 314.869},
            sys: {pod: "d"},
            dt_txt: "2019-07-28 15:00:00"
        };
        expect(dataObj).not.toHaveProperty('rain');
        expect(dataObj.celcius_temp).toBeGreaterThanOrEqual(30);
    });

    it('should check rain and temperature between 0-30 degree', () => {
        const dataObj = {
            celcius_temp: 20.670000000000016,
            celcius_temp_max: 20.826000000000022,
            celcius_temp_min: 20.670000000000016,
            fahrenheit_temp: 69.20600000000003,
            fahrenheit_temp_max: 69.48680000000004,
            fahrenheit_temp_min: 69.20600000000003,
            dt: 1564326000,
            main: {
                temp: 293.82,
                temp_min: 293.82,
                temp_max: 293.976,
                pressure: 1002.67,
                sea_level: 1002.67,
                grnd_level: 948.23,
                humidity: 86,
                temp_kf: -0.16
            },
            weather: [{id: 501, main: "Rain", description: "moderate rain", icon: "10d"}],
            clouds: {all: 100},
            wind: {speed: 4.34, deg: 314.869},
            rain: {"3h": 6.875},
            sys: {pod: "d"},
            dt_txt: "2019-07-28 15:00:00"
        };
        expect(dataObj.celcius_temp).toBeLessThan(30);
        expect(dataObj.celcius_temp).toBeGreaterThan(0);
        expect(dataObj).toHaveProperty('rain');
    })

    it('should check snow and temperature less than 0 degree', () => {
        const dataObj = {
            celcius_temp: 1.885,
            dt: 1487354400,
            main: {
                temp: 275.035,
                temp_min: 275.035,
                temp_max: 275.035,
                pressure: 966.39,
                sea_level: 1040.65,
                grnd_level: 966.39,
                humidity: 95,
                temp_kf: 0
            },
            weather: [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10n"}],
            clouds: {"all": 88},
            wind: {"speed": 3.17, "deg": 258.001},
            rain: {"3h": 0.7},
            snow: {"3h": 0.0775},
            sys: {"pod": "n"},
            dt_txt: "2017-02-17 18:00:00"
        }
        expect(dataObj).toHaveProperty('rain');
        expect(dataObj).toHaveProperty('snow');
        expect(dataObj.celcius_temp).toBeLessThan(3);
    })
});
