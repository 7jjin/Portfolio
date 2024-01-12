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
        'Stlyed-components를 사용한 CSS-in-JS 라이브러리 사용 경험',
        'TypeScript를 통한 정적언어 사용 경험',
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
        'Stlyed-components를 사용한 CSS-in-JS 라이브러리 사용 경험',
        'TypeScript를 통한 정적언어 사용 경험',
    ],
};
