import ActivityBox from 'component/atoms/Box/ActivityBox';
import { BLOG, BOOTCAMP, STUDY } from 'constant/activity';
import styled from 'styled-components';

const Activity = () => {
    return (
        <>
            <_activityBox id="activityBox">
                <_wrapper className="wrapper">
                    <div className="upBox">
                        <ActivityBox {...BOOTCAMP} position="left" width="50%" />
                        <ActivityBox {...BLOG} position="right" width="50%" />
                    </div>
                    <div className="downBox">
                        <ActivityBox {...STUDY} position="left" width="100%" />
                    </div>
                </_wrapper>
            </_activityBox>
        </>
    );
};

const _activityBox = styled.section`
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
    padding: 3rem 7rem;
`;
const _wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    & > :nth-child(1) {
        width: 100%;
        display: flex;
    }
    & > :nth-child(2) {
        width: 100%;
        display: flex;
    }
`;

export default Activity;
