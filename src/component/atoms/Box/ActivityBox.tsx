import styled from 'styled-components';
import { IoMdCheckmark } from 'react-icons/io';
import { ActivityTypes } from 'constant/activity';

const ActivityBox: React.FC<ActivityTypes & { position: 'left' | 'right'; width: string }> = (props) => {
    const { position, width } = props;
    return (
        <>
            <_box className="Box" width={width}>
                <div className="bootcampBox">
                    <div className="innerBox">
                        <_titleBox className="titleBox" position={position}>
                            <p>{props.title}</p>
                            <p>({props.period})</p>
                        </_titleBox>
                        <_contentBox className="contentBox">
                            <ul>
                                {props.content.map((item) => (
                                    <>
                                        <_li>
                                            <div>
                                                <IoMdCheckmark />
                                            </div>
                                            <span>{item}</span>
                                        </_li>
                                    </>
                                ))}
                            </ul>
                        </_contentBox>
                    </div>
                </div>
                <_subjectBox className="subjectBox" position={position}>
                    <span>{props.subject}</span>
                </_subjectBox>
            </_box>
        </>
    );
};

const _box = styled.div<{ width: string }>`
    position: relative;
    padding: 2rem;
    margin: 2rem;
    width: ${(props) => props.width};
    border-radius: 15px;
    background-color: #d9d9d9;
`;

const _titleBox = styled.div<{ position: string }>`
    margin-top: 35px;
    ${({ position }) => (position === 'left' ? 'text-align: left;' : 'text-align: right;')}
    & > :nth-child(1) {
        font-size: 1.6rem;
        font-weight: 600;
    }
    & > :nth-child(2) {
        font-size: 1.2rem;
        margin-top: 6px;
    }
`;
const _contentBox = styled.div`
    margin-top: 40px;
`;

const _li = styled.li`
    display: flex;
    margin-top: 16px;
    & > * {
        font-size: 1.3rem;
    }
    & > div {
        color: #4299e1;
        margin-right: 10px;
    }
`;

const _subjectBox = styled.div<{ position: string }>`
    background-color: #ffffffb8;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    ${({ position }) => (position === 'left' ? 'left: 2rem;' : 'right: 2rem;')}
    top: 0;
    transform: translateY(-50%);
    box-shadow: 3px 3px 4px 0px #0000004f;
    & > span {
        font-family: 'title2', sans-serif;
        font-size: 2.3rem;
        font-weight: 700;
    }
`;
export default ActivityBox;
