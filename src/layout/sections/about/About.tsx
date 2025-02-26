import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import photo1 from '../../../assets/images/photo-about-1.png';
import photo2 from '../../../assets/images/photo-about-2.png';
import photo3 from '../../../assets/images/photo-about-3.png';
import { Skills } from '../skills/Skills';
import { Ellips } from '../../../components/ellips/Ellips';

export const About = () => {
  return (
    <StyledAbout>
      <Skills />
      <StyledAboutWrapper>
        <Ellips
          $width='792px'
          $height='792px'
          $boxshadowcolor='0 4px 70px 0 rgba(255, 255, 255, 0.25)'
          $inset='0 auto auto 0'
        >
          <svg viewBox="70 70 792 792" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="466" cy="462" r="351.5" stroke="#E4E4E4" strokeWidth="89" shapeRendering="crispEdges" />
          </svg>
        </Ellips>
        <Ellips
          $width='356px'
          $height='356px'
          $boxshadowcolor='0 4px 70px 0 rgba(226, 162, 0, 0.25)'
          $inset='0 0 auto auto'
        >
          <svg viewBox="70 70 356 356" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="248" cy="244" r="161" stroke="#E2A200" strokeWidth="34" shapeRendering="crispEdges" />
          </svg>
        </Ellips>
        <Ellips
          $width='486px'
          $height='486px'
          $boxshadowcolor='0 4px 70px 0 rgba(0, 193, 236, 0.25)'
          $inset='0 0 auto auto'
        >
          <svg viewBox="70 70 486 486" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="313" cy="309" r="215.5" stroke="#00C4F0" strokeWidth="55" shapeRendering="crispEdges" />
          </svg>
        </Ellips>
        <AboutContent>
          <FlexWrapper $direction={'column'}>
            <div>
              <Photo src={photo1} />
            </div>
            <div>
              <Photo src={photo2} />
            </div>
          </FlexWrapper>
          <div>
            <AboutTitle>About me</AboutTitle>
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
          </div>
          <div>
            <Photo src={photo3} />
          </div>
        </AboutContent>
      </StyledAboutWrapper>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  background: linear-gradient(135deg, #414141 0%, #2d2d2d 100%);
`;

const StyledAboutWrapper = styled.div`
  position: relative;
  display: flex;

`;

const AboutContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
`;

const Photo = styled.img`
  width: 450px;
  height: 600px;
  object-fit: cover;
`;

const AboutTitle = styled.h3`
  
`;

const AboutText = styled.p`
  
`;

const Circlce = styled.div`
  width: 356px;
  height: 356px;
  border-radius: 100%;
  box-shadow: 0 4px 70px 0 rgba(226, 162, 0, 0.25);
  svg {
    min-width: 100%;
    min-height: 100%;
  }
`;
