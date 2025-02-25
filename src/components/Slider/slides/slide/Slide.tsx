import styled from 'styled-components'
import { Icon } from '../../../icon/Icon'
import { FlexWrapper } from '../../../flexWrapper/FlexWrapper'

type SlidePropsType = {
  title: string
  text: string
  src: string
}

export const Slide = (props: SlidePropsType) => {
  return (
    <StyledSlide>
      <StyledImageWrapper>
        <Image src={props.src}/>
      </StyledImageWrapper>
      <FlexWrapper $direction='column'>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link>
          More
          <Icon width='13' height='8' viewBox='0 0 13 8' iconId='btnArrow'/>
        </Link>
      </FlexWrapper>
    </StyledSlide>
  )
}

const StyledSlide = styled.div`
  display: flex;

`

const StyledImageWrapper = styled.div`
  min-width: 493px;
  height: 500px;
  overflow: hidden;
  position: relative;
  border-radius: 29px;
`

const Image = styled.img`
  position: absolute;
  left: -70px;
`

const Title = styled.h4`
  
`

const Text = styled.p`
  
`

const Link = styled.a`
`