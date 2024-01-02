import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import GlobalStyle from './style/GlobalStyles';

import IntroPage from './pages/IntroPage';
import SkillPage from './pages/SkillPage';
import Menu from './component/section/Menu';
function App() {
    const wrapperDivRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const wheelHandler = (e: WheelEvent) => {
            e.preventDefault();
            // 스크롤 구현
            const { deltaY } = e;
            const { scrollTop } = wrapperDivRef.current!;
            const pageHeight = window.innerHeight;

            if (deltaY > 0) {
                // 스크롤 내릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    // 현재 1페이지
                    console.log('현재 1페이지, down');
                    wrapperDivRef.current!.scrollTo({
                        top: pageHeight,
                        left: 0,
                        behavior: 'smooth',
                    });
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    // 현재 2페이지
                    console.log('현재 2페이지,down');
                    wrapperDivRef.current!.scrollTo({
                        top: pageHeight * 2,
                        left: 0,
                        behavior: 'smooth',
                    });
                }
            } else {
                // 스크롤 올릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    // 현재 1페이지
                    console.log('현재 1페이지,up');
                    wrapperDivRef.current!.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight) {
                    console.log('현재 2페이지,up');
                    wrapperDivRef.current!.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                }
            }
        };

        const wrapperDivRefCurrent = wrapperDivRef.current;
        if (wrapperDivRefCurrent) {
            wrapperDivRefCurrent.addEventListener('wheel', wheelHandler);
            return () => {
                wrapperDivRefCurrent.removeEventListener('wheel', wheelHandler);
            };
        }
    }, []);
    return (
        <div className="App">
            <GlobalStyle />
            <Menu />
            <_wrapper className="wrapper" ref={wrapperDivRef}>
                <IntroPage />
                <SkillPage />
            </_wrapper>
        </div>
    );
}
const _wrapper = styled.div`
    height: 100vh;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export default App;
