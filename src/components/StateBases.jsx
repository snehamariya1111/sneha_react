import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBases = () => {
    var[fname,setFname]= useState("Tiya")
    const changename = () => {
        setFname("sneha")
    }
  return (
    <div style={{textAlign: "center"}}>
      <Typography variant='h3'>Hello {fname}</Typography>
      <Button variant="contained" onClick={changename}>change</Button>
    </div>
  )
}

export default StateBases
