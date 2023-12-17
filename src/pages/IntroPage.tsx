import Intro from '../component/section/Intro';
import Menu from '../component/section/Menu';
import styled from 'styled-components';

const IntroPage = () => {
    return (
        <>
            <_Wrapper>
                <Menu />
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
