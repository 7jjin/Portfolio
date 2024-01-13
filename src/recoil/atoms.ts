import React from 'react';
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

export const introPageRefState = atom({
    key: 'introPageRefState',
    default: null as HTMLDivElement | null,
});
export const projectPageRefState = atom({
    key: 'projectPageRefState',
    default: null as HTMLDivElement | null,
});
export const skillPageRefState = atom({
    key: 'skillPageRefState',
    default: null as HTMLDivElement | null,
});
export const activityPageRefState = atom({
    key: 'activityPageRefState',
    default: null as HTMLDivElement | null,
});
export const contactPageRefState = atom({
    key: 'contactPageRefState',
    default: null as HTMLDivElement | null,
});
