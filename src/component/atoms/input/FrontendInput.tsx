import styled from 'styled-components';
import reactImg from '../../../assets/react.png';
import typescriptImg from '../../../assets/typescript.png';
import recoilImg from '../../../assets/recoil.png';
import reduxToolkitImg from '../../../assets/redux-toolkit.png';
import zustandImg from '../../../assets/zustand.jpg';
import styledComponentImg from '../../../assets/styled-component.png';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { lastOpenStackState, openStackState } from '../../../recoil/atoms';

const FrontendInput = () => {
    const [openStack, setOpenStack] = useRecoilState(openStackState);
    const frontendCheckbox = document.getElementById('frontend') as HTMLInputElement;
    const backendBtn = document.getElementById('backendBtn') as HTMLInputElement;
    const backendATag = document.getElementsByClassName('backend') as HTMLCollectionOf<HTMLElement>;
    const etcBtn = document.getElementById('etcBtn') as HTMLInputElement;
    const etcATag = document.getElementsByClassName('etc') as HTMLCollectionOf<HTMLElement>;

    // frontend inputbox open/close 함수
    useEffect(() => {
        if (frontendCheckbox) {
            if (openStack.frontend === true) {
                frontendCheckbox.checked = true;
            } else if (openStack.frontend === false) {
                frontendCheckbox.checked = false;
            }
        }
    }, [openStack.frontend]);

    // 체그박스 checked 속성 확인 핸들러
    useEffect(() => {
        if (backendBtn && backendATag && etcBtn && etcATag) {
            isOpenHandler();
        }
    }, [openStack.frontend]);
    // frontend input 체크 시 다른 input 태그 이동
    const isOpenHandler = () => {
        if (backendBtn && backendATag && etcBtn && etcATag && frontendCheckbox.checked === true) {
            console.log('front checked');
            backendBtn.style.marginLeft = '70px';
            etcBtn.style.marginLeft = '10px';
            for (let i = 0; i < backendATag.length; i++) {
                backendATag[i].style.marginLeft = '70px';
            }
            for (let i = 0; i < etcATag.length; i++) {
                etcATag[i].style.marginLeft = '10px';
            }
        } else {
            console.log('front unchecked');

            backendBtn.style.marginLeft = '-40px';
            etcBtn.style.marginLeft = '-40px';
            frontendCheckbox.checked = false;
            for (let i = 0; i < backendATag.length; i++) {
                backendATag[i].style.marginLeft = '-40px';
            }
            for (let i = 0; i < etcATag.length; i++) {
                etcATag[i].style.marginLeft = '-40px';
            }
        }
    };
    return (
        <>
            <_menuOpen type="checkbox" className="menuOpen" name="menuOpen" id="frontend" onChange={isOpenHandler} />
            <_menuOpenButton className="menuOpenButton" htmlFor="frontend" id="frontendBtn">
                Frontend{openStack.frontend}
            </_menuOpenButton>
            <_menuItem className="menuItem react frontend">
                <img src={reactImg} alt="React" />
            </_menuItem>
            <_menuItem className="menuItem typescript frontend">
                <img src={typescriptImg} alt="TypeScript" />
            </_menuItem>
            <_menuItem className="menuItem reduxToolkit frontend">
                <img src={recoilImg} alt="ReduxTollkit" />
            </_menuItem>
            <_menuItem className="menuItem recoil frontend">
                <img src={reduxToolkitImg} alt="Recoil" />
            </_menuItem>
            <_menuItem className="menuItem zustand frontend">
                <img src={zustandImg} alt="Zustand" />
            </_menuItem>
            <_menuItem className="menuItem styledComponent frontend">
                <img src={styledComponentImg} alt="StyledComponent" />
            </_menuItem>
        </>
    );
};

const _menuItem = styled.a`
    border-radius: 100%;
    width: 120px;
    height: 120px;
    margin-left: -40px;
    position: absolute;
    color: #ffffff;
    text-align: center;
    line-height: 120px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    transition: all ease-out 200ms;
    &:nth-child(3) {
        transition-duration: 180ms;
        background:
            url(<path-to-image>),
            lightgray 50% / cover no-repeat;
    }
    &:nth-child(4) {
        transition-duration: 180ms;
    }
    &:nth-child(5) {
        transition-duration: 180ms;
    }
    &:nth-child(6) {
        transition-duration: 180ms;
    }
    &:nth-child(7) {
        transition-duration: 180ms;
    }
    &:nth-child(8) {
        transition-duration: 180ms;
    }
    &:nth-child(9) {
        transition-duration: 180ms;
    }
    & img {
        object-fit: cover;
        border-radius: 100%;
        width: 100%;
        height: 100%;
    }
`;
const _menuOpenButton = styled.label`
    background: #ff5151;
    border-radius: 100%;
    width: 120px;
    height: 120px;
    margin-left: -40px;
    position: absolute;
    color: black;
    font-weight: 600;
    text-align: center;
    line-height: 120px;
    transform: translate3d(0, 0, 0);
    transition: all ease-out 200ms;
    z-index: 2;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 400ms;
    transform: scale(1.1, 1.1) translate3d(0, 0, 0);
    cursor: pointer;
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    &:hover {
        transform: scale(1.2, 1.2) translate3d(0, 0, 0);
    }
`;
const _menuOpen = styled.input`
    display: none;
    &:checked + .menuOpenButton {
        transition-timing-function: linear;
        transition-duration: 200ms;
        transform: scale(0.8, 0.8) translate3d(0, 0, 0);
        background: white;
    }
    &:checked ~ .menuItem {
        transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
    }
    &:checked ~ .menuItem:nth-child(3) {
        transition-duration: 180ms;
        transform: translate3d(0.08361px, -150.99997px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(4) {
        transition-duration: 280ms;
        transform: translate3d(140.9466px, -70.47586px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(5) {
        transition-duration: 380ms;
        transform: translate3d(140.9466px, 70.47586px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(6) {
        transition-duration: 480ms;
        transform: translate3d(0.08361px, 150.99997px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(7) {
        transition-duration: 580ms;
        transform: translate3d(-140.86291px, 70.62064px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(8) {
        transition-duration: 680ms;
        transform: translate3d(-140.03006px, -70.33095px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
`;

export default FrontendInput;
