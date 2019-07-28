export default (state = {loading: true, weatherData: []}, action) => {
    switch (action.type) {
        case 'GET_WEATHER_DATA':
            return {
                ...state,
                weatherData: action.payload
            }
        case 'SET_LOADER':
            return {
                ...state,
                loading: action.payload,
            }
        default:
            return state
    }
}