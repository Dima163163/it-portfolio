import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { FlexWrapper } from '../../components/flexWrapper/FlexWrapper';

const Footer = styled.footer`
position: relative;
  background-color: ${theme.colors.primaryBg};
  padding: 50px 0;

  ul:first-child {
    gap: 18px;
    margin-right: 115px;
  }

  @media ${theme.media.laptop} {
    ul:first-child {
      max-width: max-content;
      margin-right: 0;
      margin-bottom: 50px;
    }
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
  gap: 38px;

  @media ${theme.media.laptop} {
    gap: 18px;
  }
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

const CopyrightWrapper = styled.div`
  padding-left: 15px;

  @media ${theme.media.laptop}{
    text-align: center;
  }
`;

const Copyright = styled.small`
  font-weight: 300;
  font-size: 18px;
  color: ${theme.colors.fontColorSecond};
  display: inline-block;
`;

const FooterContent = styled.div`
  display: flex;
  max-width: 773px;

  margin: 0 auto;
  flex-wrap: wrap;

  ${FlexWrapper}:nth-of-type(1) {
    margin-right: 75px;
  }

  ${FlexWrapper}:nth-of-type(2) {
    gap: 55px;
  }

  ${FooterLink} {
    font-size: 18px;
    font-weight: 300;
    color: ${theme.colors.fontColorSecond};
    transition: ${theme.animation.transition};

    &:hover {
      color: ${theme.colors.firstBgBtn}
    }
  }

  @media ${theme.media.laptop} {
    flex-direction: column;

    ${FlexWrapper}:nth-of-type(1) {
      margin-right: 0;
      max-width: max-content;
      margin-bottom: 78px;
    }
  }

  @media ${theme.media.tablet} {
    ${FlexWrapper}:last-child {
      min-width: 100%;
    }
  }
`;

export const S = {
  Footer,
  FooterTitle,
  FooterList,
  FooterItem,
  FooterLink,
  CopyrightWrapper,
  Copyright,
  FooterContent
};
