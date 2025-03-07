import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { BtnEllipse } from '../../components/btnEllipse/BtnEllipse';
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';

const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 50px 0;

  ul:first-child {
    gap: 18px;
  }
`;

const FooterTitle = styled.h3`
  font-weight: 300;
  font-size: 18px;
  color: ${theme.colors.fontColorSecond};
  margin-bottom: 18px;
`;

const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const FooterItem = styled.li`
  font-weight: 300;
  font-size: 18px;
  color: ${theme.colors.fontColorSecond};
`;

const FooterLink = styled.a`
  font-weight: 300;
  font-size: 18px;
  color: ${theme.colors.fontColorSecond};
`;

const FooterBox = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-between;

  ${BtnEllipse} {
    svg {
      width: 35px;
      height: 35px;
    }
  }
`;

const CopyrightWrapper = styled.div`
  padding-left: 15px;
`;

const Copyright = styled.span`
  font-weight: 300;
  font-size: 18px;
  color: ${theme.colors.fontColorSecond};
  display: inline-block;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 773px;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;

  ${FooterLink} {
    font-size: 18px;
    font-weight: 300;
    color: ${theme.colors.fontColorSecond};

    &:hover {
      color: ${theme.colors.firstBgBtn}
    }
  }

  @media ${theme.media.tablet} {
    gap: 50px;


    ${FlexWrapper}:last-child {
      width: 100%;
      text-align: center;
    }
  }
`;

export const S = {
  Footer,
  FooterTitle,
  FooterList,
  FooterItem,
  FooterLink,
  FooterBox,
  CopyrightWrapper,
  Copyright,
  FooterContent
};
