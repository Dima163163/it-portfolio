import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

const Skills = styled.section`
  position: relative; 
  background-image: linear-gradient(to top, ${theme.colors.secondaryBg} 0%, ${theme.colors.thirdBg} 100%);
  padding: 50px 0;
  text-align: center;

  @media ${theme.media.mobile} {
    ${FlexWrapper} {
      gap: 25px
    }
  }
`;

const IconWrapper = styled.div`
  width: 120px;
  height: 120px;
  color: ${theme.colors.fourBg};

  @media ${theme.media.tablet} {
    width: 50px;
    max-height: 50px;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`

const Skill = styled.div`
  border-radius: 29px;
  width: 270px;
  height: 270px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.47);
  background: ${theme.colors.fourBg};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  padding: 20px 20px 50px 20px;

  &:last-child {
    ${IconWrapper} {
      height: 87px;
    }
  }

  @media ${theme.media.tablet} {
    width: 160px;
    height: 160px;
    padding: 20px 20px 20px 20px;
    gap: 20px;

    &:last-child {
      gap: 5px;
    }
  }
`;

const SkillTitle = styled.h3`
  ${font({ weight: 300, color: `${theme.colors.fontColorSecond}`, Fmax: 24, Fmin: 16})};
`;

export const S = {
  Skills,
  IconWrapper,
  Skill,
  SkillTitle
}