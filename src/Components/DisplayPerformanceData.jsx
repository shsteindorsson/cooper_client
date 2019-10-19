import React, { Component } from 'react'
import { getData } from '../Modules/PerformanceData'
import {Doughnut} from 'react-chartjs-2'

class DisplayPerformanceData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      performanceData: null
    }
    let someHash = {ex: 0, ab: 0, av: 0, be: 0, po: 0}
  }

  componentDidMount() {
    this.getPerformanceData()
  }
  
  async getPerformanceData() {
    let result = await getData()
    this.setState({ 
      performanceData: result.data.entries,
    }, () => { 
      this.props.indexUpdated()
    })
  }
  
  render() {
    let dataIndex

    const extractThings = (arg) => {
      debugger
      arg.forEach(f => {
        if(f.data.message === "Poor") {
          this.someHash["po"]++ 
        }
        if(f.data.message === "Excellent") {
          this.someHash["ex"]++ 
        }
        if(f.data.message === "Above average") {
          this.someHash["ab"]++ 
        }
        if(f.data.message === "Below average") {
          this.someHash["be"]++ 
        }
        if(f.data.message === "Average") {
          this.someHash["av"]++ 
        }
      })
    }

    if (this.props.updateIndex === true) {
      this.getPerformanceData()
    }
    if (this.state.performanceData != null) {
      dataIndex = (
        <div>
          {this.state.performanceData.map(item => {
            return <div key={item.id}>{item.data.message}</div>
          })}
          extractThings({this.state.performanceData})
        </div>
      )
    }

    // const getMessageCount = (label) => {
    //   let msgCount = 0
    //   debugger;
    //   let msgIndex = dataIndex
    //   debugger;
    //   msgIndex.forEach(msg => {
    //     if (msg.props.children === label){
    //       msgCount++
    //     } 
    //   })
    //   return msgCount
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
        // data: [getMessageCount('Poor'), getMessageCount('Below average'), getMessageCount('Poor'), getMessageCount('Poor'), getMessageCount('Poor')],
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
      </div>
    )
  }
}
export default DisplayPerformanceData