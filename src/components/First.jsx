import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div style={{textAlign: "center"}} >
     
      
      <br /><br /><br /><br />
      <Typography variant='h1'>Sneha</Typography>
    <TextField label="username" variant="outlined"/><br></br>
    <TextField label="username" variant="filled"/><br></br>
    <TextField label="username" variant="standard"/><br /><br></br>
    <Button variant="contained">LogIn</Button><br /><br></br>
    <Button variant="text">Submit</Button><br /><br></br>
    <Button variant="outlined">Submit</Button>
    </div>

  )
}

export default First
