import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position='static' style={{ backgroundColor:"blue"}}>
            <Toolbar>
                <Typography variant='h6' component="div" sx={{ flexGrow: 1}} style={{color: "red"}}>My App
                </Typography>
                <Button color="inherit">
                  <Link to={"/"} style={{color: "white"}} >First
                  </Link>
                  </Button>
                  <Button color="inherit" style={{ marginLeft: 'auto' }} >
                  <Link to={"/r"} style={{color: "white"}}>Navbar          
                  </Link>
                  </Button>
                  <Button color="inherit" style={{ marginLeft: 'auto' }} >
                  <Link to={"/c"} style={{color: "white"}} >RegForm 
                  </Link>
                  </Button>
                  <Button color="inherit" style={{ marginLeft: 'auto' }} >
                  <Link to={"/s"} style={{color: "white"}} >StateBases 
                  </Link>
                  </Button>
            </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar
