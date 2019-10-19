import React from 'react';
import { Line } from 'react-chartjs-2'; //import Line module from react-chart-js-2

const LineChart = (props) => {
  debugger;
  const getLabels = (collection) => {
    let labels = []
    collection.forEach(entry => {
      if (entry.data.message && labels.indexOf(entry.data.message) === -1) {
        labels.push(entry.data.message)
      }
    })
    return labels
  }

  const mydata = {
    labels: getLabels(props.entries),
    datasets: [
      {
        label: 'My Cooper Challenge Results',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  }
  return (
    <div>
      <h2>Line Chart Example</h2>
      <Line data={mydata} />
    </div>
  );
}

export default LineChart
