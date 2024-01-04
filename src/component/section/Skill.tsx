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
        resetStack();
        // 초기값 -> frontend open
        if (stackType === '' || stackType === 'frontend') {
            setOpenStack({ backend: false, etc: false, frontend: true });
            setLastOpenStack('frontend');
        } else if (stackType === 'backend') {
            setOpenStack({ frontend: false, etc: false, backend: true });
            setLastOpenStack('backend');
        } else if (stackType === 'etc') {
            setOpenStack({ frontend: false, backend: false, etc: true });
            setLastOpenStack('etc');
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
    align-items: center;
    padding-bottom: 100px;
    width: 100%;
    height: 100%;
`;

export default Skill;
