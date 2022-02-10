import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MetasList = ({ metas = [] }) => (
  <TableContainer component={Paper}>
    <Table aria-label="meta-list">
      <TableHead>
        <TableRow>
          <TableCell>Key</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {metas.map((row) => (
          <TableRow
            key={row.id}
            //sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell>{row.key}</TableCell>
            <TableCell>{row.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default MetasList;
