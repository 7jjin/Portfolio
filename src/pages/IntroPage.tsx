import Intro from '../component/section/Intro';
import styled from 'styled-components';

const IntroPage = () => {
    return (
        <>
            <_Wrapper className="IntroPage">
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
