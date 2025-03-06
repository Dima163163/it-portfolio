import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { Skill } from './skill/Skill';
import { SectionTitle } from '../../../components/sectionTilte/SectionTitle';
import { Container } from '../../../components/container/Container';
import { theme } from '../../../styles/Theme';
type SkillItemPropsType = {
  iconId?: string;
  text?: string;
  gap?: string;
  title: string;
  width: string;
  height: string;
  viewBox: string;
};

type SkillsArrPropsType = SkillItemPropsType[];

const skillsArr: SkillsArrPropsType = [
  {
    iconId: 'html',
    title: 'HTML',
    width: '120',
    height: '120',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'css',
    title: 'CSS',
    width: '120',
    height: '120',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'js',
    title: 'JavaScript',
    width: '120',
    height: '120',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'ts',
    title: 'TypeScript',
    width: '120',
    height: '120',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'styledComponents',
    title: 'Styled Components',
    width: '120',
    height: '120',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'react',
    title: 'React',
    width: '120',
    height: '120',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'reactNative',
    title: 'React Native',
    width: '120',
    height: '120',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'redux',
    title: 'Redux',
    width: '120',
    height: '120',
    viewBox: '0 0 120 120',
  },
  {
    iconId: 'github',
    title: 'Github',
    width: '120',
    height: '120',
    viewBox: '-10 -10 120 120',
  },
  {
    iconId: 'figma',
    title: 'Figma',
    width: '120',
    height: '120',
    viewBox: '-10 -10 120 120',
  },
  {
    iconId: 'git',
    title: 'Git',
    width: '120',
    height: '120',
    viewBox: '-10 -10 120 120',
  },
  {
    iconId: 'sass',
    title: 'Sass',
    width: '120',
    height: '87',
    viewBox: '0 0 120 87',
  }
];

export const Skills = () => {
  return (
    <StyledSkills id={'skills'}>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper $wrap={'wrap'} $gap={'30px'} $justify={'center'}>
          {skillsArr.length > 0 &&
            skillsArr.map((item, i) => (
              <Skill
                key={i}
                iconId={item.iconId}
                title={item.title}
                width={item.width}
                height={item.height}
                viewBox={item.viewBox}
              />
            ))}
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  padding: 50px 0;
  text-align: center;

  @media ${theme.media.mobile} {
    ${FlexWrapper} {
      gap: 25px
    }
  }
`;
