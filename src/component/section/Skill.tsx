import styled from 'styled-components';
import FrontendInput from '../atoms/input/FrontendInput';
import BackendInput from '../atoms/input/BackendInput';
import EtcInput from '../atoms/input/EtcInput';

const Skill = () => {
    return (
        <>
            <_skillBox>
                <_skillBoxWrapper className="skillBoxWrapper">
                    <div className="frontBox">
                        <FrontendInput />
                    </div>
                    <div className="backendBox">
                        <BackendInput />
                    </div>
                    <div className="etcBox">
                        <EtcInput />
                    </div>
                </_skillBoxWrapper>
            </_skillBox>
        </>
    );
};

const _skillBox = styled.section`
    position: relative;
    left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    background-color: #fffede;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const _skillBoxWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`;

export default Skill;
