import React from 'react'
import {Doughnut} from 'react-chartjs-2'

const Chart = (props) => {
	debugger;
	let message = props.message

	const data = {
		labels: [ message ],
		datasets: [{
			data: [300, 50, 100],
			backgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
			],
			hoverBackgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
			]
		}]
	}

    return (
      <div>
        <h2>Doughnut Example</h2>
        <Doughnut data={data} />
      </div>
    )
}

export default Chart
