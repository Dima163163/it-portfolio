import styled from 'styled-components';

export const Button = styled.button`
  height: 47px;
  padding: 10px 38px 12px 41px;
  border-radius: 6px;
  border: 2px solid transparent;
  box-shadow: 0 2px 13px 0 rgba(226, 158, 0, 0.48);
  background: linear-gradient(315deg, #e2a300 0%, #e29500 100%);
  text-transform: uppercase;
  font-family: 'NEXT ART', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #000;
  &:hover {
    background: none;
    border-color: #e2a300;
    color: #e2a300;
  }
`