import styled from 'styled-components';
import './App.css';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Main } from './layout/sections/main/Main';
import { Portfolio } from './layout/sections/portfolio/Portfolio';
import { Skills } from './layout/sections/skills/Skills';
import { Particle } from './components/particle/Particle';
import { createContext, useState } from 'react';
import { GoToBtn } from './components/goToBtn/GoToBtn';
import { Contacts } from './layout/sections/contacts/Contacts';

type MenuContextPropsType = {
  activeItem: string,
  changeItemMenu: (value: string) => void
}
export const MenuContext = createContext<MenuContextPropsType>({
  activeItem: '',
  changeItemMenu: () => {}
})

function App() {
  const [activeItem, setActiveItem] = useState('Home');

  const changeItemMenu = (value: string) => {
    setActiveItem(value)
  };

  return (
    <MenuContext.Provider value={{activeItem, changeItemMenu}}>
      <div className='App'>
          <Particle/>
          <Header />
          <StyledMain>
            <Main />
            <Skills />
            <About />
            <Portfolio />
            <Contacts />
          </StyledMain>
          <Footer />
          <GoToBtn/>
      </div>
    </MenuContext.Provider>
  );
}

export default App;

const StyledMain = styled.main``;
