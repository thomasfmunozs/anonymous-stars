import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { UserConsumer } from '../userContext';

import style from './style.css';

class GiveStar extends React.Component {
  state = {
    startGiven: false
  };

  render() {
    const { startGiven } = this.state;
    if(startGiven){
      return <Redirect to='/home' />
    }
    return (
      <UserConsumer>
        {({user}) => {
          const { username = '', loggedIn } = user;
          if (!loggedIn){
            return <Redirect to='/' />
          }
          return (
            <div>
              <p>
                Aqui no hay nada más que el user
              </p>
              <p>
                {username}
              </p>
            </div>
          )
        }}
      </UserConsumer>
    )
  }
}

export default GiveStar