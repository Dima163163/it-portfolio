import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { theme } from '../../styles/Theme';

export const Logo = () => {
  return (
    <StyledLogo href='/'>
      <IconWrapper>
        <Icon iconId={'logoSvg'} viewBox='0 0 65 48' />
      </IconWrapper>
      TimDim
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${theme.colors.fontColorSecond};
  font-family: 'Nico Moji', sans-serif;
  font-weight: 400;
  font-size: 18px;
`;

const IconWrapper = styled.div`
  width: 65px;
  height: 48px;
`