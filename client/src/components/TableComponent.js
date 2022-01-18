import React from 'react'
// import { DataGrid } from '@mui/x-data-grid'

function TableComponent({ id, full_name, team, pos, games, mpg, ppg, rpg, apg, spg, bpg }) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'full_name',
            headerName: 'Name',
            width: 150,
        },
        {
            field: 'team',
            headerName: 'Last name',
            width: 150,
        },
        {
            field: 'pos',
            headerName: 'Age',
            type: 'number',
            width: 110,
        },
        {
            field: 'games',
            headerName: 'Games played',
            type: 'number',
            width: 110,
        },
        {
            field: 'mpg',
            headerName: 'Minutes per game',
            type: 'number',
            width: 110,
        },
        {
            field: 'pph',
            headerName: 'Points per game',
            type: 'number',
            width: 110,
        },
        {
            field: 'rpg',
            headerName: 'Rebounds per game',
            type: 'number',
            width: 110,
        },
        {
            field: 'apg',
            headerName: 'Assists per game',
            type: 'number',
            width: 110,
        },
        {
            field: 'spg',
            headerName: 'Steals per game',
            type: 'number',
            width: 110,

        },
        {
            field: 'bpg',
            headerName: 'Blocks per game',
            type: 'number',
            width: 110,

        },

        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];
    const everyPlayer = [full_name, team, pos, games, mpg, ppg, rpg, apg, spg, bpg]

    return (

        <div className="table">

        </div>
    )
}

export default TableComponent
