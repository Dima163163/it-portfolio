import styled from 'styled-components';
import { Icon } from '../../../icon/Icon';

type SlidePropsType = {
  title: string;
  text: string;
  src: string;
};

export const Slide = (props: SlidePropsType) => {
  return (
    <StyledSlide>
      <StyledImageWrapper>
        <Image src={props.src} />
      </StyledImageWrapper>
      <SlideContent>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link>
          <span>More</span>
          <Icon width='14' height='10' viewBox='0 0 14 10' iconId='btnArrow' />
        </Link>
      </SlideContent>
    </StyledSlide>
  );
};

const StyledSlide = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  padding: 50px;
  gap: 30px;
  box-shadow: 0 4px 15px 0 rgba(27, 27, 27, 0.28);
  background: linear-gradient(135deg, #414141 0%, #2d2d2d 100%);
  border-radius: 29px
`;

const StyledImageWrapper = styled.div`
  min-width: 493px;
  height: 500px;
  overflow: hidden;
  position: relative;
  border-radius: 29px;
`;

const Image = styled.img`
  position: absolute;
  left: -70px;
`;

const SlideContent = styled.div`
  padding-top: 42px;
`

const Title = styled.h4`
  font-family: 'Arodora Pro', sans-serif;
  font-weight: 300;
  font-size: 24px;
  color: #fff;
  margin-bottom: 25px;
`;

const Text = styled.p`
  font-family: 'Arodora Pro', sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  max-width: 290px;
  margin-bottom: 25px;
`;

const Link = styled.a`
  display: block;
  color: #e2a100;
  cursor: pointer;
  span {
    margin-right: 7px;
  }
`;
