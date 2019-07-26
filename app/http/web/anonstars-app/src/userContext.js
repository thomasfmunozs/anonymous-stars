import Faker from 'faker';
import React from 'react';

const UserContext = React.createContext({})

class UserHandler extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      user: {},
      users: this.getUsers(),
    };

  }

  setUser = user => {
    this.setState({ user })
  }

  getUsers = () => {
    const quant = 3;
    const users = [];
    for (let i = 0; i < quant; i++) {
      const user = {
        id: Faker.random.uuid(),
        name: Faker.fake("{{name.lastName}}, {{name.firstName}}"),
        starCount: 0,
      };
      users.push(user);
    }
    return users;
  }

  render() {
    const { user, users } = this.state;
    return (
      <UserContext.Provider value={
        {
          user,
          users,
          setUser: this.setUser
        }
      }>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export const UserProvider = UserHandler
export const UserConsumer = UserContext.Consumer
export default UserContext