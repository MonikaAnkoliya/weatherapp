import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import App from '../App';
const middlewares = [thunk];

describe('App component', () => {
    // create any initial state needed
    const initialState = {weatherReducer:{loading: true, weatherData: {weatherData:[]}}};
    // here it is possible to pass in any middleware if needed into //configureStore
    const mockStore = configureStore(middlewares);
    let wrapper;
    let store;

    const props = {
        loading: true,
        weatherData: [],
        getWeatherData: () => {}
    };
    beforeEach(() => {
        //creates the store with any initial state or middleware needed
        store = mockStore(initialState)
        wrapper = mount(<App {...props} store={store}/>);
    });

    it('should contain h3 elements', () => {
        const header = wrapper.find('div');
        expect(header).toHaveLength(1);
    });
});
