import React, { useState, useEffect, MouseEventHandler } from 'react';
import { OrderInfo } from '../../commons/type';
import getApi from '../../commons/utils';
import { Material, ProcessingMethod } from '../../commons/common';
import Card from '../Card';
import './style.css';

const Container: React.FC = () => {
  const [state, setState] = useState<OrderInfo[]>([]);
  const [filteredState, setFilteredState] = useState<OrderInfo[]>([]);
  const [filterCondition, setFilterCondition] = useState<string[]>([]);
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

  useEffect(() => {
    async function GetApi() {
      const data = await getApi('https://sixted-mock-server.herokuapp.com/');
      setState(data);
      setFilteredState(data);
      setFilterCondition([]);
    }
    GetApi();
  }, []);
  console.log(state, filteredState, filterCondition);

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
              {(Object.keys(Material) as Array<keyof typeof Material>).map(
                (material, index) => (
                  <li key={index}>
                    <input type="checkbox"></input>
                    {material}
                  </li>
                ),
              )}
            </ul>
          )}
        </div>
        <div>
          <button name="processingMethod" onClick={onClick}>
            가공방식
          </button>
          {isProcessingActive && (
            <ul>
              {(
                Object.keys(ProcessingMethod) as Array<
                  keyof typeof ProcessingMethod
                >
              ).map((method, index) => (
                <li key={index}>
                  <input type="checkbox"></input>
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
        {state.map((e, index) => (
          <Card key={index} cardData={e} />
        ))}
      </div>
    </div>
  );
};

export default Container;
