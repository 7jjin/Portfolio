import styled from 'styled-components';
import figmaImg from '../../../assets/figma.png';
import postmanImg from '../../../assets/postman.png';
import awsImg from '../../../assets/aws.png';
import teachableMachineImg from '../../../assets/teachable.png';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { openStackState } from '../../../recoil/atoms';
import { ETC } from '../../../constant/skills';
import SkillModal from '../Modal/SkillModal';

interface isModal {
    isboolean: boolean;
    name: string;
    value: number;
    content: string;
}
const EtcInput = () => {
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
        name: ETC[0].name,
        value: ETC[0].value,
        content: ETC[0].content,
    });
    // frontend inputbox open/close 함수
    useEffect(() => {
        if (etcCheckbox) {
            if (openStack.etc === true) {
                etcCheckbox.checked = true;
            } else if (openStack.etc === false) {
                etcCheckbox.checked = false;
            }
        }
    }, [openStack.etc]);

    // 체그박스 checked 속성 확인 핸들러
    useEffect(() => {
        if (etcCheckbox && backendBtn && backendATag && frontendBtn && frontendATag) {
            isOpenHandler();
        }
    }, [etcCheckbox?.checked, openStack.etc]);
    // frontend input 체크 시 다른 input 태그 이동
    const isOpenHandler = () => {
        // etc가 checked on일 때
        if (etcCheckbox.checked === true) {
            backendBtn.style.marginLeft = '-150px';
            frontendBtn.style.marginLeft = '-90px';
            setOpenStack((prevState) => ({ ...prevState, etc: true }));

            for (let i = 0; i < backendATag.length; i++) {
                backendATag[i].style.marginLeft = '-150px';
            }
            for (let i = 0; i < frontendATag.length; i++) {
                frontendATag[i].style.marginLeft = '-90px';
            }
            for (let i = 0; i < etcATag.length; i++) {
                etcATag[i].style.visibility = 'visible';
            }
        }
        // etc가 checked on일 때 backend가 checked 되었을 때
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
        // etc가 checked on 일 때 frontend가 checked 되었을 때
        else if (frontendCheckbox.checked === true) {
            backendBtn.style.marginLeft = '70px';
            etcBtn.style.marginLeft = '10px';
            frontendBtn.style.marginLeft = '-40px';

            for (let i = 0; i < backendATag.length; i++) {
                backendATag[i].style.marginLeft = '70px';
            }
            for (let i = 0; i < etcATag.length; i++) {
                etcATag[i].style.marginLeft = '10px';
            }
            for (let i = 0; i < frontendATag.length; i++) {
                frontendATag[i].style.marginLeft = '-40px';
                frontendATag[i].style.visibility = 'visible';
            }
        }
        // etc가 checked on에서 off로 바꼈을 때
        else {
            backendBtn.style.marginLeft = '-40px';
            frontendBtn.style.marginLeft = '-40px';
            etcCheckbox.checked = false;
            setOpenStack((prevState) => ({ ...prevState, etc: false }));

            for (let i = 0; i < backendATag.length; i++) {
                backendATag[i].style.marginLeft = '-40px';
            }
            for (let i = 0; i < frontendATag.length; i++) {
                frontendATag[i].style.marginLeft = '-40px';
            }
            for (let i = 0; i < etcATag.length; i++) {
                etcATag[i].style.visibility = 'hidden';
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
            <_menuOpen type="checkbox" className="menuOpen" name="menuOpen" id="etc" onChange={isOpenHandler} />
            <_menuOpenButton className="menuOpenButton" htmlFor="etc" id="etcBtn">
                ETC
                {openStack.etc && <SkillModal {...modal} />}
            </_menuOpenButton>
            <_menuItem
                className="menuItem figma etc"
                onMouseEnter={() =>
                    handleModal({
                        isboolean: true,
                        name: ETC[0].name,
                        value: ETC[0].value,
                        content: ETC[0].content,
                    })
                }
            >
                <img src={figmaImg} alt="Figma" />
            </_menuItem>
            <_menuItem
                className="menuItem postman etc"
                onMouseEnter={() =>
                    handleModal({
                        isboolean: true,
                        name: ETC[1].name,
                        value: ETC[1].value,
                        content: ETC[1].content,
                    })
                }
            >
                <img src={postmanImg} alt="Postman" />
            </_menuItem>
            <_menuItem
                className="menuItem aws etc"
                onMouseEnter={() =>
                    handleModal({
                        isboolean: true,
                        name: ETC[2].name,
                        value: ETC[2].value,
                        content: ETC[2].content,
                    })
                }
            >
                <img src={awsImg} alt="AWS" />
            </_menuItem>
            <_menuItem
                className="menuItem teachable machine etc"
                onMouseEnter={() =>
                    handleModal({
                        isboolean: true,
                        name: ETC[3].name,
                        value: ETC[3].value,
                        content: ETC[3].content,
                    })
                }
            >
                <img src={teachableMachineImg} alt="Teachable machine" />
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
    visibility: hidden;
    line-height: 120px;
    transform: translate3d(0, 0, 0);
    transition: all ease-out 200ms;
    &:nth-child(3) {
        transition-duration: 180ms;
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
    background: #00e961;
    font-family: 'title2', sans-serif;
    font-size: 20px;

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
        transform: translate3d(-100.91639px, -100.99997px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(4) {
        transition-duration: 280ms;
        transform: translate3d(100.91639px, -100.99997px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(5) {
        transition-duration: 380ms;
        transform: translate3d(100.91639px, 100.99997px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(6) {
        transition-duration: 480ms;
        transform: translate3d(-100.91639px, 100.99997px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
`;

export default EtcInput;
