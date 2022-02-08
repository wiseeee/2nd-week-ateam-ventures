/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { OrderInfo, Category } from '../../commons/type';
import getApi from '../../commons/utils';
import { MATERIAL, PROCESSING_METHOD, Status } from '../../commons/common';
import Card from '../Card';
import './style.css';

const Container: React.FC = () => {
  const [orders, setOrders] = useState<OrderInfo[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<OrderInfo[]>([]);
  const [materialChecked, setMaterialChecked] = useState<boolean[]>(
    new Array(MATERIAL.length).fill(false),
  );
  const [processingMethodChecked, setProcessingMethodChecked] = useState<
    boolean[]
  >(new Array(PROCESSING_METHOD.length).fill(false));
  const [isMaterialActive, setIsMaterialActive] = useState(false);
  const [isProcessingActive, setIsProcessingActive] = useState(false);
  const [toggle, setToggle] = useState(false);

  const onHandleToggle = () => {
    setToggle(!toggle);
  };

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

  function makeCondition(checkedArray: boolean[], options: string[]): string[] {
    let result: string[] = [];
    checkedArray.forEach((checked: boolean, index: number) => {
      if (checked) {
        result.push(options[index]);
      }
    });
    return result;
  }

  function orderFilter(
    FilterCondition: { material: string[]; method: string[] },
    category: Category,
    beforeFilter: OrderInfo[],
  ) {
    const optional: string[] = FilterCondition[category];
    let afterFilter: OrderInfo[] = [];
    if (optional.length === 0) {
      afterFilter = beforeFilter;
    } else {
      beforeFilter.forEach((order: OrderInfo) => {
        const found = order[category].some((r) => optional.includes(r));
        if (found) {
          afterFilter.push(order);
        }
      });
    }
    return afterFilter;
  }

  useEffect(() => {
    let filterCondition: { material: string[]; method: string[] } = {
      method: makeCondition(processingMethodChecked, PROCESSING_METHOD),
      material: makeCondition(materialChecked, MATERIAL),
    };

    const methodFiltered: OrderInfo[] = orderFilter(
      filterCondition,
      'method',
      orders,
    );

    const materialFiltered: OrderInfo[] = orderFilter(
      filterCondition,
      'material',
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
      const data = await getApi('https://sixted-mock-server.herokuapp.com/');
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
