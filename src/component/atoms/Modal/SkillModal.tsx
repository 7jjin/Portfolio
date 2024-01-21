import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { openStackState } from '../../../recoil/atoms';
import { useEffect } from 'react';

interface Props {
    isboolean: boolean;
    name: string;
    value: number;
    content: string[];
}

const SkillModal: React.FC<Props> = ({ isboolean, name, value, content }) => {
    const [openStack] = useRecoilState(openStackState);

    return (
        <>
            <_stacakModal>
                <_modalName className="modalName">{name}</_modalName>
                {content.map((item) => (
                    <>
                        <_modalContent className="modalContent">{item}</_modalContent>
                    </>
                ))}
            </_stacakModal>
        </>
    );
};
const _stacakModal = styled.div`
    border-radius: 5px;
    background-color: white;
    line-height: initial;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 24px;
    padding: 1rem;

    line-height: 0.5;
    top: 360px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 720px;
    position: relative;
`;
const _modalName = styled.span`
    font-size: 1.4rem;
    background-color: rgb(204 204 204 / 47%);
    border-radius: 12px;
    padding: 12px 14px;
    margin-bottom: 1rem;
`;
const _modalContent = styled.span`
    padding-top: 0.5rem;
    padding-left: 7px;
    line-height: 1.25;
    font-size: 1.3rem;
`;

export default SkillModal;
