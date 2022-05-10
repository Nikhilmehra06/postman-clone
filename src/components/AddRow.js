import { Checkbox, TableCell, TableRow, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddRow = ({ setRows, rowId, data, setData }) => {
  const [ischecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    let result = data.filter((entry) => entry.id === Number(e.target.name))[0];

    if (!ischecked) {
      setIsChecked(true);
      setRows((oldArr) => [...oldArr, rowId]);
      result = { ...result, id: rowId, check: true };
    } else {
      setIsChecked(false);
      result = { ...result, id: rowId, check: false };
    }

    let index = data.findIndex((value) => value.id === Number(e.target.name));
    if (index === -1) {
      setData((oldArr) => [...oldArr, result]);
    } else {
      const newArray = Object.assign([...data], {
        [index]: result,
      });
      setData(newArray);
    }
  };

  const onTextChange = (e) => {
    let result = data.filter((entry) => entry.id === rowId)[0];
    result = { ...result, id: rowId, [e.target.name]: e.target.value };

    let index = data.findIndex((value) => value.id === rowId);

    if (index === -1) {
      setData((oldArr) => [...oldArr, result]);
    } else {
      const newArray = Object.assign([...data], {
        [index]: result,
      });
      setData(newArray);
    }
    console.log(data);
  };

  return (
    <TableRow>
      <TableCell className="table-cell">
        <Checkbox
          checked={ischecked}
          size="large"
          className="checkbox"
          onChange={(e) => handleChange(e)}
          name={rowId}
        />
      </TableCell>

      <TableCell className="table-cell">
        <TextField
          className="textField"
          inputProps={{ style: { height: 30, padding: '0 5px' } }}
          onChange={(e) => onTextChange(e)}
          name="key"
        />
      </TableCell>
      <TableCell className="table-cell">
        <TextField
          className="textField"
          inputProps={{ style: { height: 30, padding: '0 5px' } }}
          onChange={(e) => onTextChange(e)}
          name="value"
        />
      </TableCell>
    </TableRow>
  );
};

export default AddRow;
