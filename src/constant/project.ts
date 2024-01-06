import portfoiloImg from 'assets/portfoilo-main.png';
import doonggImg from 'assets/doongg.png';
import jinchaImg from 'assets/jincha.png';
import syosImg from 'assets/syos.png';

interface Props {
    position: string;
    img: string;
    name: string;
    isGroup: boolean;
    content: string;
    stack: string[];
}

export const PROJECT = {
    SYOS: {
        position: 'up',
        name: 'SYOS',
        img: syosImg,
        isGroup: true,
        content:
            '데스크 셋업을 공유하고 추천받는 프로젝트입니다. 풀스택으로 진행하여 백엔드와 프론트엔드의 연결 과정을 경험하였습니다.',
        stack: ['Ejs', 'Express.js', 'Sequelize', 'MySQL', 'Amazon S3'],
    },
    JinCha: {
        position: 'down',
        name: 'JinCha',
        img: jinchaImg,
        isGroup: false,
        content: '기술 학습 목적으로 진행한 프로젝트입니다. 짧은 시간안에 다양한 경험을 하는 것을 목표로 하였습니다.',
        stack: ['React', 'Styled-component', 'Redux-Toolkit'],
    },
    DoongG: {
        position: 'up',
        name: 'DoongG',
        img: doonggImg,
        isGroup: true,
        content:
            '자취생들을 위한 종합 플랫폼 프로젝트입니다. 카카오API를 활용하여 지도와 주소등 다양한 기능을 경험해봤습니다.',
        stack: ['React', 'TypeScript', 'Styled-component', 'Zustand'],
    },
    Portfoilo: {
        position: 'down',
        name: 'Portfoilo',
        img: portfoiloImg,
        isGroup: true,
        content:
            '프론트엔드 취업을 위한 포트폴리오 프로젝트입니다. full-page-scroll, observer를 통해 인터렉션 페이지를 개발 하였습니다.',
        stack: ['React', 'TypeScript', 'Styled-component', 'Recoil'],
    },
};
