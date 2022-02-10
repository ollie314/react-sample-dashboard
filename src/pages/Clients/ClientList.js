import React from 'react';
import { useNavigate } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import AllInboxIcon from '@mui/icons-material/AllInbox';

function createData(id, firstName, lastName, email, avs) {
  return { id, firstName, lastName, email, avs };
}

const rows = [
  createData(
    'e11c7b09-4192-42bb-b5d6-03686f8f150a',
    'Jane',
    'Doe',
    'jane.doe@bluewin.ch',
    '756.2160.7092.21'
  ),
];

const ClientList = ({ clients = [] }) => {
  const navigate = useNavigate();

  const onShowDocs = (clientId) => {
    console.log('show docs');
    navigate(`/clients/${clientId}/docs`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="client list">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Avs No</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              //sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.avs}</TableCell>
              <TableCell align="right">
                <Stack direction="row" spacing={0} justifyContent="flex-end">
                  <IconButton
                    aria-label="showDocs"
                    onClick={() => onShowDocs(row.id)}
                  >
                    <AllInboxIcon />
                  </IconButton>
                  <IconButton disabled aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton disabled aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClientList;
