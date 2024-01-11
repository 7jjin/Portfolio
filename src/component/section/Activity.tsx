import styled from 'styled-components';

const Activity = () => {
    return (
        <>
            <_activityBox id="activityBox"></_activityBox>
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
    padding-bottom: 70px;
`;

export default Activity;