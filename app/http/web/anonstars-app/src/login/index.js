import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom'

import { UserConsumer } from '../userContext';

import LoginComponent from './LoginComponent'

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
            <Container>
              <LoginComponent
                onUsernameChange={this.handleUsernameChange}
                handleLogin={this.login(setUser)}
              />
            </Container>
          )
        }}
      </UserConsumer>
    )
  }
}

export default Login;