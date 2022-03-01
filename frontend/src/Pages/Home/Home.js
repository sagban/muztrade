import {React, useRef, useEffect} from "react";
import './Home.css'
import myData from './data.json';
import axios from "axios/index";
import {createChart, CrosshairMode} from 'lightweight-charts';

const Home = () => {
    const chartContainerRef = useRef();
    useEffect(() => {
        handleChart();
    });

    const getDJIAData = () => {
        const chart = myData.chart;
        const timestamps = chart.result[0].timestamp;
        const values = chart.result[0].indicators.adjclose[0].adjclose;
        let chartData = []
        timestamps.forEach(
            (element, index) => {
                const date = new Date(element * 1000); // Unix time in ms
                const prettyDate = date.toUTCString()
                chartData.push({
                    time: prettyDate,
                    value: values[index]
                });
            }
        );
        return chartData;
    }

    const handleChart = () => {
        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 500,
            crosshair: {
                mode: CrosshairMode.Normal
            },
        });
        const lineSeries = chart.addLineSeries();
        const data = getDJIAData();
        lineSeries.setData(data);
    }

    return (<div>
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-md-12"}>
                    <div ref={chartContainerRef} className="chart-container"/>
                </div>

            </div>

        </div>

    </div>)
}

export default Home;
