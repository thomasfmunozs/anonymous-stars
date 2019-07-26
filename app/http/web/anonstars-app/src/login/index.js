import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { Redirect } from 'react-router-dom'

import { UserConsumer } from '../userContext';

import style from './style.css'

class Login extends Component {
  state = { username: '' };

  handleUsernameChange = e => {
    this.setState({username: e.target.value})
  }

  login = setUser => () => {
    const { username } = this.state;
    setUser({ username, loggedIn: true })
  }

  render() {
    return (
      <UserConsumer>
        {
          ({user, setUser}) => {
          const { loggedIn = false } = user;
          if (loggedIn) {
            return <Redirect to='/home' />
          }
          return (
            <div>
              <div>
                <Input onChange={this.handleUsernameChange} />
              </div>
              <div style={style.button}>
                <Button variant="contained" color="primary" onClick={this.login(setUser)}>Login</Button>
              </div>
            </div>
          )
        }}
      </UserConsumer>
    )
  }
}

export default Login;