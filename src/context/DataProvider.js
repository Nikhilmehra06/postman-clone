import React, { createContext, useState } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [formData, setData] = useState({
    url: '',
    type: 'GET',
  });

  const [paramData, setParamData] = useState([]);
  const [header, setHeader] = useState([]);
  const [jsonText, setJsonText] = useState('');

  return (
    <DataContext.Provider
      value={{
        formData,
        setData,
        paramData,
        setParamData,
        header,
        setHeader,
        jsonText,
        setJsonText,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
