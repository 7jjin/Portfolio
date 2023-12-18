import styled from 'styled-components';
import NavBtn from '../atoms/Button/NavBtn';
import { useState } from 'react';

const Menu = () => {
    const [activeButton, setActiveButton] = useState<string | null>(null);

    // Nav버튼 클릭시 해당 버튼만 동작
    const onClickStyle = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <>
            <_Menu id="menu">
                <NavBtn
                    className={'About'}
                    color={'#FC7A7A'}
                    onClick={() => onClickStyle('About')}
                    active={activeButton === 'About'}
                >
                    ABOUT
                </NavBtn>
                <NavBtn
                    className={'SKILL'}
                    color={'#F09B54'}
                    onClick={() => onClickStyle('SKILL')}
                    active={activeButton === 'SKILL'}
                >
                    SKILL
                </NavBtn>
                <NavBtn
                    className={'PROJECT'}
                    color={'#48BB78'}
                    onClick={() => onClickStyle('PROJECT')}
                    active={activeButton === 'PROJECT'}
                >
                    PROJECT
                </NavBtn>
                <NavBtn
                    className={'AWARD'}
                    color={'#4299E1'}
                    onClick={() => onClickStyle('AWARD')}
                    active={activeButton === 'AWARD'}
                >
                    AWARD
                </NavBtn>
                <NavBtn
                    className={'BLOG'}
                    color={'#9F7AEA'}
                    onClick={() => onClickStyle('BLOG')}
                    active={activeButton === 'BLOG'}
                >
                    BLOG
                </NavBtn>
            </_Menu>
        </>
    );
};

const _Menu = styled.section`
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
