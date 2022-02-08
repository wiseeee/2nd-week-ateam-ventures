/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { OrderInfo } from '../../commons/type';
import getApi from '../../commons/utils';
import { MATERIAL, PROCESSING_METHOD } from '../../commons/common';
import Card from '../Card';
import './style.css';
import Checkbox from './elements/Checkbox';

const Container: React.FC = () => {
  const [orders, setOrders] = useState<OrderInfo[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<OrderInfo[]>([]);
  const [isMaterialActive, setIsMaterialActive] = useState(false);
  const [isProcessingActive, setIsProcessingActive] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.name;
    if (target === 'material') {
      setIsMaterialActive(!isMaterialActive);
    } else {
      setIsProcessingActive(!isProcessingActive);
    }
  };

  const checkedItemHandler = (name: string, isChecked: boolean) => {
    // Notion > 참고링크 > 5.a 참고
    if (isChecked) {
      setCheckedItems((prev) => new Set(prev.add(name)));
    } else if (!isChecked && checkedItems.has(name)) {
      setCheckedItems(
        (prev) => new Set(Array.from(prev).filter((ele) => ele !== name)),
      );
    }
  };

  useEffect(() => {
    if (checkedItems.size) {
      const updatedOrders = filteredOrders.filter((order) => {
        // '재료','가공방식' 조건을 합침 => 한번에 필터링 검사 하기 위함
        const combinedArr = [
          ...Object.values(order.material),
          ...Object.values(order.method),
        ];

        // 주문의 '재료','가공방식'는 반드시 '체크된 항목'을 포함해야 한다
        return Array.from(checkedItems).every((ele: any) =>
          combinedArr.includes(ele),
        );
      });
      setFilteredOrders(updatedOrders);
    } else {
      // 체크한 것이 없으면 원상복구
      setFilteredOrders(orders);
    }
  }, [checkedItems]);

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
                  {/* Notion > 참고링크 > 5. 참고 */}
                  <Checkbox
                    name={material}
                    checkedItemHandler={checkedItemHandler}
                  />
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
                  <Checkbox
                    name={method}
                    checkedItemHandler={checkedItemHandler}
                  />
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
