import React, { Component } from 'react'
import { getData } from '../Modules/PerformanceData'
import {Doughnut} from 'react-chartjs-2'

class DisplayPerformanceData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      performanceData: null
    }
    this.someHash = {ex: 0, ab: 0, av: 0, be: 0, po: 0}
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
      this.someHash = {ex: 0, ab: 0, av: 0, be: 0, po: 0}
      arg.forEach(f => {
        debugger
        if(f.data.message === "Poor") {
          this.someHash["po"]++
          console.log("Poor") 
        }
        else if(f.data.message === "Excellent") {
          this.someHash["ex"]++
          console.log("Excellent") 
        }
        else if(f.data.message === "Average") {
          this.someHash["av"]++ 
          console.log("Average")
        }
        else if(f.data.message === "Above Average") {
          this.someHash["ab"]++
          console.log("Above average") 
        }
        else if(f.data.message === "Below Average") {
          this.someHash["be"]++ 
          console.log("Below average")
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
          {extractThings(this.state.performanceData)}
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
        'Above Average',
        'Average',
        'Below Average',
        'Poor'
      ],
      datasets: [{
        data: [this.someHash["ex"], this.someHash["ab"], this.someHash["av"], this.someHash["be"], this.someHash["po"]],
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