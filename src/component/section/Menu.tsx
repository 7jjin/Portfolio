import styled from 'styled-components';
import NavBtn from '../atoms/Button/NavBtn';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
    activeNavBtnState,
    activityPageRefState,
    introPageRefState,
    projectPageRefState,
    skillPageRefState,
} from '../../recoil/atoms';
import { useEffect } from 'react';

const Menu = () => {
    const [activeNavBtn, setActiveNavBtn] = useRecoilState(activeNavBtnState);
    const introPage = useRecoilValue(introPageRefState);
    const projectPage = useRecoilValue(projectPageRefState);
    const skillPage = useRecoilValue(skillPageRefState);
    const activityPage = useRecoilValue(activityPageRefState);

    // Nav버튼 클릭시 스타일 바뀌고 해당 section으로 이동
    const onClickStyle = (buttonName: string) => {
        setActiveNavBtn(buttonName);
        switch (buttonName) {
            case 'About':
                introPage && introPage.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'SKILL':
                skillPage && skillPage.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'PROJECT':
                projectPage && projectPage.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'ACTIVITY':
                activityPage && activityPage.scrollIntoView({ behavior: 'smooth' });
                break;
        }
    };

    return (
        <>
            <_MenuBox id="menuBox">
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
                    className={'ACTIVITY'}
                    color={'#4299E1'}
                    onClick={() => onClickStyle('ACTIVITY')}
                    active={activeNavBtn === 'ACTIVITY'}
                >
                    ACTIVITY
                </NavBtn>
                <NavBtn
                    className={'BLOG'}
                    color={'#9F7AEA'}
                    onClick={() => onClickStyle('BLOG')}
                    active={activeNavBtn === 'BLOG'}
                >
                    BLOG
                </NavBtn>
            </_MenuBox>
        </>
    );
};

const _MenuBox = styled.section`
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
