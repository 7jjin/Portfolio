import styled from 'styled-components';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { IoMdCheckmark } from 'react-icons/io';
import { VscChromeClose } from 'react-icons/vsc';

interface Props {
    setModalOn: (state: boolean) => void;
    selectedProject: {
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
        video: string[];
    };
}

const ProjectModal: React.FC<Props> = ({ setModalOn, selectedProject }) => {
    const closeModal = () => {
        setModalOn(false);
    };

    return (
        <>
            <_backgroundWrapper className="wrapper" onClick={closeModal}>
                <_background className="background">
                    <_wrapper className="wrapper" onClick={(e) => e.stopPropagation()}>
                        <_content className="content">
                            <_leftBox className="leftBox">
                                <div className="upBox">
                                    <_swiper
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        loop={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        autoplay={{
                                            delay: 4000,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: true,
                                        }}
                                        navigation={true}
                                        modules={[Pagination, Navigation, Autoplay]}
                                        className="mySwiper"
                                    >
                                        {selectedProject.video.map((item) => (
                                            <>
                                                <SwiperSlide key={item}>
                                                    <_swiperVideo src={item} autoPlay loop muted />
                                                </SwiperSlide>
                                            </>
                                        ))}
                                    </_swiper>
                                </div>
                                <div className="downBox">
                                    <_titleBox className="titleBox">
                                        <span>{selectedProject.name}</span>
                                        {selectedProject.isGroup ? (
                                            <span>Team project</span>
                                        ) : (
                                            <span>Solo project</span>
                                        )}
                                    </_titleBox>
                                    <_periodBox className="periodBox">
                                        <span>{selectedProject.period}</span>
                                        <span>({selectedProject.member}명)</span>
                                    </_periodBox>
                                    <_linkBox className="linkBox">
                                        <_deployBox className="deployBox">
                                            <span>배포 링크</span>
                                            <a href={selectedProject.deployLink} target="_blank">
                                                {selectedProject.deployLink}
                                            </a>
                                        </_deployBox>
                                        <_repoBox className="repoBox">
                                            <span>리포지토리</span>
                                            <a href={selectedProject.repoLink} target="_blank">
                                                {selectedProject.repoLink}
                                            </a>
                                        </_repoBox>
                                    </_linkBox>

                                    <_stackBox className="stackBox">
                                        <span>기술스택</span>
                                        <div>
                                            {selectedProject.stack.map((item, index) => (
                                                <span key={index}>
                                                    {item}
                                                    {index !== selectedProject.stack.length - 1 && ', '}
                                                </span>
                                            ))}
                                        </div>
                                    </_stackBox>
                                </div>
                            </_leftBox>
                            <_rightBox className="rightBox">
                                <_introBox className="introBox">
                                    <span>프로젝트 소개</span>
                                    {selectedProject.mainContent.map((item) => (
                                        <p>{item}</p>
                                    ))}
                                </_introBox>
                                <_functionBox className="functionBox">
                                    <span>구현 기능</span>
                                    <div className="functionListBox">
                                        {selectedProject.functionList.map((item) => (
                                            <_functionList className="functionList">
                                                <div>
                                                    <IoMdCheckmark />
                                                </div>
                                                <p>{item}</p>
                                            </_functionList>
                                        ))}
                                    </div>
                                </_functionBox>
                            </_rightBox>
                        </_content>
                        <_cancelBtn className="cancelBtn">
                            <VscChromeClose className="button" onClick={() => setModalOn(false)} />
                        </_cancelBtn>
                    </_wrapper>
                </_background>
            </_backgroundWrapper>
        </>
    );
};
const _backgroundWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: #0000005e;
    animation: fadeIn 0.5s forwards;
    left: 0;
    top: 0;
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
const _background = styled.div`
    height: 100%;
    width: 100%;
    margin-left: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
`;

const _wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
    height: 85%;
    width: 75%;
    overflow: auto;
    background: white;
    animation: fadeIn 0.5s forwards;
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    // 스크롤 커스텀
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        /* border-radius: 10px; */
        background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
        width: 12px;
        background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #555;
    }
`;

const _content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 3rem 5rem;
`;

// 왼쪽 부분 스타일링
const _leftBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > :nth-child(1) {
        width: 75%;
    }
    & > :nth-child(2) {
        width: 100%;
        height: 55%;
        padding: 40px 4rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;
const _swiper = styled(Swiper)`
    width: 100%;
    height: 100%;
    .swiper-slide {
        padding: 20px 3rem;
    }
    .swiper-button-prev {
        left: 0px;
        color: rgba(0, 0, 0, 0.784);
    }
    .swiper-button-next {
        right: 0px;
        color: rgba(0, 0, 0, 0.784);
    }
    .swiper-pagination {
        bottom: 0px;
        color: rgba(0, 0, 0, 0.784);
        & > span {
            background-color: rgba(0, 0, 0, 0.784);
        }
    }
`;
const _swiperVideo = styled.video`
    box-shadow: rgb(85, 85, 85) 0px 0px 5px 2px;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const _titleBox = styled.div`
    & > :nth-child(1) {
        color: #000000c8;
        font-size: 36px;
        font-weight: 700;
    }
    & > :nth-child(2) {
        color: #565656;
        font-size: 18px;
        padding-left: 16px;
    }
`;
const _periodBox = styled.div`
    padding-top: 15px;
    color: #565656;
    & > :nth-child(2) {
        padding-left: 5px;
    }
`;

const _linkBox = styled.div`
    padding-top: 17px;
    display: flex;
`;
const _deployBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 30px;
    & > :nth-child(1) {
        padding: 5px 7px;
        border-radius: 10px;
        background-color: rgb(204 204 204 / 47%);
    }
    & > :nth-child(2) {
        text-align: left;
        padding-top: 5px;
        color: #676767;
        font-size: 16px;
    }
`;
const _repoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > :nth-child(1) {
        padding: 5px 7px;
        border-radius: 10px;
        background-color: rgb(204 204 204 / 47%);
    }
    & > :nth-child(2) {
        text-align: left;

        padding-top: 5px;
        color: #676767;
        font-size: 16px;
    }
`;
const _stackBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 15px;
    & > :nth-child(1) {
        padding: 5px 7px;
        border-radius: 10px;
        background-color: rgb(204 204 204 / 47%);
    }
    & > div {
        padding-top: 5px;
        text-align: left;
    }
    & > div span {
        color: #676767;
        font-size: 16px;
    }
`;

// 오른쪽 부분 스타일링
const _rightBox = styled.div`
    height: 100%;
    padding: 0px 4rem;
`;
const _introBox = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    word-break: keep-all;
    & > span {
        font-size: 24px;
        font-weight: 600;
        background-image: linear-gradient(269deg, rgb(0 0 0 / 5%), #00e96185);
        background-size: 100% 50%;
        background-repeat: no-repeat;
        background-position: bottom;
    }
    & p {
        letter-spacing: -0.5px;
        font-size: 16px;
        padding-top: 10px;
        text-align: left;
        line-height: 1.45;
    }
`;
const _functionBox = styled.div`
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > span {
        font-size: 24px;
        font-weight: 600;
        background-image: linear-gradient(269deg, rgb(0 0 0 / 5%), #00e96185);
        background-size: 100% 50%;
        background-repeat: no-repeat;
        background-position: bottom;
        margin-bottom: 10px;
    }
    & p {
        letter-spacing: -0.5px;
        font-size: 16px;
        padding-top: 10px;
        text-align: left;
        line-height: 1.3;
    }
`;
const _functionList = styled.div`
    display: flex;
    word-break: keep-all;
    & > div {
        font-weight: 700;
        color: red;
        font-size: 24px;
        padding-top: 10px;
        margin-right: 10px;
    }
`;

// cancel Button
const _cancelBtn = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    opacity: 0.5;
    &:hover {
        opacity: 1;
    }
    & > .button {
        font-size: 16px;
    }
`;

export default ProjectModal;
