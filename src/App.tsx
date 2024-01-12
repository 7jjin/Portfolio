import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import GlobalStyle from './style/GlobalStyles';
import GlobalFonts from './style/font';
import IntroPage from './pages/IntroPage';
import SkillPage from './pages/SkillPage';
import Menu from './component/section/Menu';
import { useRecoilState } from 'recoil';
import { activeNavBtnState } from './recoil/atoms';
import ProjectPage from './pages/ProjectPage';
import ActivityPage from 'pages/ActivityPage';
function App() {
    const wrapperDivRef = useRef<HTMLDivElement>(null);
    const [activeNavBtn, setActiveNavBtn] = useRecoilState(activeNavBtnState);
    const DIVIDER_HEIGHT = 1;
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
                    wrapperDivRef.current!.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setActiveNavBtn('SKILL');
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    // 현재 2페이지
                    wrapperDivRef.current!.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setActiveNavBtn('PROJECT');
                } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
                    // 현재 3페이지
                    wrapperDivRef.current!.scrollTo({
                        top: pageHeight * 3 + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setActiveNavBtn('ACTIVITY');
                } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
                    // 현재 3페이지
                    wrapperDivRef.current!.scrollTo({
                        top: pageHeight * 4 + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setActiveNavBtn('ACTIVITY');
                }
            } else {
                // 스크롤 올릴 때

                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    // 현재 1페이지
                    wrapperDivRef.current!.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setActiveNavBtn('About');
                } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    wrapperDivRef.current!.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setActiveNavBtn('About');
                } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
                    wrapperDivRef.current!.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setActiveNavBtn('SKILL');
                } else if (scrollTop >= pageHeight * 3 && scrollTop < pageHeight * 4) {
                    wrapperDivRef.current!.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: 'smooth',
                    });
                    setActiveNavBtn('PROJECT');
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
            <GlobalFonts />
            <Menu />
            <_wrapper className="wrapper" ref={wrapperDivRef}>
                <IntroPage />
                <SkillPage />
                <ProjectPage />
                <ActivityPage />
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
