import styled from 'styled-components';
import Project from '../component/section/Project';

const ProjectPage = () => {
    return (
        <>
            <_wrapper className="ProjectPage">
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
