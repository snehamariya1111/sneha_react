import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const RegForm = () => {
  return (
    <div>
      {/* <Box>
        <AppBar style={{ backgroundColor:"purple"}}>
            <Toolbar>
                <Typography variant='h6'>My App
                </Typography>
                <Button color="inherit" style={{ marginLeft: 'auto' }}>LogIn</Button>
            </Toolbar>
        </AppBar>
      </Box> */}
      <TextField
       label="Name" variant="filled"/><br></br><br></br>
       <TextField
       label="Place" variant="filled"/><br></br><br />
       <TextField
       label="Age" variant="filled"/><br></br><br />
       <TextField
       label="address" variant="filled"/><br></br><br />
       <TextField
       label="Usermane" variant="filled"/><br></br><br />
       <TextField
       type="Password" variant="filled" label="password"/><br></br><br />
       <Button variant="contained">LogIn</Button><br /><br></br>
    </div>
  )
}

export default RegForm


