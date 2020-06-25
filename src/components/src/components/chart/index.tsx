import React from 'react';
import {Line} from 'react-chartjs-2';
import './index.css';

interface ChartProps{
    linedata: number[],
    color: string
}

const Chart = (props: ChartProps) => {
    const {linedata, color} = props;
    // console.log(linedata)

    return (
        <section className="chart">
            <Line 
                data={{
                    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
                    datasets: [
                        {
                            label: 'number of cases',
                            data: linedata,
                            backgroundColor: [color],
                            borderWidth: 4
                        }
                    ]
                    }}
                options={{
                    responsive: true,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    maxTicksLimit:5
                                },
                                gridLines: {
                                    display: false
                                }
                            }
                        ],
                        xAxes: [
                            {
                                ticks:{
                                    display: false
                                },
                                gridLines: {
                                    display: false
                                }
                            }
                        ]
                    }
                    }}/>
        </section>
    );
}

export default Chart;