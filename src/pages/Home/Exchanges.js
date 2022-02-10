import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Title from '../../components/Title';

// Generate data
const createData = (
  id,
  date,
  clientName,
  shipTo,
  documentName,
  documentSize,
  status
) => ({ id, date, clientName, shipTo, documentName, documentSize, status });

const rows = [
  createData(
    0,
    '2021-10-14 03:39:14',
    'Lorraine Simmons',
    'CHUV',
    'ebbd8bda-e751-400d-a866-56bd20591593.pdf',
    '12Mb',
    'success'
  ),
];

const Exchanges = () => {
  return (
    <React.Fragment>
      <Title>Recent Exchange</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Client Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Document Name</TableCell>
            <TableCell>Size</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.clientName}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.documentName}</TableCell>
              <TableCell>{row.documentSize}</TableCell>
              <TableCell align="right">{`${row.status}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export default Exchanges;
