import React, { useState, useEffect } from 'react';
import './App.css';
import { OrderInfo } from './commons/constants';
import getApi from './commons/utils';

function App() {
  const [state, setState] = useState<OrderInfo[]>();

  useEffect(() => {
    async function GetApi() {
      const data = await getApi('https://sixted-mock-server.herokuapp.com/');
      setState(data);
    }
    GetApi();
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return <div className="App">hello world</div>;
}

export default App;
