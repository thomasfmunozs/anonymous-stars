import React from 'react'

const UserContext = React.createContext({})

class UserHandler extends React.Component {
  state = {
    user: {}
  };

  setUser = user => {
    this.setState({user})
  }

  render() {
    const {user} = this.state;
    return (
      <UserContext.Provider value={
        {
          user,
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