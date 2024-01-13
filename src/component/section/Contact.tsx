import styled from 'styled-components';

const Contact = () => {
    return (
        <>
            <_contactBox id="contactBox"></_contactBox>
        </>
    );
};
const _contactBox = styled.section`
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
    padding: 3rem 5rem;
`;
export default Contact;
