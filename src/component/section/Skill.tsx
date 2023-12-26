import styled from 'styled-components';
import SkillBtn from '../atoms/Button/SkillBtn';

const Skill = () => {
    return (
        <>
            <_skillBox>
                <SkillBtn className={'Frontend'} size={'big'} onClick={() => console.log('hi')}>
                    Frontend
                </SkillBtn>
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
    padding-bottom: 70px;
`;

export default Skill;
