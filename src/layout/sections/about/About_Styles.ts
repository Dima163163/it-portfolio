import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { Container } from '../../../components/container/Container';
import { Ellipse } from '../../../components/ellipse/Ellipse';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';

type WrapperPhotoPropsType = {
  $width: string;
  $height: string;
};

const About = styled.section`
  padding: 50px 0;
  overflow: hidden;

  @media ${theme.media.tablet} {
    padding: 45px 0 126px;
  }

  @media ${theme.media.mobile} {
    ${Container} {
      padding: 0;
    }
  }
`;

const AboutWrapper = styled.div`
  position: relative;
  display: flex;
  margin-right: -58px;

  @media ${theme.media.laptop} {
    margin-right: 0;
    justify-content: center;
    align-items: center;

    ${Ellipse}:nth-child(1) {
      display: none;
    }

    ${Ellipse}:nth-child(2) {
      bottom: 0;
      right: 0;
      top: auto;
      left: auto;
    }

    ${Ellipse}:nth-child(3) {
      bottom: auto;
      right: auto;
      top: 0;
      left: -100px;
    }
  }

  @media ${theme.media.tablet} {
    ${Ellipse}:nth-child(2) {
      bottom: -100px;
      right: -100px;
    }

    ${Ellipse}:nth-child(3) {
      display: none;
    }
  }
`;

const PhotoBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: -40px;

  @media ${theme.media.laptop} {
    margin-left: 0;

    &:last-child {
      margin-top: -31px;
      max-width: 307px;
      height:400px;
    }
  }
`;

const AboutContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: center;
  padding-left: 135px;

  @media ${theme.media.laptop} {
    padding-left: 0;
    flex-wrap: wrap;
    align-items: center;

    ${FlexWrapper}:first-child {
      display: none;
    }
  }

  @media ${theme.media.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const WrapperPhoto = styled.div<WrapperPhotoPropsType>`
  min-width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  border-radius: 14px;
  padding: 23px;
  background-color: ${theme.colors.fiveBg};

  @media ${theme.media.laptop} {
    min-width: 100%;
    height: 100%;
  }
`;

const BorderPhoto = styled.div`
  border: 4px solid ${theme.colors.sixBg};
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const AboutDescriptionWrapper = styled.div`
  padding-top: 70px;
  margin-left: -35px;

  @media ${theme.media.laptop} {
    margin-left: 0;
    padding-top: 0;
  }
`;

const AboutDescription = styled.div`
  max-width: 496px;
  background-color: ${theme.colors.fiveBg};
  padding: 0 63px 63px 63px;
  border-radius: 14px;
  max-height: min-content;

  @media ${theme.media.mobile} {
    padding: 0 15px 53px 15px;
  }
`;

const AboutText = styled.p`
  font-weight: 300;
  font-size: 20px;
  color: ${theme.colors.fontColorSecond};
  letter-spacing: 0.01em;
`;


export const S = {
  About,
  AboutWrapper,
  PhotoBox,
  AboutContent,
  WrapperPhoto,
  BorderPhoto,
  Photo,
  AboutDescriptionWrapper,
  AboutDescription,
  AboutText
}