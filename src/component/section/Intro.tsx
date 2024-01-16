import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import '@fontsource/gothic-a1/400.css';
import LinkBtn from 'component/atoms/Button/LinkBtn';
import { LINK } from 'constant/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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

    const [link, setLink] = useState(false);

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
        }, 150);
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
                // subIntro.current.style.animation = 'text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both';
                // slidbox.current.style.animation = 'blink 1s ease-in-out infinite alternate';
                const tl = gsap.timeline();
                tl.to('.subIntro', { duration: 1, opacity: 1, delay: 0.5 })
                    .to('.github', {
                        duration: 0.5,
                        opacity: 1,
                        top: 0,
                    })
                    .to('.tistory', { duration: 0.5, opacity: 1, top: 0 })
                    .to('.slidebox', { duration: 1, opacity: 1 });
                // setLink(true);
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
                    <span>좌우 스크롤입니다.</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="540" height="16" viewBox="0 0 540 16" fill="none">
                        <path
                            d="M539.707 8.70706C540.098 8.31654 540.098 7.68337 539.707 7.29285L533.343 0.928886C532.953 0.538361 532.319 0.538361 531.929 0.928886C531.538 1.31941 531.538 1.95257 531.929 2.3431L537.586 7.99995L531.929 13.6568C531.538 14.0473 531.538 14.6805 531.929 15.071C532.319 15.4615 532.953 15.4615 533.343 15.071L539.707 8.70706ZM8.74228e-08 9L539 8.99995L539 6.99995L-8.74228e-08 7L8.74228e-08 9Z"
                            fill="black"
                            fill-opacity="0.25"
                        />
                    </svg>
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
    & > span,
    svg {
        color: rgba(0, 0, 0, 0.25);
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
