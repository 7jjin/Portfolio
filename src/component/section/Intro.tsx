import styled from 'styled-components';
const Intro = () => {
    return (
        <>
            <_introBox>
                <_mainIntro className="mainIntro">
                    호기심 많은 프론트엔드 개발자
                    <br />
                    <span>조진형</span>입니다.
                </_mainIntro>
            </_introBox>
        </>
    );
};

const _introBox = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    background-color: #fffede;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const _mainIntro = styled.p`
    font-size: 50px;
    text-align: center;
    line-height: 1.25;
    & > span {
        font-size: 85px;
        background-size: 100% 100%;
        background-image: linear-gradient(transparent 70%, rgb(248, 205, 7) 30%);
    }
`;
export default Intro;
