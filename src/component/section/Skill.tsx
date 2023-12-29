import styled from 'styled-components';
import FrontendInput from '../atoms/input/FrontendInput';
import BackendInput from '../atoms/input/BackendInput';
import EtcInput from '../atoms/input/EtcInput';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { lastOpenStackState, openStackState } from '../../recoil/atoms';
import { useRecoilState, useResetRecoilState } from 'recoil';

const Skill = () => {
    const [openStack, setOpenStack] = useRecoilState(openStackState);
    const resetStack = useResetRecoilState(openStackState);
    const [lastOpenStack, setLastOpenStack] = useRecoilState(lastOpenStackState);
    // 스택 오픈 옵저버
    const { ref, inView } = useInView({ threshold: 0.35, delay: 500, trackVisibility: true });

    // 핸들러 관리
    const handleOpenStack = (stackType: string) => {
        console.log('Handling open stack:', stackType);

        // 초기값 -> frontend open
        if (stackType === '' || stackType === 'frontend') {
            setOpenStack({ ...openStack, frontend: true });
            console.log(openStack);
        } else if (stackType === 'backend') {
            setOpenStack({ ...openStack, backend: true });
            console.log(openStack);
        } else if (stackType === 'etc') {
            setOpenStack({ ...openStack, etc: true });
            console.log(openStack);
        }
    };

    useEffect(() => {
        if (inView) {
            handleOpenStack(lastOpenStack);
        }
        // unmount시 모두 닫기
        return () => {
            setOpenStack({
                frontend: false,
                backend: false,
                etc: false,
            });
        };
    }, [inView]);
    return (
        <>
            <_skillBox ref={ref}>
                <_skillBoxWrapper className="skillBoxWrapper">
                    <div
                        className="frontBox"
                        onChange={() => {
                            handleOpenStack('frontend');
                        }}
                    >
                        <FrontendInput />
                    </div>
                    <div
                        className="backendBox"
                        onChange={() => {
                            handleOpenStack('backend');
                        }}
                    >
                        <BackendInput />
                    </div>
                    <div
                        className="etcBox"
                        onChange={() => {
                            handleOpenStack('etc');
                        }}
                    >
                        <EtcInput />
                    </div>
                </_skillBoxWrapper>
            </_skillBox>
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

export default Skill;
