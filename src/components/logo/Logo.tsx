import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const Logo = () => {
  return (
    <StyledLogo href='/'>
      <Icon iconId={"logoSvg"} width='65' height='48' viewBox='0 0 65 48'/>
      TimDim
    </StyledLogo>
  );
};


const StyledLogo = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  color: #fff;
  font-family: 'Nico Moji', sans-serif;
  font-weight: 400;
  font-size: 18px;
`