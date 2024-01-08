import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import doongg from 'assets/doongg.png';
import gif1 from 'assets/darkmode.gif';
import { IoMdCheckmark } from 'react-icons/io';

interface Props {
    setModalOn: (state: boolean) => void;
    selectedProject: {
        position: string;
        img: string;
        name: string;
        isGroup: boolean;
        content: string;
        stack: string[];
    };
}

const ProjectModal: React.FC<Props> = ({ setModalOn, selectedProject }) => {
    console.log(selectedProject.name);

    const temp = [
        'Teachable Machine을 활용한 머신러닝을 통해 사용자에게 알맞은 책상 분위기를 추천해주는 기능 구현',
        '이미지 안에 상품 클릭 시 상품 정보를 입력할 수 있는 란을 생성하고 이 좌표를  이미지 크기에 맞게 %로 변환하여 상품 정보와 좌표를 DB에 저장하는 기능 구현',
        'event.stopPropagation() 메소드를 활용하여 상품 정보란 생성 후 이벤트 버블링 되는 현상을 막는 기능 구현',
        '제품 정보들을 삭제할 때마다 바뀐 배열의 길이만큼 반복문을 활용해 id값들을 재할당 해주는 기능 구현',
    ];

    return (
        <>
            <_background className="background">
                <_wrapper className="wrapper">
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
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <_swiperImg src={gif1} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <_swiperImg src={gif1} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <_swiperImg src={gif1} alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <_swiperImg src={gif1} alt="" />
                                    </SwiperSlide>
                                </_swiper>
                            </div>
                            <div className="downBox">
                                <_titleBox className="titleBox">
                                    <span>{selectedProject.name}</span>
                                    {selectedProject.isGroup ? <span>Team project</span> : <span>Solo project</span>}
                                </_titleBox>
                                <_periodBox className="periodBox">
                                    <span>2023.04.05 ~ 2023.05.06</span>
                                    <span>(4명)</span>
                                </_periodBox>

                                <_deployBox className="deployBox">
                                    <span>배포 링크</span>
                                    <a href="https://githob.com/7jjin/SYOS">https://githob.com/7jjin/SYOS</a>
                                </_deployBox>
                                <_repoBox className="repoBox">
                                    <span>리포지토리</span>
                                    <a href="https://github.com/7jjin/SYOS">https://githob.com/7jjin/SYOS</a>
                                </_repoBox>
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
                                <p>
                                    부트캠프의 단편적인 요구사항만 해결하는 과제를 수행하며, 개인의 성장에 의구심을 느껴
                                    진행한 프로젝트입니다. 요구사항 및 기능정의 부터 구현까지 스스로 진행하는 것을
                                    목표로 프로젝트를 진행하였습니다.
                                </p>
                                <p>
                                    노션으로 프로젝트를 관리하며 사용자 요구사항 및 기능을 정의하였습니다. 또한 피그마로
                                    디자인 프로토타입을 구현하며 UX 향상을 고민하였습니다.
                                </p>
                            </_introBox>
                            <_functionBox className="functionBox">
                                <span>구현 기능</span>
                                <div className="functionListBox">
                                    {temp.map((item) => (
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
                </_wrapper>
            </_background>
        </>
    );
};

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
    background: #0000005e;
    animation: fadeIn 0.5s forwards;
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
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
`;

const _content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 35px 60px;
`;

// 왼쪽 부분 스타일링
const _leftBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    height: 100%;
    & > :nth-child(1) {
        width: 100%;
        height: 45%;
    }
    & > :nth-child(2) {
        width: 100%;
        height: 55%;
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;
const _swiper = styled(Swiper)`
    width: 100%;
    height: 100%;
`;
const _swiperImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: initial;
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
const _deployBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 35px;
    & > :nth-child(1) {
        padding: 5px 7px;
        border-radius: 10px;
        background-color: rgb(204 204 204 / 47%);
    }
    & > :nth-child(2) {
        padding-top: 5px;
        color: #676767;
        font-size: 16px;
    }
`;
const _repoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 15px;
    & > :nth-child(1) {
        padding: 5px 7px;
        border-radius: 10px;
        background-color: rgb(204 204 204 / 47%);
    }
    & > :nth-child(2) {
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
    }
    & > div span {
        color: #676767;
        font-size: 16px;
    }
`;

// 오른쪽 부분 스타일링
const _rightBox = styled.div`
    width: 55%;
    height: 100%;
    margin-left: 60px;
`;
const _introBox = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > span {
        font-size: 24px;
        font-weight: 600;
        background-image: linear-gradient(transparent 70%, #48bb7885 30%);
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
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > span {
        font-size: 24px;
        font-weight: 600;
        background-image: linear-gradient(transparent 70%, #48bb7885 30%);
    }
    & p {
        letter-spacing: -0.5px;
        font-size: 16px;
        padding-top: 10px;
        text-align: left;
        line-height: 1.45;
    }
`;
const _functionList = styled.div`
    display: flex;
    & > div {
        font-weight: 700;
        color: red;
        font-size: 24px;
        padding-top: 10px;
        margin-right: 10px;
    }
`;

export default ProjectModal;
