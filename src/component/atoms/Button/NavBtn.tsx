import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface NavBtnStyle {
    color: string;
}
interface NavBtnProps extends NavBtnStyle {
    children: React.ReactNode;
    className: string;
    onClick: () => void;
}

const NavBtn = ({ className, children, ...rest }: NavBtnProps): ReactElement => {
    return (
        <>
            <_styledBtn className={className} {...rest}>
                <p>{children}</p>
            </_styledBtn>
        </>
    );
};

const _styledBtn = styled.button<NavBtnStyle>`
    position: relative;
    right: -13px;
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
        transform: rotate(-90deg);
    }
`;
export default NavBtn;
