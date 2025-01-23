import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Task = () => {
    var[val,setVal]=useState("")
    const changetoH =()=>{
        setVal("HOME")
    }
    const Task = () => {
            setVal("Gallary")
        }
  return (
    <div style={{textAlign: "center"}}>
      <Typography variant='h6'  style={{color: "red"}}>WELCOME TO {val}
      </Typography>
      <Button variant="contained" onClick={changetoH}>HOME</Button> &nbsp;
      <Button variant="contained"  onClick= {changetoG} > Gallary</Button> &nbsp;
      <Button variant="contained">Contact</Button> &nbsp;


    </div>
  )
}

export default Task
