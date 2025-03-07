import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { Skill } from './skill/Skill';
import { SectionTitle } from '../../../components/sectionTilte/SectionTitle';
import { Container } from '../../../components/container/Container';
import { S } from './Skills_Styles';
import React from 'react';

type SkillItemPropsType = {
  iconId: string;
  title: string;
  viewBox?: string;
};

type SkillsArrPropsType = SkillItemPropsType[];

const skillsArr: SkillsArrPropsType = [
  {
    iconId: 'html',
    title: 'HTML',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'css',
    title: 'CSS',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'js',
    title: 'JavaScript',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'ts',
    title: 'TypeScript',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'styledComponents',
    title: 'Styled Components',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'react',
    title: 'React',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'reactNative',
    title: 'React Native',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'redux',
    title: 'Redux',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'github',
    title: 'Github',
    viewBox: '-10 -10 120 120',
  },
  {
    iconId: 'figma',
    title: 'Figma',
    viewBox: '-10 -10 120 120',
  },
  {
    iconId: 'git',
    title: 'Git',
    viewBox: '-10 -10 120 120',
  },
  {
    iconId: 'sass',
    title: 'Sass',
    viewBox: '0 0 120 87',
  }
];

export const Skills: React.FC = () => {
  return (
    <S.Skills id={'skills'}>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper $wrap={'wrap'} $gap={'30px'} $justify={'center'}>
          {skillsArr.length > 0 &&
            skillsArr.map((item, i) => (
              <Skill
                key={i}
                iconId={item.iconId}
                title={item.title}
                viewBox={item.viewBox}
              />
            ))}
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};


