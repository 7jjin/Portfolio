import styled from 'styled-components';
import Skill from '../component/section/Skill';
import { useRecoilState } from 'recoil';
import { skillPageRefState } from 'recoil/atoms';
import { useEffect, useRef } from 'react';

const SkillPage = () => {
    const [ref, setRef] = useRecoilState(skillPageRefState);
    const skillPage = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (skillPage) {
            setRef(skillPage.current);
        }
    }, [skillPage]);
    return (
        <>
            <_wrapper id="SkillPage" ref={skillPage}>
                <Skill />
            </_wrapper>
        </>
    );
};
const _wrapper = styled.div`
    display: flex;
    height: 100vh;
`;

export default SkillPage;
