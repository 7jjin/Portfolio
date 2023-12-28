import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface SkillBtnStyle {
    size: string;
}

interface SkillBtnProps extends SkillBtnStyle {
    children: ReactNode;
    className: string;
}

const SkillBtn = ({ className, children, ...rest }: SkillBtnProps): ReactElement => {
    return (
        <>
            <_styledBtn className={className} {...rest} />
            <p>{children}</p>
        </>
    );
};

const _styledBtn = styled.input<SkillBtnStyle>`
    position: relative;
    width: ${(props) => (props.size === 'big' ? '100px' : '50px')};
    height: ${(props) => (props.size === 'big' ? '100px' : '50px')};
    border-radius: 50%;
    color: white;
    background-color: black;
    border: none;
    cursor: pointer;

    position: absolute;
    top: 0;
    left: 0;

    &:focus {
        outline: none;
    }

    & + p {
        position: relative;
        z-index: 1;
        color: white;
        text-align: center;
        line-height: ${(props) => (props.size === 'big' ? '100px' : '50px')};
    }
`;

export default SkillBtn;
