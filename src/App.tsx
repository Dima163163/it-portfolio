import styled from 'styled-components';
import './App.css';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Main } from './layout/sections/main/Main';
import { Portfolio } from './layout/sections/portfolio/Portfolio';
import { Contacts } from './layout/contacts/Contacts';
import { Skills } from './layout/sections/skills/Skills';

function App() {
  return (
    <div className='App'>
      <Header />
      <StyledMain>
        <Main />
        <Skills/>
        <About />
        <Portfolio />
        <Contacts />
      </StyledMain>
      <Footer />
    </div>
  );
}

export default App;

const StyledMain = styled.main`
  background: linear-gradient(135deg, #414141 0%, #2d2d2d 100%);
`;
