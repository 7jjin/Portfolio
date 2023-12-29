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

    // frontend inputbox open/close 함수
    useEffect(() => {
        const frontendCheckbox = document.getElementById('frontend') as HTMLInputElement;
        if (openStack.frontend === true) {
            if (frontendCheckbox) {
                frontendCheckbox.checked = true;
            }
        } else if (frontendCheckbox.checked === true) {
            frontendCheckbox.checked = false;
            setOpenStack({ ...openStack, frontend: false });
        }
    }, [openStack.frontend]);
    return (
        <>
            <_menuOpen type="checkbox" className="menuOpen" name="menuOpen" id="frontend" />
            <_menuOpenButton className="menuOpenButton" htmlFor="frontend">
                Frontend
            </_menuOpenButton>
            <_menuItem className="menuItem react">
                <img src={reactImg} alt="" />
            </_menuItem>
            <_menuItem className="menuItem typescript">
                <img src={typescriptImg} alt="" />
            </_menuItem>
            <_menuItem className="menuItem reduxToolkit">
                <img src={recoilImg} alt="" />
            </_menuItem>
            <_menuItem className="menuItem recoil">
                <img src={reduxToolkitImg} alt="" />
            </_menuItem>
            <_menuItem className="menuItem zustand">
                <img src={zustandImg} alt="" />
            </_menuItem>
            <_menuItem className="menuItem styledComponent">
                <img src={styledComponentImg} alt="" />
            </_menuItem>
        </>
    );
};

const _menuItem = styled.a`
    border-radius: 100%;
    width: 80px;
    height: 80px;
    margin-left: -40px;
    position: absolute;
    color: #ffffff;
    text-align: center;
    line-height: 80px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: -webkit-transform ease-out 200ms;
    transition: -webkit-transform ease-out 200ms;
    transition: transform ease-out 200ms;
    transition:
        transform ease-out 200ms,
        -webkit-transform ease-out 200ms;
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
    width: 80px;
    height: 80px;
    margin-left: -40px;
    position: absolute;
    color: black;
    font-weight: 600;
    text-align: center;
    line-height: 80px;
    transform: translate3d(0, 0, 0);
    transition: transform ease-out 200ms;
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
        transform: translate3d(0.08361px, -104.99997px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(4) {
        transition-duration: 280ms;
        transform: translate3d(90.9466px, -52.47586px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(5) {
        transition-duration: 380ms;
        transform: translate3d(90.9466px, 52.47586px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(6) {
        transition-duration: 480ms;
        transform: translate3d(0.08361px, 104.99997px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(7) {
        transition-duration: 580ms;
        transform: translate3d(-90.86291px, 52.62064px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(8) {
        transition-duration: 680ms;
        transform: translate3d(-91.03006px, -52.33095px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(9) {
        transition-duration: 780ms;
        transform: translate3d(-0.25084px, -104.9997px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
`;

export default FrontendInput;
