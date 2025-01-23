import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const ChristTable = () => {
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
            
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Place</TableCell>
                    </TableRow>
                </TableHead>
            <TableBody>
            <TableRow>
                <TableCell>Tiya</TableCell>
                <TableCell>12</TableCell>
                <TableCell>pala</TableCell>

            </TableRow>
            
            <TableRow>
                <TableCell>Tom</TableCell>
                <TableCell>15</TableCell>
                <TableCell>IJK</TableCell>

            </TableRow>
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ChristTable
