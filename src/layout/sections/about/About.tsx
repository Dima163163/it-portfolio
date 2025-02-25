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
          minWidthEllips='365px'
          heightEllips='365px'
          bgColor='#e2a200'
          boxShadow='0 4px 70px 0 rgba(226, 162, 0, 0.25)'
          widthSub='288px'
          heightSub='288px'
          bgColorSub='#353535'
          inset='0 0 auto auto'
        />
        <Ellips
          minWidthEllips='792px'
          heightEllips='792px'
          bgColor='#e4e4e4'
          boxShadow='0 4px 70px 0 rgba(255, 255, 255, 0.25)'
          widthSub='614px'
          heightSub='614px'
          bgColorSub='#353535'
          inset='98px auto auto 0'
        />
        <Ellips
          minWidthEllips='486px'
          heightEllips='486px'
          bgColor='#00c4f0'
          boxShadow='0 4px 70px 0 rgba(0, 193, 236, 0.25)'
          widthSub='376px'
          heightSub='376px'
          bgColorSub='#353535'
          inset='auto 0 0 auto'
        />
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
              little about myself: student, 18 y.o., athlete-football player, I
              love creativity since childhood, I live in Donetsk, Ukraine. Why
              programming? Everything is elementary - I like it, the profession of
              the future, thanks to which I can provide myself and fulfill my
              dream - travel, at the moment I specialize in web design, front-end
              and back-end development, turnkey websites. Why should you choose
              me? I approach each order with great responsibility and love, as I
              want to make a name for myself, exclude plagiarism and negligence,
              fully study the project, the client and its target audience, work
              for quality, trying to make an order as quickly and uniquely as
              possible, taking into account all the edits and wishes. By trusting
              me, you will get the maximum return for your project, save your
              nerves and time. If you are interested in me , you want to know
              something more or use my services, then I will provide all my
              contacts below.
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
`

const Photo = styled.img`
  width: 450px;
  height: 600px;
  object-fit: cover;
`;

const AboutTitle = styled.h3`
  
`;

const AboutText = styled.p`
  
`;
