import * as React from 'react';
import {
    Chart,
    BarSeries,
    ArgumentAxis,
    ValueAxis,
    Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import {Animation, EventTracker, HoverState} from '@devexpress/dx-react-chart';


export default class WeatherChart extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {weatherList: 69.87, time: "6-9"},
            ],
        };
    }

    componentDidMount() {
        this.setState({
            data: this.props.chartData,
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            data: nextProps.chartData,
        })
    }

    render() {
        return (
            <Chart
                data={this.state.data}
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
}