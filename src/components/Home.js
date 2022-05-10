import React, { useContext, useState } from 'react';

import { Box } from '@mui/material';
//Components
import Form from './Form';
import Header from './Header';
import SelectTab from './SelectTab';
import Response from './Response';
import ErrorScreen from './ErrorScreen';
import SnackBar from './SnackBar';

import { DataContext } from '../context/DataProvider';
import { checkParams } from '../utils/common-utils';
import { getData } from '../service/api';
const Home = () => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [errorRes, setErrorRes] = useState(false);
  const [apiRes, setApiRes] = useState({});

  const { formData, jsonText, paramData, header } = useContext(DataContext);

  const onSendClick = async () => {
    if (!checkParams(formData, jsonText, paramData, header, setErrorMsg)) {
      setError(true);
      return false;
    }
    let response = await getData(formData, jsonText, paramData, header);
    if (response === 'error') {
      setErrorRes(true);
      return;
    }
    console.log('response.data', response.data);
    setApiRes(response.data);
  };
  return (
    <>
      <Header />
      <Box className="main-container">
        <Form onSendClick={onSendClick} />
        <SelectTab />
        {errorRes ? <ErrorScreen /> : <Response data={apiRes} />}

        {error && (
          <SnackBar error={error} setError={setError} errorMsg={errorMsg} />
        )}
      </Box>
    </>
  );
};

export default Home;
