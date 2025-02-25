import styled from 'styled-components'
import { Icon } from '../icon/Icon';
import { Slides } from './slides/Slides';
import { BtnEllipse } from '../btnEllips/BtnEllips';

export const Slider = () => {
  return (
    <StyledSlider>
      <BtnEllipse>
        <Icon width='35' height='35' viewBox='0 0 35 35' iconId='arrowLeft'/>
      </BtnEllipse>
      <Slides/>
      <BtnEllipse>
        <Icon width='35' height='35' viewBox='0 0 35 35' iconId='arrowRight'/>
      </BtnEllipse>
    </StyledSlider>
  )
}

const StyledSlider = styled.div`
  display: flex;
`;


