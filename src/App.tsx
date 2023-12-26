import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './style/GlobalStyles';

import IntroPage from './pages/IntroPage';
import SkillPage from './pages/SkillPage';
import Menu from './component/section/Menu';
function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Menu />
            <_wrapper>
                <IntroPage />
                <SkillPage />
            </_wrapper>
        </div>
    );
}
const _wrapper = styled.div`
    overflow-x: auto;
    white-space: nowrap;
`;

export default App;
