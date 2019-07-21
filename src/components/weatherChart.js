import * as React from 'react';
import {
    Chart,
    BarSeries,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import {Animation} from '@devexpress/dx-react-chart';

export default class WeatherChart extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: [{time: "0PM-3PM", weatherList: 0}],
        };
        console.log('props.chartData', props.chartData);
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
                <Animation/>
            </Chart>
        );
    }
}