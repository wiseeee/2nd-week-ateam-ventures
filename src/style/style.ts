import styled from 'styled-components';

export const CardContain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;

  @media ${(props) => props.theme.mobile} {
    flex-direction: row;
  }
`;

export const CardWrap = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 24px 16px;
  width: 360px;
  &: hover {
    background-color: #ffffff;
    border: 2px solid #2196f3;
    border-radius: 4px;
  }
`;

export const CardTitle = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 4px;
`;

export const Statusicon = styled.span`
  border: 1px solid #ffa000;
  box-sizing: border-box;
  border-radius: 12px;
  color: #ffa000;
  font-size: 12px;
  padding: 2px 8px;
  line-height: 20px;
`;
export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CardContent = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;
export const CardContentGray = styled(CardContent)`
  margin-top: 32px;
  color: #939fa5;
`;
export const Table = styled.table`
  font-size: 14px;
  border-collapse: collapse;
  margin: 32px 0;
`;
export const TR = styled.tr``;
export const TH = styled.th`
  font-weight: 500;
  text-align: left;
  padding-right: 32px;
  padding-bottom: 8px;
`;
export const TD = styled.td`
  font-weight: 700;
  text-align: left;
`;

export const Button = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  background-color: #2196f3;
  border: 1px solid #2196f3;
  font-size: 14px;
  padding: 6ps 12px;
  color: #fff;
`;

export const BorderButton = styled(Button)`
  background-color: #fff;
  color: #2196f3;
  margin-left: 8px;
`;
