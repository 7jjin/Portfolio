import styled from 'styled-components';
import portfoiloMain from '../../../src/assets/portfoilo-main.png';

interface styledProps {
    position: string;
}
const Project = () => {
    return (
        <>
            <_skillBox>
                <_hr />
                <_dot position="20%">
                    <_projectBox className="projcetBox">
                        <div className="imgBox">
                            <_img src={portfoiloMain} alt="" />
                        </div>
                        <_infoBox className="infoBox">
                            <_nameBox className="nameBox">
                                <span>DoongG</span>
                                <_typeBox className="typeBox">
                                    <span>Team Project</span>
                                </_typeBox>
                            </_nameBox>

                            <_contentBox className="contentBox">
                                <span>
                                    자취생들을 위한 종합 플랫폼 프로젝트입니다. 카카오API를 활용하여 지도와 주소등
                                    다양한 기능을 경험해봤습니다.
                                </span>
                            </_contentBox>
                            <_stackBox className="stackBox">
                                <div className="stack">stack</div>
                                <div className="stackList">React, TypeScript, Styled-component, Zustand</div>
                            </_stackBox>
                        </_infoBox>
                    </_projectBox>
                </_dot>
                <_dot position="38%"></_dot>
                <_dot position="57%"></_dot>
                <_dot position="76%"></_dot>
            </_skillBox>
        </>
    );
};

const _skillBox = styled.section`
    position: relative;
    left: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    background-color: #fffede;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background: linear-gradient(0deg, #ffffff 0%, #dfffd8 60%, #b5f1cc 100%);
`;

const _hr = styled.hr`
    height: 3px; /* hr 태그의 높이 조절 */
    background-color: black;
    width: 90%;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 4%;
        transform: translateY(-50%);
        width: 0px;
        height: 0px;
        border-top: 10px solid transparent; /* 상단 삼각형 높이 조절 */
        border-bottom: 10px solid transparent; /* 하단 삼각형 높이 조절 */
        border-left: 15px solid black; /* 오른쪽 삼각형 크기 조절 */
    }
`;
const _dot = styled.div<styledProps>`
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    ${({ position }) => (position ? `left: ${position};` : '')}
`;

const _projectBox = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, 10%, 0);
    width: 300px;
    height: 320px;
    background-color: white;
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
`;

const _img = styled.img`
    width: 100%;
`;

const _infoBox = styled.div`
    padding: 5px 7px;
`;

const _nameBox = styled.div`
    display: flex;
    align-items: flex-end;
    & > span {
        font-size: 20px;
        font-weight: 700;
    }
`;
const _typeBox = styled.div`
    padding-left: 8px;
    & > span {
        font-size: 14px;
    }
`;
const _contentBox = styled.div`
    line-height: 1.3;
    margin-top: 11px;
`;
const _stackBox = styled.div`
    margin-top: 15px;
    & > .stack {
        font-size: 0%.95rem;
        padding: 2px 6px;
        display: inline;
        border-radius: 8px;
        background-color: #00000021;
    }
    & > .stackList {
        font-size: 12px;
        margin-top: 5px;
    }
`;
export default Project;
