import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { UserConsumer } from '../userContext';

import style from './style.css';

class Home extends Component {
  render () {
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
    );
  }
}

export default Home;