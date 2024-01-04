import styled from 'styled-components';
import Skill from '../component/section/Skill';

const SkillPage = () => {
    return (
        <>
            <_wrapper className="SkillPage">
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
