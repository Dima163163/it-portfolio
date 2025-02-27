import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import photo1 from '../../../assets/images/photo-about-1.png';
import photo2 from '../../../assets/images/photo-about-2.png';
import photo3 from '../../../assets/images/photo-about-3.png';
import { Ellipse } from '../../../components/ellipse/Ellipse';
import { Container } from '../../../components/container/Container';
import { SectionTitle } from '../../../components/sectionTilte/SectionTitle';

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <StyledAboutWrapper>
          <Ellipse
            $width='792px'
            $height='792px'
            $boxshadowcolor='0 4px 70px 0 rgba(255, 255, 255, 0.25)'
            $inset='0 auto auto 0'
          >
            <svg viewBox="70 70 792 792" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="466" cy="462" r="351.5" stroke="#E4E4E4" strokeWidth="89" shapeRendering="crispEdges" />
            </svg>
          </Ellipse>
          <Ellipse
            $width='356px'
            $height='356px'
            $boxshadowcolor='0 4px 70px 0 rgba(226, 162, 0, 0.25)'
            $inset='40px 60px auto auto'
          >
            <svg viewBox="70 66 356 356" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="248" cy="244" r="161" stroke="#E2A200" strokeWidth="34" shapeRendering="crispEdges" />
            </svg>
          </Ellipse>
          <Ellipse
            $width='486px'
            $height='486px'
            $boxshadowcolor='0 4px 70px 0 rgba(0, 193, 236, 0.25)'
            $inset='auto 75px 0 auto'
          >
            <svg viewBox="70 66 486 486" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="313" cy="309" r="215.5" stroke="#00C4F0" strokeWidth="55" shapeRendering="crispEdges" />
            </svg>
          </Ellipse>
          <AboutContent>
            <FlexWrapper $direction={'column'} $gap={'196px'}>
              <WrapperPhoto $width={'330px'} $height={'378px'}>
                <BorderPhoto>
                  <Photo src={photo1} />
                </BorderPhoto>
              </WrapperPhoto>
              <WrapperPhoto $width={'307px'} $height={'339px'}>
                <BorderPhoto>
                <Photo src={photo2} />
                </BorderPhoto>
              </WrapperPhoto>
            </FlexWrapper>
            <AboutDescriptionWrapper>
              <AboutDescription>
                <SectionTitle $padding={'0 0 36px 0'} $margin={'-30px 0 0 0'}>About me</SectionTitle>
                <AboutText>
                  Hello again everyone! So, you already know that my name is Gleb. A
                  little about myself: 35 y.o., athlete-football player, I
                  love creativity since childhood, I live in Samara, Russia. Why
                  programming? Everything is elementary - I like it, the profession
                  of the future, thanks to which I can provide myself and fulfill my
                  dream - travel, at the moment I specialize in 
                  front-end and turnkey websites. Why should
                  you choose me? I approach each order with great responsibility and
                  love, as I want to make a name for myself, exclude plagiarism and
                  negligence, fully study the project, the client and its target
                  audience, work for quality, trying to make an order as quickly and
                  uniquely as possible, taking into account all the edits and
                  wishes. By trusting me, you will get the maximum return for your
                  project, save your nerves and time. If you are interested in me ,
                  you want to know something more or use my services, then I will
                  provide all my contacts below.
                </AboutText>
              </AboutDescription>
            </AboutDescriptionWrapper>
            <PhotoBox>
              <WrapperPhoto $width={'340px'} $height={'465px'}>
                <BorderPhoto>
                  <Photo src={photo3} />
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
  $width: string
  $height: string
}

const StyledAbout = styled.section`
  padding: 50px 0;
`;

const StyledAboutWrapper = styled.div`
  position: relative;
  display: flex;
  margin-left: -47px;
  margin-right: -61px;
`

const AboutContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  padding-left: 172px;
`;

const PhotoBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: -40px;
`

const WrapperPhoto = styled.div<WrapperPhotoPropsType>`
  min-width: ${props => props.$width};
  height: ${props => props.$height};
  border-radius: 14px;
  padding: 23px;
  background-color: #2c2c2c;
`

const BorderPhoto = styled.div`
  border: 4px solid #686868;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Photo = styled.img`
  width: 100%;
  overflow: hidden;
`;

const AboutDescriptionWrapper = styled.div`
  padding-top: 70px;
`

const AboutDescription = styled.div`
  max-width: 496px;
  background-color: #2c2c2c;
  padding: 0 63px 63px 63px;
  border-radius: 14px;
  max-height: min-content;
  margin-left: -20px;
`


const AboutText = styled.p`
  font-family: 'Arodora Pro', sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #fff;
  letter-spacing: 0.01em;
`;
