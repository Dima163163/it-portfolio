import styled from 'styled-components';
import { FlexWrapper } from '../../../components/flexWrapper/FlexWrapper';
import { Skill } from './skill/Skill';
type SkillItemPropsType = {
  iconId?: string
  text?: string
  gap?: string
  title:string
  width: string
  height: string
  viewBox: string
}

type SkillsArrPropsType = SkillItemPropsType[]

const skillsArr:SkillsArrPropsType = [
  {
    iconId: 'productDesign',
    title:'Product Design',
    width: '107',
    height:'108',
    viewBox:'0 0 107 108',
    gap: '33px'
  },
  {
    text: 'UX/UI',
    title:'UX/UI Design',
    width: '75',
    height:'75',
    viewBox:'0 0 75 75',
    gap: '60px'
  },
  {
    iconId: 'iconDesign',
    title:'Icon Design',
    width: '75',
    height:'75',
    viewBox:'0 0 75 75',
    gap: '49px'
  },
  {
    iconId: 'logoDesign',
    title:'Logo Design',
    width: '75',
    height:'75',
    viewBox:'0 0 75 75',
    gap: '49px'
  },
  {
    iconId: 'backend',
    title:'Backend',
    width: '75',
    height:'75',
    viewBox:'0 0 75 75',
    gap: '66px'
  },
  {
    iconId: 'frontend',
    title:'Frontend',
    width: '75',
    height:'75',
    viewBox:'0 0 75 75',
    gap: '66px'
  },
  {
    iconId: 'motion',
    title:'Motion',
    width: '75',
    height:'75',
    viewBox:'0 0 75 75',
    gap: '66px'
  },
]

export const Skills = () => {
  return (
    <StyledSkills>
      <FlexWrapper $wrap={'wrap'} $justify={'space-between'}>
        {
          skillsArr.length > 0 && skillsArr.map((item, i) => {
            if (item.iconId) {
              return <Skill key={i} iconId={item.iconId} title={item.title} width={item.width} height={item.height} viewBox={item.viewBox} gap={item.gap} />
            }
            return <Skill key={i} text={item.text} title={item.title} width={item.width} height={item.height} viewBox={item.viewBox} gap={item.gap} />
          }
          )
        }
      </FlexWrapper>
    </StyledSkills>
  )
};

const StyledSkills = styled.section`
`;