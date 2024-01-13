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
        '3번의 팀 프로젝트를 진행하며 다양한 협업 능력 경험',
        '반응형 웹에 대한 이해 및 개선 경험',
        'React를 사용한 CSR 어플리케이션 구현',
        'Redux, Redux-ToolKit를 통한 전역 상태 관리',
    ],
};

export const BLOG: ActivityTypes = {
    position: 'right',
    subject: 'Blog',
    period: '2022.12.06 ~ 진행중',
    title: 'Tistroy',
    content: [
        '3번의 팀 프로젝트를 진행하며 다양한 협업 능력 경험',
        '반응형 웹에 대한 이해 및 개선 경험',
        'React를 사용한 CSR 어플리케이션 구현',
        'Redux, Redux-ToolKit를 통한 전역 상태 관리',
    ],
};

export const STUDY: ActivityTypes = {
    position: 'left',
    subject: 'Study',
    period: '2022.12.06 ~ 2023.06.05',
    title: '알고리즘 스터디',
    content: [
        'stack,queue등 7개의 알고리즘을 배워 약 100문제 푼 경험이 있습니다.',
        'stack,queue등 7개의 알고리즘을 배워 약 100문제 푼 경험이 있습니다.',
    ],
};
