import styled from 'styled-components';
import NavBtn from '../atoms/Button/NavBtn';
import { useRecoilState } from 'recoil';
import { activeNavBtnState } from '../../recoil/atoms';
import { useEffect } from 'react';

const Menu = () => {
    const [activeNavBtn, setActiveNavBtn] = useRecoilState(activeNavBtnState);
    // Nav버튼 클릭시 해당 버튼만 동작
    const onClickStyle = (buttonName: string) => {
        setActiveNavBtn(buttonName);
    };

    return (
        <>
            <_Menu id="menu">
                <NavBtn
                    className={'About'}
                    color={'#FC7A7A'}
                    onClick={() => onClickStyle('About')}
                    active={activeNavBtn === 'About'}
                >
                    ABOUT
                </NavBtn>
                <NavBtn
                    className={'SKILL'}
                    color={'#F09B54'}
                    onClick={() => onClickStyle('SKILL')}
                    active={activeNavBtn === 'SKILL'}
                >
                    SKILL
                </NavBtn>
                <NavBtn
                    className={'PROJECT'}
                    color={'#48BB78'}
                    onClick={() => onClickStyle('PROJECT')}
                    active={activeNavBtn === 'PROJECT'}
                >
                    PROJECT
                </NavBtn>
                <NavBtn
                    className={'AWARD'}
                    color={'#4299E1'}
                    onClick={() => onClickStyle('AWARD')}
                    active={activeNavBtn === 'AWARD'}
                >
                    AWARD
                </NavBtn>
                <NavBtn
                    className={'BLOG'}
                    color={'#9F7AEA'}
                    onClick={() => onClickStyle('BLOG')}
                    active={activeNavBtn === 'BLOG'}
                >
                    BLOG
                </NavBtn>
            </_Menu>
        </>
    );
};

const _Menu = styled.section`
    height: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 10%;
    background-color: #4a5568;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`;

export default Menu;
