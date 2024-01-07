import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalPortalProps {
    children: ReactNode;
}

const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
    const el: HTMLElement | null = document.getElementById('modal');
    return el && ReactDOM.createPortal(children, el);
};

export default ModalPortal;
