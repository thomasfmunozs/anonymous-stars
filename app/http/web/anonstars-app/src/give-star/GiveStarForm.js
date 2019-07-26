import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const GiveStarForm = () => {
  return (
    <div>
      <div>
        <Input placeholder={'Usuario'} disabled/>
      </div>
      <div>
        <TextareaAutosize rows={10} />
      </div>
      <div>
        <Checkbox color="primary"/> Mostrar tu nombre
      </div>
      <div>
        <Button variant="contained" color="primary"> Dar Estrella ⭐️</Button>
      </div>
    </div>
  )
}

export default GiveStarForm;