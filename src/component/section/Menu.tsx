import styled from 'styled-components';
import NavBtn from '../atoms/Button/NavBtn';

const Menu = () => {
    const onClickStyle = () => {
        console.log('hi');
    };

    return (
        <>
            <_Menu id="menu">
                <NavBtn className={'About'} color={'#FC7A7A'} onClick={onClickStyle}>
                    ABOUT
                </NavBtn>
                <NavBtn className={'SKILL'} color={'#F09B54'} onClick={onClickStyle}>
                    SKILL
                </NavBtn>
                <NavBtn className={'PROJECT'} color={'#48BB78'} onClick={onClickStyle}>
                    PROJECT
                </NavBtn>
                <NavBtn className={'AWARD'} color={'#4299E1'} onClick={onClickStyle}>
                    AWARD
                </NavBtn>
                <NavBtn className={'BLOG'} color={'#9F7AEA'} onClick={onClickStyle}>
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
