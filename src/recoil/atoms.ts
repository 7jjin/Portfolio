import { atom } from 'recoil';

export const activeNavBtnState = atom({
    key: 'activeNavBtn',
    default: 'About',
});

export const openStackState = atom({
    key: 'openStackState',
    default: {
        frontend: false,
        backend: false,
        etc: false,
    },
});

export const lastOpenStackState = atom({
    key: 'lastOpenStackState',
    default: '',
});
