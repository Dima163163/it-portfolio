import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

const Skill = styled.div`
  border-radius: 29px;
  /* width: 100%;
  height: 100%; */
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

  svg {
    width: 120px;
    height: 120px;
  }

  @media ${theme.media.tablet} {
    width: 160px;
    height: 160px;
    padding: 20px 20px 20px 20px;
    gap: 20px;

    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

const Skills = styled.section`
  position: relative; 
  background-image: linear-gradient(to bottom, ${theme.colors.primaryBg} 0%, ${theme.colors.secondaryBg} 100%);
  padding: 50px 0;
  text-align: center;

  ${FlexWrapper} div:last-child ${Skill} svg {
    height: 87px;
  }

  @media ${theme.media.tablet} {
    ${FlexWrapper} div:last-child ${Skill} svg {
      height: 50px;
    }
  }

  @media ${theme.media.mobile} {
    ${FlexWrapper} {
      gap: 25px
    }
  }
`;


const SkillTitle = styled.h3`
  ${font({ weight: 300, color: `${theme.colors.fontColorSecond}`, Fmax: 24, Fmin: 18})};
`;

const SkillsBox = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 270px);
  grid-auto-rows: 270px;
  gap: 30px;

  & div:last-child ${Skill} {
    gap: 10px;
  }

  @media ${theme.media.tablet} {
    grid-template-columns: repeat(auto-fit, 160px);
    grid-auto-rows: 160px;
    gap: 20px;

    & div ${Skill} {
      gap: 20px;
    }
  }
`;


export const S = {
  Skills,
  Skill,
  SkillTitle,
  SkillsBox
}