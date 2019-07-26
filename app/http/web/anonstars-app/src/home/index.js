import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UserConsumer } from '../userContext';


class Home extends Component {

  render() {
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
              <p>
                <Link to='/give-star' variant="contained" color="primary">Dar estrellas </Link>
              </p>
            </div>

          )
        }}
      </UserConsumer>
    );
  }
}

export default Home;