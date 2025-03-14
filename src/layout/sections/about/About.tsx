import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import photo1 from '../../../assets/images/photo-about-1.png';
import photo1_2x from '../../../assets/images/photo-about-1@2x.png';
import photo1_3x from '../../../assets/images/photo-about-1@3x.png';
import photo1Webp from '../../../assets/images/photo-about-1.webp';
import photo1Webp2x from '../../../assets/images/photo-about-1@2x.webp';
import photo1Webp3x from '../../../assets/images/photo-about-1@3x.webp';
import photo2 from '../../../assets/images/photo-about-2.png';
import photo2_2x from '../../../assets/images/photo-about-2@2x.png';
import photo2_3x from '../../../assets/images/photo-about-2@3x.png';
import photo2Webp from '../../../assets/images/photo-about-2.webp';
import photo2Webp2x from '../../../assets/images/photo-about-2@2x.webp';
import photo2Webp3x from '../../../assets/images/photo-about-2@3x.webp';
import photo3 from '../../../assets/images/photo-about-3.png';
import photo3_2x from '../../../assets/images/photo-about-3@2x.png';
import photo3_3x from '../../../assets/images/photo-about-3@3x.png';
import photo3Webp from '../../../assets/images/photo-about-3.webp';
import photo3Webp2x from '../../../assets/images/photo-about-3@2x.webp';
import photo3Webp3x from '../../../assets/images/photo-about-3@3x.webp';
import { Ellipse } from '../../../components/ellipse/Ellipse';
import { Container } from '../../../components/container/Container';
import { SectionTitle } from '../../../components/sectionTilte/SectionTitle';
import { theme } from '../../../styles/Theme';
import { S } from './About_Styles';
import React from 'react';

export const About: React.FC = () => {
  return (
    <S.About id={'about me'}>
      <Container>
        <S.AboutWrapper>
          <Ellipse
            $width='796px'
            $height='792px'
            $boxshadow='0 4px 70px rgba(255, 255, 255, 0.25)'
            $inset='86px auto auto -58px'
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
            $inset='38px 70px auto auto'
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
            $inset='auto 71px -85px auto'
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
          <S.AboutContent>
            <FlexWrapper $direction={'column'} $gap={'196px'}>
              <S.WrapperPhoto $width={'330px'} $height={'378px'}>
                <S.BorderPhoto>
                  <picture>
                    <source srcSet={`${photo1Webp} 1x, ${photo1Webp2x} 2x, ${photo1Webp3x} 3x`} type='image/webp'/>
                    <source srcSet={`${photo1_2x} 2x, ${photo1_3x} 3x`} />
                    <S.Photo src={photo1} alt={photo1} />
                  </picture>
                </S.BorderPhoto>
              </S.WrapperPhoto>
              <S.WrapperPhoto $width={'307px'} $height={'339px'}>
                <S.BorderPhoto>
                  <picture>
                    <source srcSet={`${photo2Webp} 1x, ${photo2Webp2x} 2x, ${photo2Webp3x} 3x`} type='image/webp'/>
                    <source srcSet={`${photo2_2x} 2x, ${photo2_3x} 3x`} />
                    <S.Photo src={photo2} alt={photo2} />
                  </picture>
                </S.BorderPhoto>
              </S.WrapperPhoto>
            </FlexWrapper>
            <S.AboutDescriptionWrapper>
              <S.AboutDescription>
                <SectionTitle $padding={'0 0 36px 0'} $margin={'-30px 0 0 0'}>
                  About me
                </SectionTitle>
                <S.AboutText>
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
                </S.AboutText>
              </S.AboutDescription>
            </S.AboutDescriptionWrapper>
            <S.PhotoBox>
              <S.WrapperPhoto $width={'340px'} $height={'465px'}>
                <S.BorderPhoto>
                  <picture>
                    <source srcSet={`${photo3Webp} 1x, ${photo3Webp2x} 2x, ${photo3Webp3x} 3x`} type='image/webp'/>
                    <source srcSet={`${photo3_2x} 2x, ${photo3_3x} 3x`} />
                    <source srcSet={photo3Webp}/>
                    <S.Photo src={photo3} alt={photo3} />
                  </picture>
                </S.BorderPhoto>
              </S.WrapperPhoto>
            </S.PhotoBox>
          </S.AboutContent>
        </S.AboutWrapper>
      </Container>
    </S.About>
  );
};