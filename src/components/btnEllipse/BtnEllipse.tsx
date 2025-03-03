import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const BtnEllipse = styled.button`
  border-radius: 100%;
  background: linear-gradient(315deg, ${theme.colors.firstBgBtn} 0%, ${theme.colors.secondBgBtn} 100%);
  border: 2px solid transparent;
  min-width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${theme.colors.fontColorFirst};

  &:hover{
    background: transparent;
    border-color: ${theme.colors.secondBgBtn};
    color: ${theme.colors.secondBgBtn};
  }

  &:disabled {
    background: ${theme.colors.thirdBgBtn};
    pointer-events: none;
  }
`;
