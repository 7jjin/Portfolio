import styled from 'styled-components';
import reactImg from '../../../assets/react.png';
import typescriptImg from '../../../assets/typescript.png';
import recoilImg from '../../../assets/recoil.png';
import reduxToolkitImg from '../../../assets/redux-toolkit.png';
import zustandImg from '../../../assets/zustand.jpg';
import styledComponentImg from '../../../assets/styled-component.png';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { openStackState } from '../../../recoil/atoms';
import { FRONTEND } from '../../../constant/skills';
import SkillModal from '../Modal/SkillModal';

interface isModal {
    isboolean: boolean;
    name: string;
    value: number;
    content: string;
}

const FrontendInput = () => {
    const [openStack, setOpenStack] = useRecoilState(openStackState);
    const etcCheckbox = document.getElementById('etc') as HTMLInputElement;
    const backendCheckbox = document.getElementById('backend') as HTMLInputElement;
    const frontendCheckbox = document.getElementById('frontend') as HTMLInputElement;
    const etcBtn = document.getElementById('etcBtn') as HTMLInputElement;
    const etcATag = document.getElementsByClassName('etc') as HTMLCollectionOf<HTMLElement>;
    const backendBtn = document.getElementById('backendBtn') as HTMLInputElement;
    const backendATag = document.getElementsByClassName('backend') as HTMLCollectionOf<HTMLElement>;
    const frontendBtn = document.getElementById('frontendBtn') as HTMLInputElement;
    const frontendATag = document.getElementsByClassName('frontend') as HTMLCollectionOf<HTMLElement>;

    const [modal, setModal] = useState<isModal>({
        isboolean: false,
        name: FRONTEND[0].name,
        value: FRONTEND[0].value,
        content: FRONTEND[0].content,
    });

    // frontend inputbox open/close 함수
    useEffect(() => {
        if (frontendCheckbox) {
            if (openStack.frontend === true) {
                frontendCheckbox.checked = true;
            } else if (openStack.frontend === false) {
                console.log('hi');
                frontendCheckbox.checked = false;
            }
        }
    }, [openStack.frontend]);

    // 체그박스 checked 속성 확인 핸들러
    useEffect(() => {
        if (frontendCheckbox && backendBtn && backendATag && etcBtn && etcATag) {
            isOpenHandler();
        }
    }, [frontendCheckbox?.checked, openStack.frontend]);

    // frontend input 체크 시 다른 input 태그 이동
    const isOpenHandler = () => {
        // frontend가 checked on일 때
        if (frontendCheckbox.checked === true) {
            backendBtn.style.marginLeft = '70px';
            etcBtn.style.marginLeft = '10px';

            setOpenStack((prevState) => ({ ...prevState, frontend: true }));
            for (let i = 0; i < backendATag.length; i++) {
                backendATag[i].style.marginLeft = '70px';
            }
            for (let i = 0; i < etcATag.length; i++) {
                etcATag[i].style.marginLeft = '10px';
            }
            for (let i = 0; i < frontendATag.length; i++) {
                frontendATag[i].style.visibility = 'visible';
            }
        }
        // frontend가 checked on이고 backend가 checked 되었을 때
        else if (backendCheckbox.checked === true) {
            backendBtn.style.marginLeft = '-40px';
            frontendBtn.style.marginLeft = '-120px';
            etcBtn.style.marginLeft = '40px';
            for (let i = 0; i < frontendATag.length; i++) {
                frontendATag[i].style.marginLeft = '-120px';
            }
            for (let i = 0; i < etcATag.length; i++) {
                etcATag[i].style.marginLeft = '40px';
            }
            for (let i = 0; i < backendATag.length; i++) {
                backendATag[i].style.visibility = 'visible';
                backendATag[i].style.marginLeft = '-40px';
            }
        }
        // frontend가 checked on이고 etc checked 되었을 때
        else if (etcCheckbox.checked === true) {
            backendBtn.style.marginLeft = '-40px';
            frontendBtn.style.marginLeft = '-90px';
            etcBtn.style.marginLeft = '-40px';
            for (let i = 0; i < frontendATag.length; i++) {
                frontendATag[i].style.marginLeft = '-90px';
            }
            for (let i = 0; i < etcATag.length; i++) {
                etcATag[i].style.marginLeft = '-40px';
                etcATag[i].style.visibility = 'visible';
            }
            for (let i = 0; i < backendATag.length; i++) {
                backendATag[i].style.marginLeft = '-150px';
            }
        }
        // frontend가 checked on에서 off로 바꼈을 때
        else {
            setOpenStack((prevState) => ({ ...prevState, frontend: false }));
            console.log(openStack.frontend);
            backendBtn.style.marginLeft = '-40px';
            etcBtn.style.marginLeft = '-40px';
            frontendCheckbox.checked = false;

            for (let i = 0; i < backendATag.length; i++) {
                backendATag[i].style.marginLeft = '-40px';
            }
            for (let i = 0; i < etcATag.length; i++) {
                etcATag[i].style.marginLeft = '-40px';
            }
            for (let i = 0; i < frontendATag.length; i++) {
                frontendATag[i].style.visibility = 'hidden';
            }
        }
    };

    // skill 상세 모달 on/off
    const handleModal = ({ isboolean, name, value, content }: isModal) => {
        setModal({
            isboolean,
            name,
            value,
            content,
        });
    };
    return (
        <>
            <_menuOpen type="checkbox" className="menuOpen" name="menuOpen" id="frontend" onChange={isOpenHandler} />
            <_menuOpenButton className="menuOpenButton" htmlFor="frontend" id="frontendBtn">
                Frontend{openStack.frontend}
                <SkillModal {...modal} />
            </_menuOpenButton>
            <_menuItem
                className="menuItem react frontend"
                onMouseEnter={() =>
                    handleModal({
                        isboolean: true,
                        name: FRONTEND[0].name,
                        value: FRONTEND[0].value,
                        content: FRONTEND[0].content,
                    })
                }
                // onMouseLeave={() =>
                //     handleModal({
                //         isboolean: false,
                //         stack: '',
                //         value: 0,
                //         content: '',
                //     })
                // }
            >
                <img src={reactImg} alt="React" />
            </_menuItem>
            <_menuItem
                className="menuItem typescript frontend"
                onMouseEnter={() =>
                    handleModal({
                        isboolean: true,
                        name: FRONTEND[1].name,
                        value: FRONTEND[1].value,
                        content: FRONTEND[1].content,
                    })
                }
                // onMouseLeave={() =>
                //     handleModal({
                //         isboolean: false,
                //         stack: '',
                //         value: 0,
                //         content: '',
                //     })
                // }
            >
                <img src={typescriptImg} alt="TypeScript" />
            </_menuItem>
            <_menuItem
                className="menuItem reduxToolkit frontend"
                onMouseEnter={() =>
                    handleModal({
                        isboolean: true,
                        name: FRONTEND[2].name,
                        value: FRONTEND[2].value,
                        content: FRONTEND[2].content,
                    })
                }
                // onMouseLeave={() =>
                //     handleModal({
                //         isboolean: false,
                //         stack: '',
                //         value: 0,
                //         content: '',
                //     })
                // }
            >
                <img src={reduxToolkitImg} alt="ReduxTollkit" />
            </_menuItem>
            <_menuItem
                className="menuItem Recoil frontend"
                onMouseEnter={() =>
                    handleModal({
                        isboolean: true,
                        name: FRONTEND[3].name,
                        value: FRONTEND[3].value,
                        content: FRONTEND[3].content,
                    })
                }
                // onMouseLeave={() =>
                //     handleModal({
                //         isboolean: false,
                //         stack: '',
                //         value: 0,
                //         content: '',
                //     })
                // }
            >
                <img src={recoilImg} alt="Recoil" />
            </_menuItem>
            <_menuItem
                className="menuItem zustand frontend"
                onMouseEnter={() =>
                    handleModal({
                        isboolean: true,
                        name: FRONTEND[4].name,
                        value: FRONTEND[4].value,
                        content: FRONTEND[4].content,
                    })
                }
                // onMouseLeave={() =>
                //     handleModal({
                //         isboolean: false,
                //         stack: '',
                //         value: 0,
                //         content: '',
                //     })
                // }
            >
                <img src={zustandImg} alt="Zustand" />
            </_menuItem>
            <_menuItem
                className="menuItem styledComponent frontend"
                onMouseEnter={() =>
                    handleModal({
                        isboolean: true,
                        name: FRONTEND[5].name,
                        value: FRONTEND[5].value,
                        content: FRONTEND[5].content,
                    })
                }
                // onMouseLeave={() =>
                //     handleModal({
                //         isboolean: false,
                //         stack: '',
                //         value: 0,
                //         content: '',
                //     })
                // }
            >
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
    visibility: hidden;
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
