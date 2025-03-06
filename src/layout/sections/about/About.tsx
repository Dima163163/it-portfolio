import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import photo1 from '../../../assets/images/photo-about-1.png';
import photo2 from '../../../assets/images/photo-about-2.png';
import photo3 from '../../../assets/images/photo-about-3.png';
import { Ellipse } from '../../../components/ellipse/Ellipse';
import { Container } from '../../../components/container/Container';
import { SectionTitle } from '../../../components/sectionTilte/SectionTitle';
import { theme } from '../../../styles/Theme';

export const About = () => {
  return (
    <StyledAbout id={'about me'}>
      <Container>
        <StyledAboutWrapper>
          <Ellipse
            $width='792px'
            $height='792px'
            $boxshadow='0 4px 70px rgba(255, 255, 255, 0.25)'
            $inset='60px auto auto -100px'
            >
              <svg
                viewBox='70 70 792 792'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='466'
                  cy='462'
                  r='351.5'
                  stroke={`${theme.colors.ellipseColorThird}`}
                  strokeWidth='89'
                  shapeRendering='crispEdges'
                />
              </svg>
          </Ellipse>
          <Ellipse
            $width='356px'
            $height='356px'
            $boxshadow='0 4px 70px rgba(226, 162, 0, 0.25)'
            $inset='40px 60px auto auto'
            >
              <svg
                viewBox='70 66 356 356'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='248'
                  cy='244'
                  r='161'
                  stroke={`${theme.colors.ellipseColorSecond}`}
                  strokeWidth='34'
                  shapeRendering='crispEdges'
                />
              </svg>
          </Ellipse>
          <Ellipse
            $width='486px'
            $height='486px'
            $boxshadow='0 4px 70px rgba(0, 193, 236, 0.25)'
            $inset='auto 75px 0 auto'
            >
              <svg
                viewBox='70 66 486 486'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='313'
                  cy='309'
                  r='215.5'
                  stroke={`${theme.colors.ellipseColorFirst}`}
                  strokeWidth='55'
                  shapeRendering='crispEdges'
                />
              </svg>
          </Ellipse>
          <AboutContent>
            <FlexWrapper $direction={'column'} $gap={'196px'}>
              <WrapperPhoto $width={'330px'} $height={'378px'}>
                <BorderPhoto>
                  <Photo src={photo1} alt={photo1} />
                </BorderPhoto>
              </WrapperPhoto>
              <WrapperPhoto $width={'307px'} $height={'339px'}>
                <BorderPhoto>
                  <Photo src={photo2} alt={photo2} />
                </BorderPhoto>
              </WrapperPhoto>
            </FlexWrapper>
            <AboutDescriptionWrapper>
              <AboutDescription>
                <SectionTitle $padding={'0 0 36px 0'} $margin={'-30px 0 0 0'}>
                  About me
                </SectionTitle>
                <AboutText>
                  Hello again everyone! So, you already know that my name is
                  Dima. A little about myself: 35 y.o., like playing football. I
                  love creativity since childhood. I live in Samara, Russia. Why
                  programming? Everything is elementary - I like it, the
                  profession of the future, thanks to which I can provide myself
                  and fulfill my dream - travel, at the moment I specialize in
                  front-end and turnkey websites. Why should you choose me? I
                  approach each order with great responsibility and love, as I
                  want to make a name for myself, exclude plagiarism and
                  negligence, fully study the project, the client and its target
                  audience, work for quality, trying to make an order as quickly
                  and uniquely as possible, taking into account all the edits
                  and wishes. By trusting me, you will get the maximum return
                  for your project, save your nerves and time. If you are
                  interested in me , you want to know something more or use my
                  services, then I will provide all my contacts below.
                </AboutText>
              </AboutDescription>
            </AboutDescriptionWrapper>
            <PhotoBox>
              <WrapperPhoto $width={'340px'} $height={'465px'}>
                <BorderPhoto>
                  <Photo src={photo3} alt={photo3} />
                </BorderPhoto>
              </WrapperPhoto>
            </PhotoBox>
          </AboutContent>
        </StyledAboutWrapper>
      </Container>
    </StyledAbout>
  );
};

type WrapperPhotoPropsType = {
  $width: string;
  $height: string;
};

const StyledAbout = styled.section`
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

const StyledAboutWrapper = styled.div`
  position: relative;
  display: flex;
  margin-right: -58px;

  @media ${theme.media.laptop} {
    margin-right: 0;
    justify-content: center;
    align-items: center;

    ${Ellipse}:not(:nth-child(2)) {
      display: none;
    }

    ${Ellipse}:nth-child(2) {
      bottom: 0;
      right: 0;
      top: auto;
      left: auto;
    }
  }

  @media ${theme.media.tablet} {
    ${Ellipse}:nth-child(2) {
      bottom: -100px;
      right: -100px;
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
