import configureStore from 'redux-mock-store';
import {getWeatherData,setWeatherDataFormat} from '../../src/actions/weatherActions';
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('select_actions', () => {
    const mockResponse = (status, statusText, response) => {
        return Promise.resolve(response);
    };
    const store = mockStore({loading: true})
    const data= {
        "cod": "200",
        "message": 0.0097,
        "cnt": 40,
        "list": [{
            "dt": 1564412400,
            "main": {
                "temp": 294.43,
                "temp_min": 293.621,
                "temp_max": 294.43,
                "pressure": 1011.74,
                "sea_level": 1011.74,
                "grnd_level": 957.38,
                "humidity": 79,
                "temp_kf": 0.8
            },
            "weather": [{
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }],
            "clouds": {"all": 91},
            "wind": {"speed": 2.19, "deg": 335.793},
            "sys": {"pod": "d"},
            "dt_txt": "2019-07-29 15:00:00"
        }, {
            "dt": 1564423200,
            "main": {
                "temp": 293.39,
                "temp_min": 292.79,
                "temp_max": 293.39,
                "pressure": 1011.54,
                "sea_level": 1011.54,
                "grnd_level": 957.02,
                "humidity": 85,
                "temp_kf": 0.6
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }],
            "clouds": {"all": 78},
            "wind": {"speed": 1.19, "deg": 265.436},
            "sys": {"pod": "d"},
            "dt_txt": "2019-07-29 18:00:00"
        }, {
            "dt": 1564434000,
            "main": {
                "temp": 290.3,
                "temp_min": 289.9,
                "temp_max": 290.3,
                "pressure": 1013.14,
                "sea_level": 1013.14,
                "grnd_level": 958.16,
                "humidity": 92,
                "temp_kf": 0.4
            },
            "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
            "clouds": {"all": 0},
            "wind": {"speed": 1.74, "deg": 275.691},
            "sys": {"pod": "n"},
            "dt_txt": "2019-07-29 21:00:00"
        }, {
            "dt": 1564444800,
            "main": {
                "temp": 289.39,
                "temp_min": 289.191,
                "temp_max": 289.39,
                "pressure": 1013.72,
                "sea_level": 1013.72,
                "grnd_level": 958.73,
                "humidity": 93,
                "temp_kf": 0.2
            },
            "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
            "clouds": {"all": 4},
            "wind": {"speed": 1.59, "deg": 263.517},
            "sys": {"pod": "n"},
            "dt_txt": "2019-07-30 00:00:00"
        }, {
            "dt": 1564455600,
            "main": {
                "temp": 288.5,
                "temp_min": 288.5,
                "temp_max": 288.5,
                "pressure": 1013.87,
                "sea_level": 1013.87,
                "grnd_level": 958.85,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [{
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }],
            "clouds": {"all": 30},
            "wind": {"speed": 2.49, "deg": 244.628},
            "sys": {"pod": "n"},
            "dt_txt": "2019-07-30 03:00:00"
        }, {
            "dt": 1564466400,
            "main": {
                "temp": 290.941,
                "temp_min": 290.941,
                "temp_max": 290.941,
                "pressure": 1014.64,
                "sea_level": 1014.64,
                "grnd_level": 959.7,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [{
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }],
            "clouds": {"all": 45},
            "wind": {"speed": 2.33, "deg": 254.467},
            "sys": {"pod": "d"},
            "dt_txt": "2019-07-30 06:00:00"
        }, {
            "dt": 1564477200,
            "main": {
                "temp": 294.356,
                "temp_min": 294.356,
                "temp_max": 294.356,
                "pressure": 1014.53,
                "sea_level": 1014.53,
                "grnd_level": 960.04,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
            "clouds": {"all": 62},
            "wind": {"speed": 3.32, "deg": 255.449},
            "rain": {"3h": 0.375},
            "sys": {"pod": "d"},
            "dt_txt": "2019-07-30 09:00:00"
        }, {
            "dt": 1564488000,
            "main": {
                "temp": 297.4,
                "temp_min": 297.4,
                "temp_max": 297.4,
                "pressure": 1013.6,
                "sea_level": 1013.6,
                "grnd_level": 959.3,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
            "clouds": {"all": 58},
            "wind": {"speed": 2.95, "deg": 272.116},
            "rain": {"3h": 0.375},
            "sys": {"pod": "d"},
            "dt_txt": "2019-07-30 12:00:00"
        }, {
            "dt": 1564498800,
            "main": {
                "temp": 297.629,
                "temp_min": 297.629,
                "temp_max": 297.629,
                "pressure": 1013.39,
                "sea_level": 1013.39,
                "grnd_level": 959.05,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
            "clouds": {"all": 0},
            "wind": {"speed": 3.49, "deg": 301.542},
            "rain": {"3h": 0.125},
            "sys": {"pod": "d"},
            "dt_txt": "2019-07-30 15:00:00"
        }, {
            "dt": 1564509600,
            "main": {
                "temp": 293.9,
                "temp_min": 293.9,
                "temp_max": 293.9,
                "pressure": 1013.86,
                "sea_level": 1013.86,
                "grnd_level": 959.26,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
            "clouds": {"all": 2},
            "wind": {"speed": 3.43, "deg": 304.907},
            "rain": {"3h": 1.125},
            "sys": {"pod": "d"},
            "dt_txt": "2019-07-30 18:00:00"
        }, {
            "dt": 1564520400,
            "main": {
                "temp": 291.051,
                "temp_min": 291.051,
                "temp_max": 291.051,
                "pressure": 1016.56,
                "sea_level": 1016.56,
                "grnd_level": 961.03,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }],
            "clouds": {"all": 57},
            "wind": {"speed": 1.81, "deg": 260.704},
            "sys": {"pod": "n"},
            "dt_txt": "2019-07-30 21:00:00"
        }, {
            "dt": 1564531200,
            "main": {
                "temp": 289.5,
                "temp_min": 289.5,
                "temp_max": 289.5,
                "pressure": 1016.37,
                "sea_level": 1016.37,
                "grnd_level": 960.72,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }],
            "clouds": {"all": 53},
            "wind": {"speed": 3.19, "deg": 255.824},
            "sys": {"pod": "n"},
            "dt_txt": "2019-07-31 00:00:00"
        }, {
            "dt": 1564542000,
            "main": {
                "temp": 287.5,
                "temp_min": 287.5,
                "temp_max": 287.5,
                "pressure": 1016.98,
                "sea_level": 1016.98,
                "grnd_level": 961.48,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }],
            "clouds": {"all": 59},
            "wind": {"speed": 3.71, "deg": 292.546},
            "sys": {"pod": "n"},
            "dt_txt": "2019-07-31 03:00:00"
        }, {
            "dt": 1564552800,
            "main": {
                "temp": 289.3,
                "temp_min": 289.3,
                "temp_max": 289.3,
                "pressure": 1017.58,
                "sea_level": 1017.58,
                "grnd_level": 962.42,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }],
            "clouds": {"all": 69},
            "wind": {"speed": 3.56, "deg": 284.31},
            "sys": {"pod": "d"},
            "dt_txt": "2019-07-31 06:00:00"
        }, {
            "dt": 1564563600,
            "main": {
                "temp": 291.9,
                "temp_min": 291.9,
                "temp_max": 291.9,
                "pressure": 1018.58,
                "sea_level": 1018.58,
                "grnd_level": 963.46,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }],
            "clouds": {"all": 75},
            "wind": {"speed": 4.69, "deg": 303.883},
            "sys": {"pod": "d"},
            "dt_txt": "2019-07-31 09:00:00"
        }, {
            "dt": 1564574400,
            "main": {
                "temp": 288.732,
                "temp_min": 288.732,
                "temp_max": 288.732,
                "pressure": 1018.46,
                "sea_level": 1018.46,
                "grnd_level": 963.83,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
            "clouds": {"all": 87},
            "wind": {"speed": 4.44, "deg": 330.577},
            "rain": {"3h": 0.188},
            "sys": {"pod": "d"},
            "dt_txt": "2019-07-31 12:00:00"
        }, {
            "dt": 1564585200,
            "main": {
                "temp": 292.112,
                "temp_min": 292.112,
                "temp_max": 292.112,
                "pressure": 1018.2,
                "sea_level": 1018.2,
                "grnd_level": 963.15,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }],
            "clouds": {"all": 83},
            "wind": {"speed": 1.77, "deg": 315.892},
            "sys": {"pod": "d"},
            "dt_txt": "2019-07-31 15:00:00"
        }, {
            "dt": 1564596000,
            "main": {
                "temp": 291.176,
                "temp_min": 291.176,
                "temp_max": 291.176,
                "pressure": 1018.67,
                "sea_level": 1018.67,
                "grnd_level": 963.46,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }],
            "clouds": {"all": 55},
            "wind": {"speed": 1.21, "deg": 332.228},
            "sys": {"pod": "d"},
            "dt_txt": "2019-07-31 18:00:00"
        }, {
            "dt": 1564606800,
            "main": {
                "temp": 287.217,
                "temp_min": 287.217,
                "temp_max": 287.217,
                "pressure": 1019.75,
                "sea_level": 1019.75,
                "grnd_level": 964.13,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
            "clouds": {"all": 0},
            "wind": {"speed": 0.55, "deg": 211.267},
            "sys": {"pod": "n"},
            "dt_txt": "2019-07-31 21:00:00"
        }, {
            "dt": 1564617600,
            "main": {
                "temp": 286.627,
                "temp_min": 286.627,
                "temp_max": 286.627,
                "pressure": 1018.58,
                "sea_level": 1018.58,
                "grnd_level": 963.04,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
            "clouds": {"all": 0},
            "wind": {"speed": 1.2, "deg": 196.676},
            "sys": {"pod": "n"},
            "dt_txt": "2019-08-01 00:00:00"
        }, {
            "dt": 1564628400,
            "main": {
                "temp": 285.811,
                "temp_min": 285.811,
                "temp_max": 285.811,
                "pressure": 1018.32,
                "sea_level": 1018.32,
                "grnd_level": 962.78,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01n"}],
            "clouds": {"all": 0},
            "wind": {"speed": 0.92, "deg": 206.76},
            "sys": {"pod": "n"},
            "dt_txt": "2019-08-01 03:00:00"
        }, {
            "dt": 1564639200,
            "main": {
                "temp": 288.964,
                "temp_min": 288.964,
                "temp_max": 288.964,
                "pressure": 1017.6,
                "sea_level": 1017.6,
                "grnd_level": 962.45,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [{"id": 800, "main": "Clear", "description": "clear sky", "icon": "01d"}],
            "clouds": {"all": 0},
            "wind": {"speed": 0.81, "deg": 187.002},
            "sys": {"pod": "d"},
            "dt_txt": "2019-08-01 06:00:00"
        }, {
            "dt": 1564650000,
            "main": {
                "temp": 293.924,
                "temp_min": 293.924,
                "temp_max": 293.924,
                "pressure": 1017.04,
                "sea_level": 1017.04,
                "grnd_level": 962.59,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [{
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }],
            "clouds": {"all": 33},
            "wind": {"speed": 0.36, "deg": 76.002},
            "sys": {"pod": "d"},
            "dt_txt": "2019-08-01 09:00:00"
        }, {
            "dt": 1564660800,
            "main": {
                "temp": 296.573,
                "temp_min": 296.573,
                "temp_max": 296.573,
                "pressure": 1014.87,
                "sea_level": 1014.87,
                "grnd_level": 960.59,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [{
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }],
            "clouds": {"all": 27},
            "wind": {"speed": 1.16, "deg": 12.662},
            "sys": {"pod": "d"},
            "dt_txt": "2019-08-01 12:00:00"
        }, {
            "dt": 1564671600,
            "main": {
                "temp": 296.129,
                "temp_min": 296.129,
                "temp_max": 296.129,
                "pressure": 1014.16,
                "sea_level": 1014.16,
                "grnd_level": 959.79,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [{
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }],
            "clouds": {"all": 93},
            "wind": {"speed": 0.38, "deg": 26.836},
            "sys": {"pod": "d"},
            "dt_txt": "2019-08-01 15:00:00"
        }, {
            "dt": 1564682400,
            "main": {
                "temp": 293.3,
                "temp_min": 293.3,
                "temp_max": 293.3,
                "pressure": 1014.28,
                "sea_level": 1014.28,
                "grnd_level": 959.55,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }],
            "clouds": {"all": 81},
            "wind": {"speed": 1.75, "deg": 339.897},
            "sys": {"pod": "d"},
            "dt_txt": "2019-08-01 18:00:00"
        }, {
            "dt": 1564693200,
            "main": {
                "temp": 289.6,
                "temp_min": 289.6,
                "temp_max": 289.6,
                "pressure": 1014.79,
                "sea_level": 1014.79,
                "grnd_level": 959.83,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [{
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }],
            "clouds": {"all": 44},
            "wind": {"speed": 1.64, "deg": 25.454},
            "sys": {"pod": "n"},
            "dt_txt": "2019-08-01 21:00:00"
        }, {
            "dt": 1564704000,
            "main": {
                "temp": 288.067,
                "temp_min": 288.067,
                "temp_max": 288.067,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 959.16,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }],
            "clouds": {"all": 71},
            "wind": {"speed": 0.89, "deg": 59.29},
            "sys": {"pod": "n"},
            "dt_txt": "2019-08-02 00:00:00"
        }, {
            "dt": 1564714800,
            "main": {
                "temp": 287.336,
                "temp_min": 287.336,
                "temp_max": 287.336,
                "pressure": 1012.99,
                "sea_level": 1012.99,
                "grnd_level": 958.1,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10n"}],
            "clouds": {"all": 100},
            "wind": {"speed": 0.55, "deg": 133.75},
            "rain": {"3h": 0.625},
            "sys": {"pod": "n"},
            "dt_txt": "2019-08-02 03:00:00"
        }, {
            "dt": 1564725600,
            "main": {
                "temp": 288.383,
                "temp_min": 288.383,
                "temp_max": 288.383,
                "pressure": 1012.54,
                "sea_level": 1012.54,
                "grnd_level": 957.78,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
            "clouds": {"all": 95},
            "wind": {"speed": 2.3, "deg": 314.876},
            "rain": {"3h": 2.437},
            "sys": {"pod": "d"},
            "dt_txt": "2019-08-02 06:00:00"
        }, {
            "dt": 1564736400,
            "main": {
                "temp": 288.939,
                "temp_min": 288.939,
                "temp_max": 288.939,
                "pressure": 1013.96,
                "sea_level": 1013.96,
                "grnd_level": 959.46,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [{"id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d"}],
            "clouds": {"all": 100},
            "wind": {"speed": 2.96, "deg": 241.79},
            "rain": {"3h": 5.375},
            "sys": {"pod": "d"},
            "dt_txt": "2019-08-02 09:00:00"
        }, {
            "dt": 1564747200,
            "main": {
                "temp": 293.832,
                "temp_min": 293.832,
                "temp_max": 293.832,
                "pressure": 1013.58,
                "sea_level": 1013.58,
                "grnd_level": 958.64,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
            "clouds": {"all": 83},
            "wind": {"speed": 3.31, "deg": 236.838},
            "rain": {"3h": 0.5},
            "sys": {"pod": "d"},
            "dt_txt": "2019-08-02 12:00:00"
        }, {
            "dt": 1564758000,
            "main": {
                "temp": 293.8,
                "temp_min": 293.8,
                "temp_max": 293.8,
                "pressure": 1012.21,
                "sea_level": 1012.21,
                "grnd_level": 957.6,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
            "clouds": {"all": 70},
            "wind": {"speed": 4.08, "deg": 279.954},
            "rain": {"3h": 2},
            "sys": {"pod": "d"},
            "dt_txt": "2019-08-02 15:00:00"
        }, {
            "dt": 1564768800,
            "main": {
                "temp": 290.795,
                "temp_min": 290.795,
                "temp_max": 290.795,
                "pressure": 1012.45,
                "sea_level": 1012.45,
                "grnd_level": 957.6,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
            "clouds": {"all": 35},
            "wind": {"speed": 3.39, "deg": 249.675},
            "rain": {"3h": 1},
            "sys": {"pod": "d"},
            "dt_txt": "2019-08-02 18:00:00"
        }, {
            "dt": 1564779600,
            "main": {
                "temp": 287.9,
                "temp_min": 287.9,
                "temp_max": 287.9,
                "pressure": 1014.53,
                "sea_level": 1014.53,
                "grnd_level": 958.91,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10n"}],
            "clouds": {"all": 0},
            "wind": {"speed": 5.02, "deg": 251.753},
            "rain": {"3h": 0.125},
            "sys": {"pod": "n"},
            "dt_txt": "2019-08-02 21:00:00"
        }, {
            "dt": 1564790400,
            "main": {
                "temp": 286.913,
                "temp_min": 286.913,
                "temp_max": 286.913,
                "pressure": 1014.65,
                "sea_level": 1014.65,
                "grnd_level": 959.05,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10n"}],
            "clouds": {"all": 14},
            "wind": {"speed": 4.7, "deg": 255.783},
            "rain": {"3h": 0.625},
            "sys": {"pod": "n"},
            "dt_txt": "2019-08-03 00:00:00"
        }, {
            "dt": 1564801200,
            "main": {
                "temp": 285.8,
                "temp_min": 285.8,
                "temp_max": 285.8,
                "pressure": 1014.94,
                "sea_level": 1014.94,
                "grnd_level": 959.23,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [{"id": 801, "main": "Clouds", "description": "few clouds", "icon": "02n"}],
            "clouds": {"all": 19},
            "wind": {"speed": 4.17, "deg": 266.936},
            "sys": {"pod": "n"},
            "dt_txt": "2019-08-03 03:00:00"
        }, {
            "dt": 1564812000,
            "main": {
                "temp": 287.7,
                "temp_min": 287.7,
                "temp_max": 287.7,
                "pressure": 1015.25,
                "sea_level": 1015.25,
                "grnd_level": 959.78,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [{"id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d"}],
            "clouds": {"all": 14},
            "wind": {"speed": 4.55, "deg": 282.312},
            "sys": {"pod": "d"},
            "dt_txt": "2019-08-03 06:00:00"
        }, {
            "dt": 1564822800,
            "main": {
                "temp": 291,
                "temp_min": 291,
                "temp_max": 291,
                "pressure": 1014.84,
                "sea_level": 1014.84,
                "grnd_level": 959.99,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
            "clouds": {"all": 46},
            "wind": {"speed": 4.26, "deg": 292.803},
            "rain": {"3h": 0.438},
            "sys": {"pod": "d"},
            "dt_txt": "2019-08-03 09:00:00"
        }, {
            "dt": 1564833600,
            "main": {
                "temp": 293.3,
                "temp_min": 293.3,
                "temp_max": 293.3,
                "pressure": 1014.01,
                "sea_level": 1014.01,
                "grnd_level": 959.41,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
            "clouds": {"all": 40},
            "wind": {"speed": 5.56, "deg": 305.353},
            "rain": {"3h": 0.312},
            "sys": {"pod": "d"},
            "dt_txt": "2019-08-03 12:00:00"
        }],
        "city": {
            "id": 2867714,
            "name": "Munich",
            "coord": {"lat": 48.1371, "lon": 11.5754},
            "country": "DE",
            "population": 1260391,
            "timezone": 7200
        }
    }
    it('Dispatches the correct action and payload', () => {
        window.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve(mockResponse(200, null,
                {
                    json: () => {
                        return data
                    }
                })))
        return store.dispatch(getWeatherData())
            .then(() => {
                const expectedActions = store.getActions();
                expect(expectedActions.length).toBe(2);
                const expectedActionsLoader =
                    {
                        payload: false,
                        type: 'SET_LOADER',
                    }
                const expectedActionsData =
                    {
                        payload: setWeatherDataFormat(data.list),
                        type: 'GET_WEATHER_DATA',
                    }
                expect(expectedActions).toContainEqual(expectedActionsLoader);
                expect(expectedActions).toContainEqual(expectedActionsData);
            })
    });
});