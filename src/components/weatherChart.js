import * as React from 'react';
import {
    Chart,
    BarSeries,
    ArgumentAxis,
    ValueAxis,
    Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import {Animation, EventTracker, HoverState} from '@devexpress/dx-react-chart';

const WeatherChart = ({chartData}) => {
    if(chartData.length === 0){
        return null;
    }
    return (
        <Chart
            data={chartData}
            height={200}
        >
            <ArgumentAxis />
            <ValueAxis/>

            <BarSeries
                valueField="weatherList"
                argumentField="time"
            />
            <EventTracker />
            <HoverState />
            <Tooltip/>
            <Animation/>
        </Chart>
    );
}
export default WeatherChart;