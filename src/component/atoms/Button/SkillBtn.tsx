import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface SkillBtnStyle {
    size: string;
}

interface SkillBtnProps extends SkillBtnStyle {
    children: ReactNode;
    className: string;
    onClick: () => void;
}

const SkillBtn = ({ className, children, ...rest }: SkillBtnProps): ReactElement => {
    return (
        <>
            <_styledBtn className={className} {...rest}>
                <p>{children}</p>
            </_styledBtn>
        </>
    );
};
const _styledBtn = styled.button<SkillBtnStyle>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    height: ${(props) => (props.size === 'big' ? '100px' : '30px')};
    width: ${(props) => (props.size === 'big' ? '100px' : '30px')};
    background-color: black;
`;

export default SkillBtn;
