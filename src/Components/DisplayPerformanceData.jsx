import React, { Component } from 'react'
import { getData } from '../Modules/PerformanceData'
import Chart from './Chart'

class DisplayPerformanceData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      performanceData: []
    }
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
    const messages = this.state.performanceData
    let dataIndex

    if (this.props.updateIndex === true) {
      this.getPerformanceData()
    }

    if (messages !== []) {
      debugger;
      dataIndex = messages.map(message => {
        debugger;
        return (
          <div key={message.id}>
            <Chart message={message.data.message} />
          </div>
        )
      })
    }

    return (
      <div>
        {dataIndex}
      </div>
    )
  }
}
export default DisplayPerformanceData