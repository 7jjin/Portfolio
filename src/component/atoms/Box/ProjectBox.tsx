import styled, { keyframes } from 'styled-components';

interface Props {
    position: string;
    img: string;
    name: string;
    isGroup: boolean;
    subContent: string;
    stack: string[];
    onClick: () => void;
    onMouseEnter: () => void;
}

const ProjectBox: React.FC<Props> = ({ position, img, name, isGroup, subContent, stack, onClick, onMouseEnter }) => {
    return (
        <>
            <_projectBox className="projcetBox" position={position} onClick={onClick} onMouseEnter={onMouseEnter}>
                <div className="imgBox">
                    <_img src={img} alt="" />
                </div>
                <_infoBox className="infoBox">
                    <_nameBox className="nameBox">
                        <span>{name}</span>
                        <_typeBox className="typeBox">
                            {isGroup ? <span>Team Project</span> : <span>Solo Projcet</span>}
                        </_typeBox>
                    </_nameBox>

                    <_contentBox className="contentBox">
                        <span>{subContent}</span>
                    </_contentBox>
                    <_stackBox className="stackBox">
                        <div className="stack">Stack</div>
                        <div className="stackList">
                            {stack.map((item, index) => (
                                <div key={index}>
                                    {item}
                                    {index !== stack.length - 1 && ', '}
                                </div>
                            ))}
                        </div>
                    </_stackBox>
                </_infoBox>
            </_projectBox>
        </>
    );
};
const _projectBox = styled.div<{ position: string }>`
    display: flex;
    flex-direction: column;
    position: absolute;
    transform: ${(props) => (props.position === 'up' ? 'translate3d(-50%, -110%, 0)' : 'translate3d(-50%, 10%, 0)')};
    box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.08);
    top: 50%;
    left: 50%;
    width: 300px;
    height: 320px;
    background-color: white;
    border-radius: 5px;

    &:hover {
        animation: ${(props) => (props.position === 'up' ? popUpTop : popDownTop)} 0.5s
            cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
`;

const _img = styled.img`
    width: 100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 40%;
    border-bottom-right-radius: 40%;
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
        font-size: 12px;
    }
`;
const _contentBox = styled.div`
    line-height: 1.3;
    margin-top: 11px;
`;
const _stackBox = styled.div`
    margin-top: 11px;
    & > .stack {
        font-size: 12px;
        padding: 2px 6px;
        display: inline;
        border-radius: 8px;
        background-color: #00000021;
    }
    & > .stackList {
        display: flex;
    }
    & > .stackList > div {
        font-size: 14px;
        margin-top: 5px;
    }
`;

// position 값이 up일 경우 애니메이션
const popUpTop = keyframes`
    0% {
        transform: translate3d(-50%, -110%, 0);
        box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.08);
    }
    100% {
        transform: translate3d(-50%, -112%, 0);
        box-shadow: 0px 20px 20px rgb(0 0 0 / 22%);
    }
`;

// position 값이 down일 경우 애니메이션
const popDownTop = keyframes`
    0% {
        transform: translate3d(-50%, 10%, 0);
        box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.08);
    }
    100% {
        transform: translate3d(-50%, 8%, 0);
        box-shadow: 0px 20px 20px rgb(0 0 0 / 22%);
    }
`;
export default ProjectBox;
