import React, { Component } from 'react'
import { getData } from '../Modules/PerformanceData'
import { Line } from 'react-chartjs-2'

class DisplayPerformanceData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      performanceData: null,
      distanceData: null
    }
  }

  componentDidMount() {
    this.getPerformanceData()
  }
  
  async getPerformanceData() {
    let result = await getData()
    this.setState({ 
      performanceData: result.data.entries,
      distanceData: result.data.entries
    }, () => { 
      this.props.indexUpdated()
    })
  }

  // async getUserDistances() {
  //   let result = await getData()
  //   let dataEntries = result.data.entries
  //   let distances = []
  //   dataEntries.forEach(dist => {distances.push(dist.data.message.split(' ')[0])})
  //   return distances
  // }
  
  render() {
    let dataIndex
    let distanceIndex

    if (this.props.updateIndex === true) {
      this.getPerformanceData()
    //  this.getUserDistances()
    }
    if (this.state.performanceData != null) {
      dataIndex = (
        <div>
          {this.state.performanceData.map(item => {
            return <div key={item.id}>{item.data.message}</div>
          })}
        </div>
      )
    }
    if (this.state.distanceData != null) {
      distanceIndex = (
        <div>
          {this.state.performanceData.map(item => {
            return <div key={item.id}>{item.data.distance}</div>
          })}
        </div>
      )
    }

    const mydata = {
      //labels: getLabels(props.entries),
      //labels: this.getUserDistances(),
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
          // data: this.getUserDistances()//[65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }

    return (
      <div>
        <h2>Line Chart Example</h2>
        <Line data={mydata} />
        {dataIndex}
        {distanceIndex}
      </div>
    )
  }
}
export default DisplayPerformanceData