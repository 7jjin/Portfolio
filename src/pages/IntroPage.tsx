import { useEffect, useRef } from 'react';
import Intro from '../component/section/Intro';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { introPageRefState } from 'recoil/atoms';

const IntroPage = () => {
    const [ref, setRef] = useRecoilState(introPageRefState);
    const introPage = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (introPage) {
            setRef(introPage.current);
        }
    }, [introPage]);
    return (
        <>
            <_Wrapper id="IntroPage" ref={introPage}>
                <Intro />
            </_Wrapper>
        </>
    );
};
const _Wrapper = styled.div`
    display: flex;
    height: 100vh;
`;
export default IntroPage;
