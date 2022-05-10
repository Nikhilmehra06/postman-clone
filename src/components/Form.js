import React from 'react';
import { Box, Select, MenuItem, TextField, Button } from '@mui/material';
import { useContext } from 'react';

import { DataContext } from '../context/DataProvider';

const Form = ({ onSendClick }) => {
  const { formData, setData } = useContext(DataContext);

  const handleChange = (e) => {
    setData({ ...formData, type: e.target.value });
    console.log(formData);
  };

  const onChangeHandler = (e) => [
    setData({ ...formData, url: e.target.value }),
  ];

  return (
    <>
      <Box className="form-container">
        <Select
          value={formData.type}
          label="Post"
          onChange={(e) => handleChange(e)}
          className="select"
        >
          <MenuItem value={'GET'}>GET</MenuItem>
          <MenuItem value={'POST'}>POST</MenuItem>
        </Select>
        <TextField
          size="small"
          className="text-field"
          onChange={(e) => onChangeHandler(e)}
        />
        <Button
          variant="contained"
          className="btn"
          onClick={() => onSendClick()}
        >
          SEND
        </Button>
      </Box>
    </>
  );
};

export default Form;
