import React from 'react';
import { Redirect } from 'react-router-dom';
import { UserConsumer } from '../userContext';
import Container from '@material-ui/core/Container';

import GiveStarForm from './GiveStarForm';

class GiveStar extends React.Component {
  state = {
    startGiven: false
  };

  render() {
    const { startGiven } = this.state;
    if (startGiven) {
      return <Redirect to='/home' />
    }
    return (
      <UserConsumer>
        {({ user, users }) => {
          const { username = '', loggedIn } = user;
          if (!loggedIn) {
            return <Redirect to='/' />
          }
          return (
            <Container>
              <GiveStarForm />
            </Container>
          )
        }}
      </UserConsumer>
    )
  }
}

export default GiveStar