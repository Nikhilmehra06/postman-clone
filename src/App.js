import React from 'react';
import './App.css';

//components
import Home from './components/Home';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <div>
      <React.StrictMode>
        <DataProvider>
          <Home />
        </DataProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;
