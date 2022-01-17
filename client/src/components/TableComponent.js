import React from 'react'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

function TableComponent({ full_name, team, pos, age, apg, bpg, games, mpg, ppg, rpg, spg, threePP, twoPP, ftp, likes }) {

    return (
        <div>
            <h3>{full_name}</h3>
            <h4>{team}</h4>
            {/* <TableContainer component={Paper}>

            </TableContainer> */}
        </div>
    )
}

export default TableComponent
