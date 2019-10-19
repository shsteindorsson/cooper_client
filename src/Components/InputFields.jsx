import React from 'react'

const description = [
  'This is a simple fitness tracking application.',
  'The Cooper Test (aka The 12-minute run) is an easy way to measure aerobic fitness.',
].join(' ')

const InputFields = (props) => {
  return (
    <>
      <div>
        <select id="gender" onChange={props.inputChangeHandler}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <div className="label-padding">
          <label>Distance</label>
          <input id="distance" onChange={props.inputChangeHandler}></input>
        </div>
        <div>
          <label>Age</label>
          <input id="age" onChange={props.inputChangeHandler}></input>
        </div>
      </div>
    </>
  )
}

export default InputFields