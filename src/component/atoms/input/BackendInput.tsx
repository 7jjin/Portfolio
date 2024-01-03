import styled from 'styled-components';
import nodeJSImg from '../../../assets/nodeJS.png';
import expressImg from '../../../assets/express.png';
import socketImg from '../../../assets/socket.png';
import mysqlImg from '../../../assets/mysql.png';
import sequelizeImg from '../../../assets/sequelize.png';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { openStackState } from '../../../recoil/atoms';
import { BACKEND } from '../../../constant/skills';
import SkillModal from '../Modal/SkillModal';

interface isModal {
    isboolean: boolean;
    name: string;
    value: number;
    content: string;
}

const BackendInput = () => {
    const [openStack, setOpenStack] = useRecoilState(openStackState);
    const backendCheckbox = document.getElementById('backend') as HTMLInputElement;
    const backendBtn = document.getElementById('backendBtn') as HTMLInputElement;

    const backendATag = document.getElementsByClassName('backend') as HTMLCollectionOf<HTMLElement>;
    const frontendCheckbox = document.getElementById('frontend') as HTMLInputElement;

    const frontendBtn = document.getElementById('frontendBtn') as HTMLInputElement;
    const frontendATag = document.getElementsByClassName('frontend') as HTMLCollectionOf<HTMLElement>;
    const etcCheckbox = document.getElementById('etc') as HTMLInputElement;

    const etcBtn = document.getElementById('etcBtn') as HTMLInputElement;
    const etcATag = document.getElementsByClassName('etc') as HTMLCollectionOf<HTMLElement>;

    const [modal, setModal] = useState<isModal>({
        isboolean: false,
        name: BACKEND[0].name,
        value: BACKEND[0].value,
        content: BACKEND[0].content,
    });
    // frontend inputbox open/close 함수
    useEffect(() => {
        if (backendCheckbox) {
            if (openStack.backend === true) {
                backendCheckbox.checked = true;
            } else if (openStack.backend === false) {
                backendCheckbox.checked = false;
            }
        }
    }, [openStack.backend]);
    // 체그박스 checked 속성 확인 핸들러
    useEffect(() => {
        if (backendCheckbox && frontendBtn && frontendATag && etcBtn && etcATag) {
            isOpenHandler();
        }
    }, [backendCheckbox?.checked, openStack.backend]);
    // frontend input 체크 시 다른 input 태그 이동
    const isOpenHandler = () => {
        // backend가 checked on일 때
        if (backendCheckbox.checked === true) {
            frontendBtn.style.marginLeft = '-120px';
            etcBtn.style.marginLeft = '40px';
            setOpenStack((prevState) => ({ ...prevState, backend: true }));

            for (let i = 0; i < frontendATag.length; i++) {
                frontendATag[i].style.marginLeft = '-120px';
            }
            for (let i = 0; i < etcATag.length; i++) {
                etcATag[i].style.marginLeft = '40px';
            }
            for (let i = 0; i < backendATag.length; i++) {
                backendATag[i].style.visibility = 'visible';
            }
        }
        // backend가 checked on이고 frontend가 checked 되었을 때
        else if (frontendCheckbox.checked === true) {
            frontendBtn.style.marginLeft = '-40px';
            etcBtn.style.marginLeft = '10px';
            backendBtn.style.marginLeft = '70px';
            for (let i = 0; i < frontendATag.length; i++) {
                frontendATag[i].style.marginLeft = '-40px';
            }
            for (let i = 0; i < etcATag.length; i++) {
                etcATag[i].style.marginLeft = '10px';
            }
            for (let i = 0; i < backendATag.length; i++) {
                backendATag[i].style.visibility = 'hidden';
            }
        }
        // backend가 checked on이고 etc가 chekced 되었을 때
        else if (etcCheckbox.checked === true) {
            frontendBtn.style.marginLeft = '-90px';
            etcBtn.style.marginLeft = '-40px';
            backendBtn.style.marginLeft = '-150px';
            for (let i = 0; i < frontendATag.length; i++) {
                frontendATag[i].style.marginLeft = '-90px';
            }
            for (let i = 0; i < etcATag.length; i++) {
                etcATag[i].style.marginLeft = '-40px';
            }
            for (let i = 0; i < backendATag.length; i++) {
                backendATag[i].style.marginLeft = '-150px';
            }
        }
        // backend가 checked on에서 off로 바꼈을 때
        else {
            setOpenStack((prevState) => ({ ...prevState, backend: false }));

            frontendBtn.style.marginLeft = '-40px';
            etcBtn.style.marginLeft = '-40px';
            for (let i = 0; i < frontendATag.length; i++) {
                frontendATag[i].style.marginLeft = '-40px';
            }
            for (let i = 0; i < etcATag.length; i++) {
                etcATag[i].style.marginLeft = '-40px';
            }
            for (let i = 0; i < backendATag.length; i++) {
                backendATag[i].style.visibility = 'hidden';
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
            <_menuOpen type="checkbox" className="menuOpen" name="menuOpen" id="backend" onChange={isOpenHandler} />
            <_menuOpenButton className="menuOpenButton" htmlFor="backend" id="backendBtn">
                Backend
                {openStack.backend && <SkillModal {...modal} />}
            </_menuOpenButton>
            <_menuItem
                className="menuItem node.js backend"
                onMouseEnter={() =>
                    handleModal({
                        isboolean: true,
                        name: BACKEND[0].name,
                        value: BACKEND[0].value,
                        content: BACKEND[0].content,
                    })
                }
            >
                <img src={nodeJSImg} alt="node.js" />
            </_menuItem>
            <_menuItem
                className="menuItem Express backend"
                onMouseEnter={() =>
                    handleModal({
                        isboolean: true,
                        name: BACKEND[1].name,
                        value: BACKEND[1].value,
                        content: BACKEND[1].content,
                    })
                }
            >
                <img src={expressImg} alt="Express" />
            </_menuItem>
            <_menuItem
                className="menuItem Socket.io backend"
                onMouseEnter={() =>
                    handleModal({
                        isboolean: true,
                        name: BACKEND[2].name,
                        value: BACKEND[2].value,
                        content: BACKEND[2].content,
                    })
                }
            >
                <img src={socketImg} alt="Socket.io" />
            </_menuItem>
            <_menuItem
                className="menuItem MySQL backend"
                onMouseEnter={() =>
                    handleModal({
                        isboolean: true,
                        name: BACKEND[3].name,
                        value: BACKEND[3].value,
                        content: BACKEND[3].content,
                    })
                }
            >
                <img src={mysqlImg} alt="MySQL" />
            </_menuItem>
            <_menuItem
                className="menuItem Sequelize backend"
                onMouseEnter={() =>
                    handleModal({
                        isboolean: true,
                        name: BACKEND[4].name,
                        value: BACKEND[4].value,
                        content: BACKEND[4].content,
                    })
                }
            >
                <img src={sequelizeImg} alt="Sequelize" />
            </_menuItem>
        </>
    );
};

const _menuItem = styled.a`
    background: #fff80b;
    border-radius: 100%;
    width: 120px;
    height: 120px;
    margin-left: -40px;
    position: absolute;
    color: #ffffff;
    text-align: center;
    visibility: hidden;
    line-height: 120px;
    -webkit-transform: translate3d(0, 0, 0);
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
    & img {
        object-fit: cover;
        border-radius: 100%;
        width: 100%;
        height: 100%;
    }
`;
const _menuOpenButton = styled.label`
    background: #fff80b;
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
        transform: translate3d(0.08361px, -140.99997px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(4) {
        transition-duration: 280ms;
        transform: translate3d(140.9466px, -30.47586px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(5) {
        transition-duration: 380ms;
        transform: translate3d(75.9466px, 130.99997px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(6) {
        transition-duration: 480ms;
        transform: translate3d(-75.91639px, 130.99997px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(7) {
        transition-duration: 580ms;
        transform: translate3d(-140.86291px, -30.47586px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
`;

export default BackendInput;
