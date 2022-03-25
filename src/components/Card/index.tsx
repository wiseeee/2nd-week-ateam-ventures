import React from 'react';
import { OrderInfo } from '../../commons/type';
import { Status } from '../../commons/common';
import * as S from '../../style/style';

interface Props {
  cardData: OrderInfo;
}

const Card: React.FC<Props> = ({ cardData }) => {
  return (
    <S.CardWrap>
      <S.SpaceBetween>
        <S.CardTitle>{cardData.title}</S.CardTitle>
        <S.StatusIcon
          style={{
            display:
              cardData.status === Status.대기중 ? 'none' : 'inline-block',
          }}
        >
          {cardData.status}
        </S.StatusIcon>
      </S.SpaceBetween>
      <S.CardContent>{cardData.client}</S.CardContent>
      <S.CardContentGray>{cardData.due}</S.CardContentGray>
      <hr style={{ border: '1px solid #E5E5E5' }} />
      <S.Table>
        <tbody>
          <S.TR>
            <S.TH>도면개수</S.TH>
            <S.TD>{cardData.count}개</S.TD>
          </S.TR>
          <S.TR>
            <S.TH>총수량</S.TH>
            <S.TD>{cardData.amount}개</S.TD>
          </S.TR>
          <S.TR>
            <S.TH>가공방식</S.TH>
            <S.TD>
              {cardData.method.map((elem, index) => {
                const newElem =
                  index === cardData.method.length - 1
                    ? String(elem)
                    : String(elem) + ', ';
                return <span key={index}>{newElem}</span>;
              })}
            </S.TD>
          </S.TR>
          <S.TR>
            <S.TH>재료</S.TH>
            <S.TD>
              {cardData.material.map((elem, index) => {
                const newElem =
                  index === cardData.material.length - 1
                    ? String(elem)
                    : String(elem) + ', ';
                return <span key={index}>{newElem}</span>;
              })}
            </S.TD>
          </S.TR>
        </tbody>
      </S.Table>
      <div>
        <S.Button>요청내역보기</S.Button>
        <S.BorderButton>채팅하기</S.BorderButton>
      </div>
    </S.CardWrap>
  );
};

export default Card;
