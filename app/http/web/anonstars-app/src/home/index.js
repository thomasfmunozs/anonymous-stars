import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
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
              <Table m={1}>
                <TableBody>
                  {users.map(u => (
                    <React.Fragment key={u.name}>
                      <TableRow>
                        <TableCell><Link to={`/give-star?userId=${u.id}&userName=${u.name}&userStars=${u.starCount}`} variant="contained" color="primary">{u.name}</Link></TableCell>
                        <TableCell><span role="img" aria-label="">{u.starCount} 🤩</span></TableCell>
                      </TableRow>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </div>

          )
        }}
      </UserConsumer>
    );
  }
}

export default Home;