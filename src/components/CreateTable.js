import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import AddRow from './AddRow';

const CreateTable = ({ text, data, setData }) => {
  const [rows, setRows] = useState([0]);
  return (
    <Box>
      <Typography mt={2} mb={2}>
        {text}
      </Typography>
      <Table
        sx={{ minWidth: '100%', border: '1px solid rgba(224,224,224,1)' }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell className="table-cell"></TableCell>
            <TableCell className="table-cell">Key</TableCell>
            <TableCell className="table-cell">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <AddRow
              setRows={setRows}
              rowId={index}
              key={index}
              data={data}
              setData={setData}
            />
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default CreateTable;
