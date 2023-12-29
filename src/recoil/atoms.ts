import { atom } from 'recoil';

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
