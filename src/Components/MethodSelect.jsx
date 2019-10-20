import React from 'react'

const MethodSelect = props => {
  return (
    <div>
      <select className="MethodSelect" id="method" onChange={props.onChangeValue}>
        <option value="metric">Metric</option>
        <option value="imperial">Imperial</option>
      </select>
    </div>
  )
}

export default MethodSelect