import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface LinkProps {
    name: string;
    img: string;
    link: string;
}

const LinkBtn: React.FC<LinkProps & React.HTMLProps<HTMLAnchorElement>> = ({ img, link, name }) => {
    return (
        <>
            <_styledBtn className={name} href={link} img={img}></_styledBtn>
        </>
    );
};

const _styledBtn = styled.a<{ img: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin: 0px 22px;
    border-radius: 50%;
    color: white;
    opacity: 0;
    background-color: black;
    border: none;
    cursor: pointer;
    background-image: url(${(props) => props.img});
    background-size: cover; // 이미지 크기 조절 방식
`;

export default LinkBtn;
