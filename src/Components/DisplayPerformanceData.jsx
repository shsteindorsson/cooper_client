import React, { Component } from 'react'
import { getData } from '../Modules/PerformanceData'
import {Doughnut} from 'react-chartjs-2'

class DisplayPerformanceData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      performanceData: null
     // distanceData: null
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
    //let distanceIndex

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
      debugger
    }

    const getMessageCount = (label) => {
      let msgCount = 0
      let msgIndex = dataIndex.props.children
      msgIndex.forEach(msg => {
        if (msg.props.children === label){
          msgCount++
        } 
      })
      return msgCount
    }

    // if (this.state.distanceData != null) {
    //   distanceIndex = (
    //     <div>
    //       {this.state.performanceData.map(item => {
    //         return <div key={item.id}>{item.data.distance}</div>
    //       })}
    //     </div>
    //   )
    // }

    const data = {
      labels: [
        'Excellent',
        'Above average',
        'Average',
        'Below average',
        'Poor'
      ],
      datasets: [{
        //data: [30, 5, 10, 20, 12],
        data: [getMessageCount('Poor'), getMessageCount('Below average'), getMessageCount('Poor'), getMessageCount('Poor'), getMessageCount('Poor')],
        backgroundColor: [
        '#3b9977',
        '#994b3b',
        '#997a3b',
        '#593b99',
        '#995372'
        ],
        hoverBackgroundColor: [
        '#2ad1a4',
        '#e0512d',
        '#d4a026',
        '#a28abd',
        '#e02d74'
        ]
      }]
    };

    return (
      <div>
        <h2>Doughnut Example</h2>
        <Doughnut data={data} />
        {dataIndex}
        {/* {distanceIndex} */}
      </div>
    )
  }
}
export default DisplayPerformanceData