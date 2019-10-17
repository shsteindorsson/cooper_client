import React, { Component } from 'react'
import DisplayCooperResult from './Components/DisplayCooperResult'
import InputFields from './Components/InputFields'
import LoginForm from './Components/LoginForm'
import { authenticate } from './Modules/Auth'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      gender: 'female',
      age: '',
      renderloginForm: false,
      authenticated: false,
      email: '',
      password: '',
      message: '',
      entrySaved: false
    }
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  async onLogin(e) {
    e.preventDefault();
    let resp = await authenticate(this.state.email, this.state.password)
    
    resp.authenticated === true ? this.setState({ authenticated: true }) 
    : this.setState({ message: resp.message, renderLoginForm: false })
  }

  entryHandler() {
    this.setState({ entrySaved: true });
  }
  
  render() {
    let renderLogin
    let user

    if (this.state.authenticated === true) {
      user = JSON.parse(sessionStorage.getItem('credentials')).uid;
      renderLogin = (
        <p>Hi {user}</p>
      )
    } else {
      if (this.state.renderLoginForm === true) {
        renderLogin = (
          <>
            <LoginForm 
              loginHandler={this.onLogin.bind(this)}
              inputChangeHandler={this.onChange.bind(this)}
            />
          </>
        )
      } else {
        renderLogin = (
          <>
            <button id="login" 
            onClick={() => this.setState({ renderLoginForm: true })}>
              Login
            </button>
            
            <p>{this.state.message}</p>
          </>
        )
      }
    }

    return (
      <div>
        <InputFields 
          inputChangeHandler={this.onChange.bind(this)}
        />

        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
          authenticated={this.state.authenticated}
          entrySaved={this.state.entrySaved}
          entryHandler={this.entryHandler.bind(this)}
        />

        {renderLogin}
      </div>
    );
  }
}

export default App;
