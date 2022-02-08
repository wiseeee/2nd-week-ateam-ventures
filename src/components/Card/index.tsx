import React from 'react';
import { OrderInfo } from '../../commons/type';
import { Status } from '../../commons/common';
import {
  CardWrap,
  CardTitle,
  SpaceBetween,
  Statusicon,
  CardContent,
  CardContentGray,
  Table,
  TR,
  TH,
  TD,
  Button,
  BorderButton,
} from '../../style/style';

interface Props {
  cardData: OrderInfo;
}

const Card: React.FC<Props> = ({ cardData }) => {
  return (
    <>
      <CardWrap>
        <SpaceBetween>
          <CardTitle>{cardData.title}</CardTitle>
          <Statusicon
            style={{
              display:
                cardData.status === Status.대기중 ? 'none' : 'inline-block',
            }}
          >
            {cardData.status}
          </Statusicon>
        </SpaceBetween>
        <CardContent>{cardData.client}</CardContent>
        <CardContentGray>{cardData.due}</CardContentGray>
        <hr style={{ border: '1px solid #E5E5E5' }} />
        <Table>
          <TR>
            <TH>도면개수</TH>
            <TD>{cardData.count}개</TD>
          </TR>
          <TR>
            <TH>총수량</TH>
            <TD>{cardData.amount}개</TD>
          </TR>
          <TR>
            <TH>가공방식</TH>
            <TD>
              {cardData.method.map((elem, index) => {
                const newElem =
                  index === cardData.method.length - 1
                    ? String(elem)
                    : String(elem) + ', ';
                return <span key={index}>{newElem}</span>;
              })}
            </TD>
          </TR>
          <TR>
            <TH>재료</TH>
            <TD>
              {cardData.material.map((elem, index) => {
                const newElem =
                  index === cardData.material.length - 1
                    ? String(elem)
                    : String(elem) + ', ';
                return <span key={index}>{newElem}</span>;
              })}
            </TD>
          </TR>
        </Table>
        <div>
          <Button>요청내역보기</Button>
          <BorderButton>채팅하기</BorderButton>
        </div>
      </CardWrap>
    </>
  );
};

export default Card;
