import styled from 'styled-components';


export const BtnEllipse = styled.button`
  border-radius: 100%;
  background: linear-gradient(315deg, #e2a300 0%, #e29500 100%);
  border: 2px solid transparent;
  min-width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover{
    background: transparent;
    border-color: #e29500;
  }
`
