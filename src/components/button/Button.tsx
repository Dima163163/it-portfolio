import styled from 'styled-components';

type ButtonPropsType = {
  text: string
}

export const Button = (props: ButtonPropsType) => {
  return (
    <StyledButton>{props.text}</StyledButton>
  )
};

const StyledButton = styled.button`
  width: 200px;
  height: 47px;
  padding: 14px 38px 13px 41px;
  font-weight: 700;
  font-size: 18px;
  color: #000;
  border-radius: 6px;
  width: 200px;
  height: 47px;
  box-shadow: 0 2px 13px 0 rgba(226, 158, 0, 0.48);
  background: linear-gradient(315deg, #e2a300 0%, #e29500 100%);
  text-transform: uppercase;
`