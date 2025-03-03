import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme';

type SkillPropsType = {
  iconId?: string;
  text?: string;
  width?: string;
  height?: string;
  viewBox?: string;
  gap?: string;
  title: string;
};

type StyledSkillPropsType = {
  $gap?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill $gap={props.gap}>
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

const StyledSkill = styled.div<StyledSkillPropsType>`
  border-radius: 29px;
  width: 270px;
  height: 270px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.47);
  background: ${theme.colors.fourBg};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: ${(props) => props.$gap || '30px'};
  padding: 20px 20px 50px 20px;
`;

const SkillTitle = styled.h3`
  font-weight: 300;
  font-size: 24px;
  color: ${theme.colors.fontColorSecond};
`;
