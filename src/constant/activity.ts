export interface ActivityTypes {
    position: string;
    subject: string;
    period: string;
    title: string;
    content: string[];
}

export const BOOTCAMP: ActivityTypes = {
    position: 'left',
    subject: 'Boot Camp',
    period: '2023.07.02 ~ 2023.12.22',
    title: '포스코 x 코딩온 풀스택 웹 개발자 과정',
    content: [
        '웹 프로그래밍(HTML,CSS,JavaScript) 기초 및 심화 학습',
        'React의 다양한 훅 사용 및 전역 상태 관리 경험',
        'Express.js와 MySQL를 활용해 REST API 서버구현 방법 학습',
        '3번의 팀 프로젝트를 진행하며 다양한 협업 능력 경험',
    ],
};

export const BLOG: ActivityTypes = {
    position: 'right',
    subject: 'Blog',
    period: '2022.12.06 ~ 진행중',
    title: 'Tistroy',
    content: [
        '프로젝트를 진행하며 겪은 경험들을 회고록에 기록',
        '새로운 기능 및 개념들을 정리해 카테고리별로 정리',
        '알고리즘 풀이 과정을 작성',
    ],
};

export const STUDY: ActivityTypes = {
    position: 'left',
    subject: 'Study',
    period: '2022.12.06 ~ 2023.06.05',
    title: '알고리즘 스터디',
    content: [
        '백준 및 프로그래머스의 알고리즘 문제를 일주일에 약 6문제를 풀고 서로 어떻게 풀었는지 대화하며 공유',
        'stack,queue등 7개의 알고리즘을 배워 약 100문제 푼 경험',
    ],
};
