import React from 'react';

import GlobalStyle from './style/GlobalStyles';

import IntroPage from './pages/IntroPage';
function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <IntroPage />
        </div>
    );
}

export default App;
