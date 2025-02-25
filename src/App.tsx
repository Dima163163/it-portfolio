import styled from 'styled-components';
import './App.css'
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Main } from './layout/sections/main/Main';
import { Portfolio } from './layout/sections/portfolio/Portfolio';

function App() {
    return (
        <div className="App">
            <Header/>
            <StyledMain>
              <Main/>
              <About/>
              <Portfolio/>
            </StyledMain>
            <Footer/>
        </div>
    )
}

export default App;

const StyledMain = styled.main`
  
`