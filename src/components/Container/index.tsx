/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { OrderInfo } from '../../commons/type';
import getApi, { makeCondition, orderFilter } from '../../commons/utils';
import {
  MATERIAL,
  PROCESSING_METHOD,
  Status,
  CategoryName,
} from '../../commons/common';
import Card from '../Card';
import './style.css';

const URL = 'https://sixted-mock-server.herokuapp.com/';
const makeFalseArr = (target: string[]) => new Array(target.length).fill(false);

const Container: React.FC = () => {
  const [orders, setOrders] = useState<OrderInfo[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<OrderInfo[]>([]);
  const [materialChecked, setMaterialChecked] = useState<boolean[]>(
    makeFalseArr(MATERIAL),
  );
  const [processingMethodChecked, setProcessingMethodChecked] = useState<
    boolean[]
  >(makeFalseArr(PROCESSING_METHOD));
  const [isMaterialActive, setIsMaterialActive] = useState(false);
  const [isProcessingActive, setIsProcessingActive] = useState(false);
  const [toggle, setToggle] = useState(false);

  const materialLength: number = materialChecked.filter(Boolean).length;
  const methodLength: number = processingMethodChecked.filter(Boolean).length;

  const resetFilter = () => {
    setMaterialChecked(makeFalseArr(MATERIAL));
    setProcessingMethodChecked(makeFalseArr(PROCESSING_METHOD));
  };

  const onHandleToggle = () => {
    setToggle(!toggle);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.name;
    if (target === CategoryName.재료) {
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
      const updatedChecked = materialChecked.map(
        (item: boolean, index: number) => (index === position ? !item : item),
      );
      setMaterialChecked(updatedChecked);
    } else {
      const updatedChecked = processingMethodChecked.map(
        (item: boolean, index: number) => (index === position ? !item : item),
      );
      setProcessingMethodChecked(updatedChecked);
    }
  };

  useEffect(() => {
    let filterCondition: { material: string[]; method: string[] } = {
      method: makeCondition(processingMethodChecked, PROCESSING_METHOD),
      material: makeCondition(materialChecked, MATERIAL),
    };

    const methodFiltered: OrderInfo[] = orderFilter(
      filterCondition,
      CategoryName.가공방식,
      orders,
    );

    const materialFiltered: OrderInfo[] = orderFilter(
      filterCondition,
      CategoryName.재료,
      methodFiltered,
    );

    let statusFiltered: OrderInfo[] = [];

    if (toggle) {
      materialFiltered.forEach((order: OrderInfo) => {
        const status = order.status;

        if (status === Status.상담중) {
          statusFiltered.push(order);
        }
      });
    } else {
      statusFiltered = materialFiltered;
    }

    setFilteredOrders(statusFiltered);
  }, [materialChecked, processingMethodChecked, toggle]);

  useEffect(() => {
    async function GetApi() {
      const data = await getApi(URL);
      setOrders(data);
      setFilteredOrders(data);
    }
    GetApi();
  }, []);

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
            {materialLength !== 0 && <span>{`(${materialLength})`}</span>}
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
            {methodLength !== 0 && <span>{`(${methodLength})`}</span>}
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
        {(methodLength !== 0 || materialLength !== 0) && (
          <button onClick={resetFilter}>필터초기화</button>
        )}
      </div>
      <div>
        <input type="checkbox" checked={toggle} onChange={onHandleToggle} />
        <span>상담 중인 요청만 보기</span>
      </div>
      <div className="container">
        {filteredOrders.length === 0 ? (
          <div>조건에 맞는 견적 요청이 없습니다.</div>
        ) : (
          filteredOrders.map((e, index) => <Card key={index} cardData={e} />)
        )}
      </div>
    </div>
  );
};

export default Container;
