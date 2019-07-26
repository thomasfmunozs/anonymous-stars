import React from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import style from './style.css'

const LoginComponent = ({onUsernameChange, handleLogin}) => {
  return (
    <div>
      <div>
        <Input onChange={onUsernameChange} />
      </div>
      <div style={style.button}>
        <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
      </div>
    </div>
  )
}

export default LoginComponent;