import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { openStackState } from '../../../recoil/atoms';
import { useEffect } from 'react';

interface Props {
    isboolean: boolean;
    name: string;
    value: number;
    content: string;
}

const SkillModal: React.FC<Props> = ({ isboolean, name, value, content }) => {
    const [openStack] = useRecoilState(openStackState);

    return (
        <>
            <_stacakModal>
                <_modalName className="modalName">{name}</_modalName>
                <_modalContent className="modalContent">{content}</_modalContent>
            </_stacakModal>
        </>
    );
};
const _stacakModal = styled.div`
    border-radius: 5px;
    background-color: white;
    line-height: initial;
    display: flex;
    align-items: center;
    justify-content: left;
    box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 24px;
    padding: 5px 10px;
    line-height: 0.5;
    top: 280px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 71px;
    position: relative;
`;
const _modalName = styled.span`
    position: absolute;
    font-size: 1.2rem;
    top: 10px;
    left: 10px;
    background-color: rgb(204 204 204 / 47%);
    border-radius: 12px;
    padding: 7px 10px;
`;
const _modalContent = styled.span`
    position: absolute;
    padding-left: 7px;
    bottom: 7px;
    line-height: 1.25;
    font-size: 1rem;
`;

export default SkillModal;
