import styled from 'styled-components';
import ProjectBox from '../atoms/ProjectBox';
import { PROJECT } from '../../constant/project';
import { useState } from 'react';
import ModalPortal from 'helpers/portal';
import ProjectModal from 'component/atoms/Modal/ProjectModal';

interface styledProps {
    position: string;
}
interface Props {
    position: string;
    img: string;
    name: string;
    isGroup: boolean;
    content: string;
    stack: string[];
}
interface ModalProps {
    setOnModal: (state: boolean) => void;
}

const Project = () => {
    const [selectedProject, setSelectedProject] = useState<Props | null>(null);
    const [modalOn, setModalOn] = useState(false);

    // Project Modal에 props 전달 Handler
    const handleProjectClick = (project: Props) => {
        console.log(project);
        setSelectedProject(project);
        setModalOn(!modalOn);
    };
    return (
        <>
            <_skillBox className="skillBox">
                <_hr />
                <_dot position="20%">
                    <ProjectBox
                        position={PROJECT.SYOS.position}
                        img={PROJECT.SYOS.img}
                        name={PROJECT.SYOS.name}
                        isGroup={PROJECT.SYOS.isGroup}
                        content={PROJECT.SYOS.content}
                        stack={PROJECT.SYOS.stack}
                        onClick={() => handleProjectClick(PROJECT.SYOS)}
                    />
                </_dot>
                <_dot position="38%">
                    <ProjectBox
                        position={PROJECT.JinCha.position}
                        img={PROJECT.JinCha.img}
                        name={PROJECT.JinCha.name}
                        isGroup={PROJECT.JinCha.isGroup}
                        content={PROJECT.JinCha.content}
                        stack={PROJECT.JinCha.stack}
                        onClick={() => handleProjectClick(PROJECT.JinCha)}
                    />
                </_dot>
                <_dot position="57%">
                    <ProjectBox
                        position={PROJECT.DoongG.position}
                        img={PROJECT.DoongG.img}
                        name={PROJECT.DoongG.name}
                        isGroup={PROJECT.DoongG.isGroup}
                        content={PROJECT.DoongG.content}
                        stack={PROJECT.DoongG.stack}
                        onClick={() => handleProjectClick(PROJECT.DoongG)}
                    />
                </_dot>
                <_dot position="76%">
                    <ProjectBox
                        position={PROJECT.Portfoilo.position}
                        img={PROJECT.Portfoilo.img}
                        name={PROJECT.Portfoilo.name}
                        isGroup={PROJECT.Portfoilo.isGroup}
                        content={PROJECT.Portfoilo.content}
                        stack={PROJECT.Portfoilo.stack}
                        onClick={() => handleProjectClick(PROJECT.Portfoilo)}
                    />
                </_dot>
                <ModalPortal>{modalOn && <ProjectModal setOnModal={setModalOn}>테스트 모달</ProjectModal>}</ModalPortal>
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

export default Project;
