import React, { Component } from 'react'
import { getData } from '../Modules/PerformanceData'
import Chart from './Chart'

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
      
      arg.forEach(f => {
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
        else if(f.data.message === "Above average") {
          this.someHash["ab"]++
          console.log("Above average") 
        }
        else if(f.data.message === "Below average") {
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
    debugger;
    return (
      <div>
        <Chart listNameFromParent={dataIndex} />
      </div>
    )
  }
}
export default DisplayPerformanceData