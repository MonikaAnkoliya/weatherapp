import React from 'react';
import { shallow} from 'enzyme';
import WeatherChart from '../../src/components/weatherChart';
import {
    Chart,
    BarSeries,
    ArgumentAxis,
    ValueAxis
} from '@devexpress/dx-react-chart-material-ui';

const chartData = [
    {weatherList: 69.87, time: "6-9"},
];

describe('App component', () => {
    let wrapper;
    let instance;
    beforeAll(() => {
        wrapper = shallow(<WeatherChart
            chartData={chartData}
        />);
        instance = wrapper.instance();
    });

    afterAll(()=>{
        wrapper.reset();
    });

    it('should render Chart, BarSeries, ArgumentAxis, ValueAxis', () => {
        const chart = wrapper.find(Chart);
        const barSeries = wrapper.find(BarSeries);
        const argumentAxis = wrapper.find(ArgumentAxis);
        const valueAxis = wrapper.find(ValueAxis);
        expect(chart).toHaveLength(1);
        expect(barSeries).toHaveLength(1);
        expect(argumentAxis).toHaveLength(1);
        expect(valueAxis).toHaveLength(1);
    });

});