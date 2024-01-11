import Activity from 'component/section/Activity';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { activityPageRefState } from 'recoil/atoms';
import styled from 'styled-components';

const ActivityPage = () => {
    const [ref, setRef] = useRecoilState(activityPageRefState);
    const activityPage = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (activityPage) {
            setRef(activityPage.current);
        }
    }, [activityPage]);
    return (
        <>
            <_Wrapper id="ActivityPage" ref={activityPage}>
                <Activity />
            </_Wrapper>
        </>
    );
};

const _Wrapper = styled.div`
    display: flex;
    height: 100vh;
`;
export default ActivityPage;
