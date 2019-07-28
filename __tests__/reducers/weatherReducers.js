import weatherReducer from '../../src/reducers/weatherReducers';

describe('select_reducer', () => {
    it('returns the correct loading state', () => {
        const action = { type: 'SET_LOADER', payload: false };
        const expectedState = {loading: false};

        expect(weatherReducer(undefined, action)).toMatchObject(expectedState);
    });
    it('returns the correct weatherData state', () => {
        const action = { type: 'GET_WEATHER_DATA', payload: [{temp:23}] };
        const expectedState = {weatherData: [{temp:23}]};
        expect(weatherReducer(undefined, action)).toMatchObject(expectedState);
    });
    it('returns the default state', () => {
        const action = { type: 'dummy_action' };
        const expectedState = {loading: true, weatherData: []};
        expect(weatherReducer(undefined, action)).toMatchObject(expectedState);
    });
});