import React from 'react'
import { Button, Form } from 'semantic-ui-react'


const LoginForm = (props) => {
  return (
    <Form widths="equal" id="login-form">
      <Form.Field width={6}>
        <label>Email</label>
        <input id="email" onChange={props.inputChangeHandler} />
      </Form.Field>
      <Form.Field width={6}>
        <label>Password</label>
        <input id="password" type="password" onChange={props.inputChangeHandler} />
      </Form.Field>
      <Button color='vk' type='submit' onClick={props.loginHandler} id="submit">Submit</Button>
    </Form>
  )
}

export default LoginForm;