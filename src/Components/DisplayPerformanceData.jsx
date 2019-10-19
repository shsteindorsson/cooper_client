import React, { Component } from 'react'
import { getData } from '../Modules/PerformanceData'
import LineChart from './LineChart'

class DisplayPerformanceData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      performanceData: null
    }
  }
  componentDidMount() {
    this.getPerformanceData()
  }

  async getPerformanceData() {
    let result = await getData()
    this.setState({ performanceData: result.data.entries }, () => { 
      this.props.indexUpdated()
    })
  }
  
  render() {
    let dataIndex

    if (this.props.updateIndex === true) {
      this.getPerformanceData()
    }
    if (this.state.performanceData != null) {
      dataIndex = (
        <div>
          {this.state.performanceData.map(item => {
            return <div key={item.id}>{item.data.message} {item.data.distance}</div>
          })}
        </div>
      )
    }

    return (
      <div>
        <LineChart entries={this.state.performanceData}/>
        {dataIndex}
      </div>
    )
  }
}
export default DisplayPerformanceData