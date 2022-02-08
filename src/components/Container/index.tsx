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
import reset from './img/reset.png';
import {
  Wrapper,
  CardContain,
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  FlexStart,
  SpaceBetweenMo,
  FilterButton,
  FilterList,
  FilterListWrap,
  FilterWrap,
  ResetButton,
  ContentTitleWrap,
  NoDataWrap,
  Label,
  Check,
  FilterSpan,
} from '../../style/style';

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

  const onMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.name;
    if (target === CategoryName.재료) {
      setIsMaterialActive(true);
    } else {
      setIsProcessingActive(true);
    }
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget.slot;
    if (target === CategoryName.재료) {
      setIsMaterialActive(false);
    } else {
      setIsProcessingActive(false);
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
    <Wrapper>
      <ContentTitleWrap>
        <h2>들어온 요청</h2>
        <span>파트너님에게 딱 맞는 요청서를 찾아보세요.</span>
      </ContentTitleWrap>
      <SpaceBetweenMo>
        <FlexStart>
          <FilterWrap
            className="processingMethod"
            slot="processingMethod"
            onMouseLeave={onMouseLeave}
          >
            <FilterButton
              name="processingMethod"
              onMouseEnter={onMouseEnter}
              click={methodLength !== 0}
            >
              가공방식
              {methodLength !== 0 && <span>{`(${methodLength})`}</span>}
            </FilterButton>
            <div style={{ height: '4px' }} />
            {isProcessingActive && (
              <FilterListWrap>
                {PROCESSING_METHOD.map((method, index) => (
                  <FilterList key={index}>
                    <Label>
                      <Check
                        type="checkbox"
                        id={method}
                        name={method}
                        value={method}
                        checked={processingMethodChecked[index]}
                        onChange={(e) => handleOnChange(index, e)}
                      />
                      <FilterSpan>{method}</FilterSpan>
                    </Label>
                  </FilterList>
                ))}
              </FilterListWrap>
            )}
          </FilterWrap>
          <FilterWrap slot="material" onMouseLeave={onMouseLeave}>
            <FilterButton
              name="material"
              onMouseEnter={onMouseEnter}
              click={materialLength !== 0}
            >
              재료
              {materialLength !== 0 && <span>{`(${materialLength})`}</span>}
            </FilterButton>
            {isMaterialActive && (
              <FilterListWrap>
                {MATERIAL.map((material, index) => (
                  <FilterList key={index}>
                    <Label>
                      <Check
                        type="checkbox"
                        id={material}
                        name={material}
                        value={material}
                        checked={materialChecked[index]}
                        onChange={(e) => handleOnChange(index, e)}
                      />
                      <FilterSpan>{material}</FilterSpan>
                    </Label>
                  </FilterList>
                ))}
              </FilterListWrap>
            )}
          </FilterWrap>
          {(methodLength !== 0 || materialLength !== 0) && (
            <ResetButton onClick={resetFilter}>
              <img src={reset} alt="reset" />
              필터링 리셋
            </ResetButton>
          )}
        </FlexStart>
        <CheckBoxWrapper>
          <CheckBox
            type="checkbox"
            id="status"
            checked={toggle}
            onChange={onHandleToggle}
          />
          <CheckBoxLabel htmlFor="status" />
          <span>상담 중인 요청만 보기</span>
        </CheckBoxWrapper>
      </SpaceBetweenMo>
      <CardContain>
        {filteredOrders.length === 0 ? (
          <NoDataWrap>조건에 맞는 견적 요청이 없습니다.</NoDataWrap>
        ) : (
          filteredOrders.map((e, index) => <Card key={index} cardData={e} />)
        )}
      </CardContain>
    </Wrapper>
  );
};

export default Container;
