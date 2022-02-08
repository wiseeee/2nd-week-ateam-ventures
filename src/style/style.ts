import styled from 'styled-components';
interface Props {
  click: boolean;
}

export const HeaderWrap = styled.header`
  width: 100%;
  padding: 25px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1565c0;
  box-sizing: border-box;
  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }
  @media ${(props) => props.theme.mobile} {
    padding: 16px 23px;
  }
`;

export const Menu = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    position: relative;
    display: block;
    top: -12px;
    span {
      display: block;
      width: 18px;
      height: 2px;
      background-color: #fff;
      position: absolute;
      left: 0;
      &:nth-child(1) {
        top: 0px;
      }
      &:nth-child(2) {
        top: 5px;
      }
      &:nth-child(3) {
        top: 10px;
      }
    }
  }
`;
export const UserBackground = styled.div`
  transform: translateX(-100%);
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 100vh;
    background-color: ${(props: Props) =>
      props.click ? '#000' : 'transparent'};
    transform: ${(props: Props) =>
      props.click ? 'translateX(0)' : 'translateX(-100%)'};
    opacity: 0.5;
    position: fixed;
    top: 0;
    left: 0;
  }
`;
export const LogoWrap = styled.div`
  img {
    height: 20px;
  }
  @media ${(props) => props.theme.mobile} {
    img {
      height: 12px;
      padding-left: 37px;
    }
  }
`;
export const UserWrap = styled.ul`
  list-style: none;
  margin: 0;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  li > button {
    color: #fff;
  }
  li > button > img {
    display: inline-block;
    height: 15px;
    padding-right: 8px;
  }
  li {
    position: relative;
    padding: 0 32px;
  }
  li + li {
    padding-right: 0;
  }
  li + li ::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 0;
    display: block;
    width: 1px;
    height: 16px;
    background-color: #fff;
  }
  @media ${(props) => props.theme.mobile} {
    z-index: 999;
    width: 70%;
    height: 100vh;
    background-color: #fff;
    opacity: 1;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0;
    transform: ${(props: Props) =>
      props.click ? 'translateX(0)' : 'translateX(-100%)'};
    transition: 1s;
    flex-direction: column;
    img {
      display: block;
      height: 12px;
    }
    li > button {
      color: #323d45;
    }
    li > button > img {
      filter: brightness(0%);
    }
    li {
      font-size: 14px;
      padding: 12px 32px;
    }
  }
`;

export const MoLogoWrap = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid #e5e5e5;
  }
`;
export const Wrapper = styled.div`
  max-width: 1130px;
  padding-top: 40px;
  margin: 0 auto;
  color: #323d45;
  @media ${(props) => props.theme.mobile} {
    margin: 0 20px;
    padding-top: 24px;
  }
  @media ${(props) => props.theme.laptop} {
    margin: 0 20px;
  }
`;
export const ContentTitleWrap = styled.div`
  margin-bottom: 32px;
  h2 {
    font-size: 20px;
    line-height: 32px;
    font-weight: 700;
    margin: 0;
  }
  span {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
`;
export const FilterWrap = styled.div`
  position: relative;
`;
export const FilterButton = styled.button`
  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 6px 35px 6px 8px;
  margin-right: 8px;
  position: relative;
  background: ${(props: Props) => (props.click ? '#2196f3' : '#fff')};
  color: ${(props: Props) => (props.click ? '#fff' : '#323D45')};
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    top: 13.5px;
    right: 19px;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #939fa5 transparent transparent transparent;
    border-color: ${(props: Props) =>
      props.click
        ? '#fff transparent transparent transparent'
        : '#939fa5 transparent transparent transparent'};
  
    }
  &: hover {
    border: 1px solid #2196f3;
`;

export const FilterListWrap = styled.ul`
  list-style: none;
  position: absolute;
  z-index: 4;
  top: 30px;
  left: 0px;
  width: fit-content;
  background: #ffffff;
  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 38px 12px 12px;
  margin: 0;
`;
export const FilterList = styled.li`
  width: fit-content;
  white-space: nowrap;
  input {
    margin: 4px 10px 4px 0;
  }
`;

export const Label = styled.label`
  align-items: center;
  display: flex;
`;

export const Check = styled.input`
  zoom: 1.5;
`;

export const FilterSpan = styled.span`
  display: flex;
  align-items: center;
`;

export const CardContain = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;

  @media ${(props) => props.theme.mobile} {
    flex-direction: row;
  }
  @media ${(props) => props.theme.laptop} {
    justify-content: center;
  }
`;
export const CheckBoxWrapper = styled.div`
  position: relative;
  span {
    font-size: 14px;
    font-weight: 500;
  }
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 15px;
  left: 0;
  width: 34px;
  height: 14px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: -5px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 3;
  border-radius: 15px;
  width: 42px;
  height: 24px;
  &:checked + ${CheckBoxLabel} {
    background: #bbdefb;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-left: 21px;
      transition: 0.2s;
      background: #2196f3;
    }
  }
`;

export const ResetButton = styled.button`
  background-color: transparent;
  border: 0px;
  color: #2196f3;
  font-size: 12px;
  img {
    width: 13px;
    padding-right: 12px;
  }
`;

export const CardWrap = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 24px 16px;
  width: 360px;
  color: #323d45;
  cursor: pointer;
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

export const StatusIcon = styled.span`
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
export const FlexStart = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const SpaceBetweenMo = styled(SpaceBetween)`
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
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

export const NoDataWrap = styled.div`
  text-align: center;
  border: 1px solid #c2c2c2;
  box-sizing: border-box;
  border-radius: 4px;
  color: #939fa5;
  width: 100%;
  padding: 40px 0;
`;
