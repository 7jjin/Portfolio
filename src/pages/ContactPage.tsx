import Contact from 'component/section/Contact';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { contactPageRefState } from 'recoil/atoms';
import styled from 'styled-components';

const ContactPage = () => {
    const [ref, setRef] = useRecoilState(contactPageRefState);
    const contactPage = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (contactPage) {
            setRef(contactPage.current);
        }
    }, [contactPage]);
    return (
        <>
            <_Wrapper ref={contactPage}>
                <Contact />
            </_Wrapper>
        </>
    );
};
const _Wrapper = styled.div`
    display: flex;
    height: 100vh;
`;
export default ContactPage;
