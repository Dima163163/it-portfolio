import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme';
import { font } from '../../../../styles/Common';

type SkillPropsType = {
  iconId: string;
  viewBox?: string;
  title: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <IconWrapper>
        <Icon
          iconId={props.iconId}
          viewBox={props.viewBox}
        />
      </IconWrapper>
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const IconWrapper = styled.div`
  width: 120px;
  height: 120px;

  @media ${theme.media.tablet} {
    width: 50px;
    max-height: 50px;
  }
`

const StyledSkill = styled.div`
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
    padding: 20px 20px 30px 20px;
    gap: 20px;
  }
`;

const SkillTitle = styled.h3`
  ${font({ weight: 300, color: `${theme.colors.fontColorSecond}`, Fmax: 24, Fmin: 18})};
`;
