import React, { useState, useEffect, MouseEventHandler } from 'react';
import { OrderInfo } from '../../commons/type';
import getApi from '../../commons/utils';
import { MATERIAL, PROCESSING_METHOD, Material } from '../../commons/common';
import Card from '../Card';
import './style.css';

const Container: React.FC = () => {
  const [orders, setOrders] = useState<OrderInfo[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<OrderInfo[]>([]);
  const [materialChecked, setMaterialChecked] = useState(
    new Array(MATERIAL.length).fill(false),
  );
  const [processingMethodChecked, setProcessingMethodChecked] = useState(
    new Array(PROCESSING_METHOD.length).fill(false),
  );
  const [isMaterialActive, setIsMaterialActive] = useState(false);
  const [isProcessingActive, setIsProcessingActive] = useState(false);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.name;
    if (target === 'material') {
      setIsMaterialActive(!isMaterialActive);
    } else {
      setIsProcessingActive(!isProcessingActive);
    }
  };

  const handleOnChange = (
    position: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const target = e.target.name;

    if (MATERIAL.includes(target)) {
      const updatedChecked = materialChecked.map((item, index) =>
        index === position ? !item : item,
      );
      console.log(updatedChecked);
      setMaterialChecked(updatedChecked);
    } else {
      const updatedChecked = processingMethodChecked.map((item, index) =>
        index === position ? !item : item,
      );

      console.log(updatedChecked);
      setProcessingMethodChecked(updatedChecked);
    }
  };

  useEffect(() => {
    orders.forEach((order, index) => {
      const arr = Object.keys(order.material);
      arr.forEach((mat) => {
        console.log(mat);
      });
    });
  }, [materialChecked, processingMethodChecked]);

  useEffect(() => {
    async function GetApi() {
      const data = await getApi('https://sixted-mock-server.herokuapp.com/');
      setOrders(data);
      setFilteredOrders(data);
      console.log(materialChecked, processingMethodChecked);
    }
    GetApi();
  }, []);
  // console.log(state, filteredState, filterCondition);

  return (
    <div>
      <div>
        <h2>들어온 요청</h2>
        <span>파트너님에게 딱 맞는 요청서를 찾아보세요.</span>
      </div>
      <div>
        <div>
          <button name="material" onClick={onClick}>
            재료
          </button>
          {isMaterialActive && (
            <ul>
              {MATERIAL.map((material, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    name={material}
                    value={material}
                    checked={materialChecked[index]}
                    onChange={(e) => handleOnChange(index, e)}
                  ></input>
                  {material}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <button name="processingMethod" onClick={onClick}>
            가공방식
          </button>
          {isProcessingActive && (
            <ul>
              {PROCESSING_METHOD.map((method, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    name={method}
                    value={method}
                    checked={processingMethodChecked[index]}
                    onChange={(e) => handleOnChange(index, e)}
                  ></input>
                  {method}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div>
        <span>토글</span>
        <span>상담 중인 요청만 보기</span>
      </div>
      <div className="container">
        {filteredOrders.map((e, index) => (
          <Card key={index} cardData={e} />
        ))}
      </div>
    </div>
  );
};

export default Container;
