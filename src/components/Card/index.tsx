import React from 'react';
import { OrderInfo } from '../../commons/constants';
import './style.css';
interface Props {
  cardData: OrderInfo;
}

const Card: React.FC<Props> = ({ cardData }) => {
  return (
    <div key={cardData.id} className="card__container">
      <div className="card__header">
        <h4>{cardData.title}</h4>
        <span
          style={{
            display: cardData.status === '대기중' ? 'none' : 'flex',
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
        <span>{cardData.count}</span>
      </p>
      <p>
        총수량
        <span>{cardData.count}</span>
      </p>
      <p>
        가공방식
        <span>{cardData.count}</span>
      </p>
      <p>
        재료
        <span>{cardData.count}</span>
      </p>
      <div>
        <button>요청내역보기</button>
        <button>채팅하기</button>
      </div>
    </div>
  );
};

export default Card;
