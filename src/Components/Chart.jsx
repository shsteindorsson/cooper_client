import React from 'react'
import {Doughnut} from 'react-chartjs-2'

let labelCounters = {ex: 0, ab: 0, av: 0, be: 0, po: 0}

const Chart = (props) => {
	
	let message = props.message
	debugger;

	const extractMessages = (arg) => {
		labelCounters = {ex: 0, ab: 0, av: 0, be: 0, po: 0}
		arg.forEach(msg => {
			debugger
			if(msg.data.message === "Poor") {
				labelCounters["po"]++
				console.log("Poor") 
			}
			else if(msg.data.message === "Excellent") {
				labelCounters["ex"]++
				console.log("Excellent") 
			}
			else if(msg.data.message === "Average") {
				labelCounters["av"]++ 
				console.log("Average")
			}
			else if(msg.data.message === "Above Average") {
				labelCounters["ab"]++
				console.log("Above average") 
			}
			else if(msg.data.message === "Below Average") {
				labelCounters["be"]++ 
				console.log("Below average")
			}
		})
	}

	const data = {
		labels: [
			'Excellent',
			'Above Average',
			'Average',
			'Below Average',
			'Poor'
		],
		datasets: [{
			data: [labelCounters["ex"], labelCounters["ab"], labelCounters["av"], labelCounters["be"], labelCounters["po"]],
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

	extractMessages(message)

    return (
      <div>
        <h2>Doughnut Example</h2>
        <Doughnut data={data} />
      </div>
    )
}

export default Chart
