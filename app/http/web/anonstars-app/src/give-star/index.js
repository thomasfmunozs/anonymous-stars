import React from 'react';
import { Redirect } from 'react-router-dom';
import { UserConsumer } from '../userContext';



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
            <div>
              <p>
                Aqui no hay nada más que el user
              </p>
              <p>
                {username}
              </p>

              {users.map(u => <p key={u.name}>Nombre: {u.name} - {u.starCount} estrellas</p>)}
            </div>
          )
        }}
      </UserConsumer>
    )
  }
}

export default GiveStar