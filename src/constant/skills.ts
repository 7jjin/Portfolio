export interface SkillItem {
    stack: string;
    name: string;
    value: number;
    content: string[];
}

export const FRONTEND: SkillItem[] = [
    {
        stack: 'frontend',
        name: 'React',
        value: 60,
        content: ['재사용이 가능한 컴포넌트 단위로 개발하고, CSR을 경험해 봤어요'],
    },
    {
        stack: 'frontend',
        name: 'TypeScript',
        value: 40,
        content: [
            'JS를 정적 타입으로 개발하여 서비스의 안정성을 향상시켰어요.',
            'Interface로 타입을 지정해서 팀 프로젝트를 한 경험이 있어요.',
        ],
    },
    {
        stack: 'frontend',
        name: 'Redux-toolkit',
        value: 40,
        content: ['Redux-toolkit을 사용하여 전역으로 상태관리를 해봤어요.'],
    },
    {
        stack: 'frontend',
        name: 'Recoil',
        value: 40,
        content: ['Recoil을 사용하여 전역으로 상태관리를 해봤어요.'],
    },
    {
        stack: 'frontend',
        name: 'Zustand',
        value: 40,
        content: ['Zustand을 사용하여 전역으로 상태관리를 해봤어요.'],
    },
    {
        stack: 'frontend',
        name: 'Styled-component',
        value: 60,
        content: [
            'Styled-components를 사용한 CSS-in-JS 라이브러리 사용 경험이 있어요.',
            'ThemeProvider를 활용해서 다크모드를 구현한 경험이 있어요',
        ],
    },
];

export const BACKEND: SkillItem[] = [
    {
        stack: 'backend',
        name: 'Node.js',
        value: 10,
        content: ['Node.js로 서버를 구축해 봤어요.'],
    },
    {
        stack: 'backend',
        name: 'Express',
        value: 10,
        content: ['Express로 서버를 구축해 봤어요.'],
    },
    {
        stack: 'backend',
        name: 'Socket.io',
        value: 10,
        content: ['Socket.io로 실시간 통신을 구현해봤어요.'],
    },
    {
        stack: 'backend',
        name: 'MySQL',
        value: 10,
        content: ['MySQL로 DB를 관리해봤어요.'],
    },
    {
        stack: 'backend',
        name: 'Sequelize',
        value: 10,
        content: ['Sezuelize로 간단한 CRUD 작업을 해봤어요.'],
    },
];

export const ETC: SkillItem[] = [
    {
        stack: 'etc',
        name: 'Figma',
        value: 60,
        content: ['Figma로 프로젝트를 기획하고 프로토타입을 만들어 봤어요.'],
    },
    {
        stack: 'etc',
        name: 'Postman',
        value: 40,
        content: ['Postman으로 RESTful API 테스트를 해봤어요.'],
    },
    {
        stack: 'etc',
        name: 'AWS',
        value: 10,
        content: ['AWS에서 EC2, S3, Route53, RDS를 활용한 경험이 있어요.'],
    },
    {
        stack: 'etc',
        name: 'Teachable Machine',
        value: 10,
        content: ['Teachable Machine으로 AI 모델 학습을 시켜본 경험이 있어요.'],
    },
];
