import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme';
import { font } from '../../../../styles/Common';

type SkillPropsType = {
  iconId?: string;
  text?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  gap?: string;
  title: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      {props.iconId && (
        <Icon
          iconId={props.iconId}
          width={props.width}
          height={props.height}
          viewBox={props.viewBox}
        />
      )}
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

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

  @media ${theme.media.mobile} {
    width: 160px;
    height: 160px;
    padding: 20px 20px 30px 20px;
  }
`;

const SkillTitle = styled.h3`
  ${font({ weight: 300, color: `${theme.colors.fontColorSecond}`, Fmax: 24, Fmin: 18})};
`;
