import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import '@fontsource/gothic-a1/400.css';
import LinkBtn from 'component/atoms/Button/LinkBtn';
import { LINK } from 'constant/link';
import gsap from 'gsap';
import { FaArrowDownLong } from 'react-icons/fa6';

const Intro = () => {
    const introText = '호기심 많은 프론트엔드 개발자';
    const nameText = '조진형';
    const endingText = '입니다.';
    const [intro, setIntro] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [ending, setEnding] = useState<string>('');
    const [count, setCount] = useState<number>(0);
    const subIntro = useRef<HTMLDivElement>(null);
    const slidbox = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLDivElement>(null);

    // 페이지 렌더링 후 실행되는 애니메이션
    useEffect(() => {
        // intro 부분 타이핑 속도
        const introInterval = setTimeout(() => {
            if (count < introText.length) {
                setIntro((prevIntro) => prevIntro + introText[count]);
                setCount((prevCount) => prevCount + 1);
            }
        }, 70);

        // name,ending 부분 타이핑 속도
        const nameEndingInterval = setTimeout(() => {
            const nameStartIndex = introText.length + 1;
            const nameEndIndex = nameStartIndex + nameText.length;

            if (count >= nameStartIndex && count < nameEndIndex) {
                setName((prevName) => prevName + nameText[count - nameStartIndex]);
            } else if (count >= nameEndIndex && count < nameEndIndex + endingText.length) {
                setEnding((prevEnding) => prevEnding + endingText[count - nameEndIndex]);
            }

            setCount((prevCount) => prevCount + 1);
        }, 170);
        // 다 실행되고 난 후 interval 삭제

        return () => {
            clearInterval(introInterval);
            clearInterval(nameEndingInterval);
            if (
                count >= introText.length + nameText.length + endingText.length &&
                subIntro.current &&
                slidbox.current
            ) {
                // 타이핑 완료 후 로직
                const tl = gsap.timeline();
                tl.to('.subIntro', { duration: 1, opacity: 1, delay: 0.5 })
                    .to('.github', {
                        duration: 0.5,
                        opacity: 1,
                        top: 0,
                    })
                    .to('.tistory', { duration: 0.5, opacity: 1, top: 0 })
                    .to('.slidebox', { duration: 1, opacity: 1 });
            }
        };
    }, [count, introText, nameText, endingText]);

    return (
        <>
            <_introBox id="introBox" ref={container}>
                <_mainIntro className="mainIntro">
                    {intro} <br />
                    <span>{name}</span>
                    {ending}
                </_mainIntro>
                <_subIntro className="subIntro" ref={subIntro}>
                    새로운 기술을 사용하는데 재미를 느끼고,
                    <br />더 나은 사용자 경험에 대해 항상 생각합니다.
                </_subIntro>
                <_linkBox className="linkBox">
                    {LINK.map((item) => (
                        <>
                            <LinkBtn className={item.name} {...item}></LinkBtn>
                        </>
                    ))}
                </_linkBox>
                <_slideBox className="slidebox" ref={slidbox}>
                    <FaArrowDownLong />
                </_slideBox>
            </_introBox>
        </>
    );
};

const _introBox = styled.section`
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

const _mainIntro = styled.p`
    font-family: 'title2', sans-serif;
    font-weight: normal;
    font-size: 50px;
    text-align: center;
    line-height: 1.25;
    margin: 50px 0px 100px;
    & > span {
        font-family: 'title2', sans-serif;
        font-size: 85px;
        margin-right: 10px;
        background-size: 100% 100%;
        background-image: linear-gradient(transparent 70%, #fc7a7a 30%);
    }
`;

const _subIntro = styled.p`
    font-size: 30px;
    font-weight: 400;
    margin: 40px 0px;
    text-align: center;
    line-height: 1.25;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 13%);
    /* animation: none; */
    /* visibility: hidden; */
    opacity: 0;
    @keyframes text-focus-in {
        0% {
            visibility: hidden;
            -webkit-filter: blur(12px);
            filter: blur(12px);
            opacity: 0;
        }
        100% {
            visibility: visible;

            -webkit-filter: blur(0px);
            filter: blur(0px);
            opacity: 1;
        }
    }
`;

const _linkBox = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    min-height: 50px;
    & > :nth-child(1) {
        left: 50%;
        top: -40px;
        transform: translateX(-200%);
        opacity: 0;
    }
    & > :nth-child(2) {
        left: 50%;
        top: -40px;
        transform: translateX(0%);
        opacity: 0;
    }
    @keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

const _slideBox = styled.div`
    position: absolute;
    bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* animation: none; */
    /* visibility: hidden; */
    opacity: 0;
    & > :nth-child(1) {
        color: grey;
        animation: text-pop-up-top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite alternate both;
        @keyframes text-pop-up-top {
            0% {
                transform: translateY(0);
                transform-origin: 50% 50%;
                text-shadow: none;
            }
            100% {
                transform: translateY(-25px);
                transform-origin: 50% 50%;
                text-shadow:
                    0 1px 0 #cccccc,
                    0 2px 0 #cccccc,
                    0 3px 0 #cccccc,
                    0 4px 0 #cccccc,
                    0 5px 0 #cccccc,
                    0 6px 0 #cccccc,
                    0 7px 0 #cccccc,
                    0 8px 0 #cccccc,
                    0 9px 0 #cccccc,
                    0 50px 30px rgba(0, 0, 0, 0.3);
            }
        }
    }

    @keyframes blink {
        0% {
            visibility: hidden;
            opacity: 0;
        }
        100% {
            visibility: visible;
            opacity: 1;
        }
    }
`;

export default Intro;
