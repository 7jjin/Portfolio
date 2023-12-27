import styled from 'styled-components';
import SkillBtn from '../atoms/Button/SkillBtn';
import { BACKEND, ETC, FRONTEND } from '../../constant/skills';
import { useEffect, useRef, useState } from 'react';

const Skill = () => {
    const frontCenterRef = useRef<HTMLInputElement>(null);
    const backCenterRef = useRef<HTMLInputElement>(null);
    const etcCenterRef = useRef<HTMLInputElement>(null);
    const [frontCenterX, setFrontCenterX] = useState<number>(0);
    const [frontCenterY, setFrontCenterY] = useState<number>(0);
    const [backCenterX, setBackCenterX] = useState<number>(0);
    const [backCenterY, setBackCenterY] = useState<number>(0);
    const [etcCenterX, setEtcCenterX] = useState<number>(0);
    const [etcCenterY, setEtcCenterY] = useState<number>(0);
    useEffect(() => {
        if (frontCenterRef.current) {
            const rect = frontCenterRef.current.getBoundingClientRect();
            console.log(rect.top + window.pageYOffset);
            setFrontCenterX(rect.left + rect.width / 2);
            setFrontCenterY(rect.top + window.pageYOffset + rect.height / 2);
        }
        if (backCenterRef.current) {
            const rect = backCenterRef.current.getBoundingClientRect();
            console.log(rect.top + window.pageYOffset);
            setBackCenterX(rect.left + rect.width / 2);
            setBackCenterY(rect.top + window.pageYOffset + rect.height / 2);
        }
        if (etcCenterRef.current) {
            const rect = etcCenterRef.current.getBoundingClientRect();
            console.log(rect.top + window.pageYOffset);
            setEtcCenterX(rect.left + rect.width / 2);
            setEtcCenterY(rect.top + window.pageYOffset + rect.height / 2);
        }
    }, []);

    const radius = 100; // 원의 반지름
    return (
        <>
            <_skillBox>
                <_skillBoxWrapper className="skillBoxWrapper">
                    <div className="frontend" ref={frontCenterRef}>
                        <SkillBtn className={'Frontend'} size={'big'} onClick={() => console.log('hi')}>
                            Frontend
                        </SkillBtn>
                    </div>
                    <div className="backend" ref={backCenterRef}>
                        <SkillBtn className={'backend'} size={'big'} onClick={() => console.log('hi')}>
                            Backtend
                        </SkillBtn>
                    </div>
                    <div className="etc" ref={etcCenterRef}>
                        <SkillBtn className={'etc'} size={'big'} onClick={() => console.log('hi')}>
                            Etc
                        </SkillBtn>
                    </div>
                </_skillBoxWrapper>
            </_skillBox>
            {FRONTEND.map((item, index) => {
                const angle = (index / FRONTEND.length) * 2 * Math.PI;
                const buttonX = frontCenterX + radius * Math.cos(angle);
                const buttonY = frontCenterY + radius * Math.sin(angle);

                return (
                    <_btnLabel key={index} style={{ left: `${buttonX}px`, top: `${buttonY}px` }}>
                        <SkillBtn className={item.name} size={'small'}>
                            {item.name}
                        </SkillBtn>
                    </_btnLabel>
                );
            })}
            {BACKEND.map((item, index) => {
                const angle = (index / BACKEND.length) * 2 * Math.PI;
                const buttonX = backCenterX + radius * Math.cos(angle);
                const buttonY = backCenterY + radius * Math.sin(angle);

                return (
                    <_btnLabel key={index} style={{ left: `${buttonX}px`, top: `${buttonY}px` }}>
                        <SkillBtn className={item.name} size={'small'}>
                            {item.name}
                        </SkillBtn>
                    </_btnLabel>
                );
            })}
            {ETC.map((item, index) => {
                const angle = (index / ETC.length) * 2 * Math.PI;
                const buttonX = etcCenterX + radius * Math.cos(angle);
                const buttonY = etcCenterY + radius * Math.sin(angle);

                return (
                    <_btnLabel key={index} style={{ left: `${buttonX}px`, top: `${buttonY}px` }}>
                        <SkillBtn className={item.name} size={'small'}>
                            {item.name}
                        </SkillBtn>
                    </_btnLabel>
                );
            })}
        </>
    );
};

const _skillBox = styled.section`
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
`;

const _skillBoxWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`;

const _btnLabel = styled.label`
    position: absolute;
    /* z-index: -1;
    top: 50%;
    left: 50%; */
    transform: translate(-50%, -50%);
`;

export default Skill;
