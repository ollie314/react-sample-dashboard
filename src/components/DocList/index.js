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
import VisibilityIcon from '@mui/icons-material/Visibility';

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

const DocList = ({ docs = [] }) => {
  const navigate = useNavigate();

  const onSendNewDocs = (clientId) => {
    navigate(`/clients/${clientId}/docs/new`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="client list">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Client Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Document Name</TableCell>
            <TableCell>Size</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              //sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.clientName}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.documentName}</TableCell>
              <TableCell>{row.documentSize}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right">
                <Stack direction="row" spacing={0} justifyContent="flex-end">
                  <IconButton aria-label="edit">
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="send"
                    onClick={() => onSendNewDocs(row.id)}
                  >
                    <SendIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
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

export default DocList;
