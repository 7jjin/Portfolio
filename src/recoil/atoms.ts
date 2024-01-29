import { atom } from 'recoil';

// navBar 현재 상태
export const activeNavBtnState = atom({
    key: 'activeNavBtn',
    default: 'About',
});

// 현재 열린 스택
export const openStackState = atom({
    key: 'openStackState',
    default: {
        frontend: false,
        backend: false,
        etc: false,
    },
});

// 마지막에 열렸던 스택
export const lastOpenStackState = atom({
    key: 'lastOpenStackState',
    default: '',
});

// navbar-button 클릭 시 해당 영역으로 이동
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
