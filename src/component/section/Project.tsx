import styled from 'styled-components';
import ProjectBox from '../atoms/ProjectBox';
import { PROJECT } from '../../constant/project';
import { useEffect, useState } from 'react';
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
    period: string;
    member: number;
    deployLink: string;
    repoLink: string;
    subContent: string;
    mainContent: string[];
    functionList: string[];
    stack: string[];
}

const Project = () => {
    const [selectedProject, setSelectedProject] = useState<Props | null>(null);
    const [modalOn, setModalOn] = useState(false);
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const [progressGauge, setProgressGauge] = useState(25);

    // Project Modal에 props 전달 Handler
    const handleProjectClick = (project: Props) => {
        setSelectedProject(project);
        setModalOn(!modalOn);
    };
    useEffect(() => {
        console.log(hoveredProject);
    }, [hoveredProject]);

    // ProjectBox에 호버 시 부모요소의 %를 찾는 함수
    const handleMouseEnter = (progress: number) => {
        setProgressGauge(progress);
    };

    return (
        <>
            <_projectBox id="projectBox">
                <_wrapper>
                    <_progress max="100" value={progressGauge}></_progress>
                    <_dot position="25%" className="dot">
                        <ProjectBox
                            position={PROJECT.SYOS.position}
                            img={PROJECT.SYOS.img}
                            name={PROJECT.SYOS.name}
                            isGroup={PROJECT.SYOS.isGroup}
                            subContent={PROJECT.SYOS.subContent}
                            stack={PROJECT.SYOS.stack}
                            onClick={() => handleProjectClick(PROJECT.SYOS)}
                            onMouseEnter={() => handleMouseEnter(PROJECT.SYOS.progress)}
                        />
                    </_dot>
                    <_dot position="50%" className="dot">
                        <ProjectBox
                            position={PROJECT.JinCha.position}
                            img={PROJECT.JinCha.img}
                            name={PROJECT.JinCha.name}
                            isGroup={PROJECT.JinCha.isGroup}
                            subContent={PROJECT.JinCha.subContent}
                            stack={PROJECT.JinCha.stack}
                            onClick={() => handleProjectClick(PROJECT.JinCha)}
                            onMouseEnter={() => handleMouseEnter(PROJECT.JinCha.progress)}
                        />
                    </_dot>
                    <_dot position="75%" className="dot">
                        <ProjectBox
                            position={PROJECT.DoongG.position}
                            img={PROJECT.DoongG.img}
                            name={PROJECT.DoongG.name}
                            isGroup={PROJECT.DoongG.isGroup}
                            subContent={PROJECT.DoongG.subContent}
                            stack={PROJECT.DoongG.stack}
                            onClick={() => handleProjectClick(PROJECT.DoongG)}
                            onMouseEnter={() => handleMouseEnter(PROJECT.DoongG.progress)}
                        />
                    </_dot>
                    <_dot position="100%" className="dot">
                        <ProjectBox
                            position={PROJECT.Portfoilo.position}
                            img={PROJECT.Portfoilo.img}
                            name={PROJECT.Portfoilo.name}
                            isGroup={PROJECT.Portfoilo.isGroup}
                            subContent={PROJECT.Portfoilo.subContent}
                            stack={PROJECT.Portfoilo.stack}
                            onClick={() => handleProjectClick(PROJECT.Portfoilo)}
                            onMouseEnter={() => handleMouseEnter(PROJECT.Portfoilo.progress)}
                        />
                    </_dot>
                </_wrapper>

                <ModalPortal>
                    {modalOn && selectedProject && (
                        <ProjectModal setModalOn={setModalOn} selectedProject={selectedProject}></ProjectModal>
                    )}
                </ModalPortal>
            </_projectBox>
        </>
    );
};

const _wrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;

const _projectBox = styled.section`
    position: relative;
    left: 10%;
    padding-right: 18%;
    width: 90%;
    background-color: #fffede;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background: linear-gradient(0deg, #ffffff 0%, #dfffd8 60%, #b5f1cc 100%);
`;

const _progress = styled.progress`
    position: absolute;
    height: 5px; /* hr 태그의 높이 조절 */
    background-color: #00000014;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    &::-webkit-progress-bar {
        background-color: #00000021;
    }

    &::-webkit-progress-value {
        transition: width 0.5s;
        background: #48bb78;
    }
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -12px;
        transform: translate(-50%, -50%);
        width: 0px;
        height: 0px;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 15px solid black;
    }
`;
const _dot = styled.div<styledProps>`
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /* transform: translateY(-50%); */
    ${({ position }) => (position ? `left: ${position};` : '')}
    &:last-child {
        background-color: initial;
    }
`;

export default Project;
