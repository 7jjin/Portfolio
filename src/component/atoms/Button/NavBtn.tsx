import React, { ReactElement } from 'react';
import styled from 'styled-components';
import '@fontsource/gothic-a1/800.css';

interface NavBtnStyle {
    color: string;
    active: boolean;
}
interface NavBtnProps extends NavBtnStyle {
    children: React.ReactNode;
    className: string;
    onClick: () => void;
}

const NavBtn = ({ className, children, active, ...rest }: NavBtnProps): ReactElement => {
    return (
        <>
            <_styledBtn className={className} active={active} {...rest}>
                <p>{children}</p>
            </_styledBtn>
        </>
    );
};

const _styledBtn = styled.button<NavBtnStyle>`
    position: relative;
    right: ${(props) => (props.active ? '0px' : '-13px')};
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.color};
    width: 50px;
    height: 130px;
    border-radius: 10px 0px 0px 10px;
    font-weight: 600;
    & > p {
        font-weight: 800;
        transform: rotate(-90deg);
    }
`;
export default NavBtn;
