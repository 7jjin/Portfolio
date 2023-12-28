import styled from 'styled-components';
import nodeJSImg from '../../../assets/nodeJS.png';
import expressImg from '../../../assets/express.png';
import socketImg from '../../../assets/socket.png';
import mysqlImg from '../../../assets/mysql.png';
import sequelizeImg from '../../../assets/sequelize.png';

const BackendInput = () => {
    return (
        <>
            <_menuOpen type="checkbox" className="menuOpen" name="menuOpen" id="backend" />
            <_menuOpenButton className="menuOpenButton" htmlFor="backend">
                Backend
            </_menuOpenButton>
            <_menuItem className="menuItem node.js">
                <img src={nodeJSImg} alt="" />
            </_menuItem>
            <_menuItem className="menuItem Express">
                <img src={expressImg} alt="" />
            </_menuItem>
            <_menuItem className="menuItem Socket.io">
                <img src={socketImg} alt="" />{' '}
            </_menuItem>
            <_menuItem className="menuItem MySQL">
                <img src={mysqlImg} alt="" />{' '}
            </_menuItem>
            <_menuItem className="menuItem Sequelize">
                <img src={sequelizeImg} alt="" />{' '}
            </_menuItem>
        </>
    );
};

const _menuItem = styled.a`
    background: #fff80b;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    margin-left: -40px;
    position: absolute;
    color: #ffffff;
    text-align: center;
    line-height: 80px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: -webkit-transform ease-out 200ms;
    transition: -webkit-transform ease-out 200ms;
    transition: transform ease-out 200ms;
    transition:
        transform ease-out 200ms,
        -webkit-transform ease-out 200ms;
    &:nth-child(3) {
        transition-duration: 180ms;
    }
    &:nth-child(4) {
        transition-duration: 180ms;
    }
    &:nth-child(5) {
        transition-duration: 180ms;
    }
    &:nth-child(6) {
        transition-duration: 180ms;
    }
    &:nth-child(7) {
        transition-duration: 180ms;
    }
    &:nth-child(8) {
        transition-duration: 180ms;
    }
    & img {
        object-fit: cover;
        border-radius: 100%;
        width: 100%;
        height: 100%;
    }
`;
const _menuOpenButton = styled.label`
    background: #fff80b;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    margin-left: -40px;
    position: absolute;
    color: black;
    font-weight: 600;
    text-align: center;
    line-height: 80px;
    transform: translate3d(0, 0, 0);
    transition: transform ease-out 200ms;
    z-index: 2;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 400ms;
    transform: scale(1.1, 1.1) translate3d(0, 0, 0);
    cursor: pointer;
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    &:hover {
        transform: scale(1.2, 1.2) translate3d(0, 0, 0);
    }
`;
const _menuOpen = styled.input`
    display: none;
    &:checked + .menuOpenButton {
        transition-timing-function: linear;
        transition-duration: 200ms;
        transform: scale(0.8, 0.8) translate3d(0, 0, 0);
        background: white;
    }
    &:checked ~ .menuItem {
        transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
    }
    &:checked ~ .menuItem:nth-child(3) {
        transition-duration: 180ms;
        transform: translate3d(0.08361px, -104.99997px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(4) {
        transition-duration: 280ms;
        transform: translate3d(90.9466px, -20.47586px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(5) {
        transition-duration: 380ms;
        transform: translate3d(47.9466px, 88.99997px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(6) {
        transition-duration: 480ms;
        transform: translate3d(-50.91639px, 88.99997px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
    &:checked ~ .menuItem:nth-child(7) {
        transition-duration: 580ms;
        transform: translate3d(-90.86291px, -20.47586px, 0);
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    }
`;

export default BackendInput;
