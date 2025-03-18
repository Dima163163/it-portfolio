import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { theme } from '../../styles/Theme';
import { useContext, useEffect, useState } from 'react';
import { MenuContext } from '../../App';

export const GoToBtn = () => {
  const [showBtn, setShowBtn] = useState(false);
  const {changeItemMenu} = useContext(MenuContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowBtn(true)
      } else {
        setShowBtn(false)
      }
    })
  }, [])

  const goToTop = () => {
    window.scrollTo(0, 0);
    changeItemMenu('Home')
  };

  return (
    <>
    {showBtn && <StyledGoToBtn onClick={goToTop}>
      <Icon viewBox='5 4 14 14' iconId='arrowTop' width='36' height='28' />
    </StyledGoToBtn>}
    </>
  );
};

const StyledGoToBtn = styled.button`
  border-radius: 8px;
  background-color: ${theme.colors.firstBgBtn};
  border: 2px solid transparent;
  min-width: 60px;
  height: 60px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${theme.colors.fontColorThird};
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 3;
  padding: 15px;
  &:hover {
    box-shadow: 0 2px 13px 0 rgba(226, 158, 0, 0.48);
  }
`;
