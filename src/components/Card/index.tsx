import React from 'react';
import { OrderInfo } from '../../commons/type';
import { Status } from '../../commons/common';
import './style.css';

interface Props {
  cardData: OrderInfo;
}

const Card: React.FC<Props> = ({ cardData }) => {
  return (
    <div className="card__container">
      <div className="card__header">
        <h4>{cardData.title}</h4>
        <span
          style={{
            display: cardData.status === Status.대기중 ? 'none' : 'flex',
          }}
        >
          {cardData.status}
        </span>
      </div>
      <p>{cardData.client}</p>
      <p>{cardData.due}</p>
      <hr />
      <p>
        도면개수
        <span>{cardData.count}개</span>
      </p>
      <p>
        총수량
        <span>{cardData.amount}개</span>
      </p>
      <p>
        가공방식
        {cardData.method.map((elem, index) => {
          if (index === cardData.method.length - 1) {
            return <span>{elem}</span>;
          }
          return <span>{elem}, </span>;
        })}
      </p>
      <p>
        재료
        {cardData.material.map((elem, index) => {
          if (index === cardData.material.length - 1) {
            return <span>{elem}</span>;
          }
          return <span>{elem}, </span>;
        })}
      </p>
      <div>
        <button>요청내역보기</button>
        <button>채팅하기</button>
      </div>
    </div>
  );
};

export default Card;
