import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import MainBody from './pages/MainBody';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
      <StyledApp>
        <GlobalStyle/>
        <Navbar/>
          <Route path="/" exact>
            <MainBody/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
      </StyledApp>
  );
}

//styled components
const StyledApp=styled.div`
  min-height: 90vh;
  min-width: 90vw;
  color: white;
`

export default App;
