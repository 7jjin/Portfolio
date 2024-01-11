import styled from 'styled-components';
import Project from '../component/section/Project';
import { useRecoilState } from 'recoil';
import { projectPageRefState } from 'recoil/atoms';
import { useEffect, useRef } from 'react';

const ProjectPage = () => {
    const [ref, setRef] = useRecoilState(projectPageRefState);
    const projectPage = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (projectPage) {
            setRef(projectPage.current);
        }
    }, [projectPage]);
    return (
        <>
            <_wrapper id="ProjectPage" ref={projectPage}>
                <Project />
            </_wrapper>
        </>
    );
};
const _wrapper = styled.div`
    display: flex;
    height: 100vh;
`;

export default ProjectPage;
