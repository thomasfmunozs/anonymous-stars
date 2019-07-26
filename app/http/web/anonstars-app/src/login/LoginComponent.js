import React from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const style = {
  loginContainer: {
    height: '100vh',
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const LoginComponent = ({onUsernameChange, handleLogin}) => {
  return (
    <div style={style.loginContainer}>
      <div>
        <Input onChange={onUsernameChange} placeholder={'Nombre de Usuario'}/>
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
      </div>
    </div>
  )
}

export default LoginComponent;