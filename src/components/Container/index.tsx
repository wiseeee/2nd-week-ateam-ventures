import React, { useState, useEffect } from 'react';
import { OrderInfo } from '../../commons/type';
import getApi from '../../commons/utils';

const Container: React.FC = () => {
  const [state, setState] = useState<OrderInfo[]>([]);

  useEffect(() => {
    async function GetApi() {
      const data = await getApi('https://sixted-mock-server.herokuapp.com/');
      setState(data);
    }
    GetApi();
  }, []);

  console.log(state);

  return <div></div>;
};

export default Container;
