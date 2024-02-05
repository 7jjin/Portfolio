import githubImg from 'assets/github.webp';
import tistoryImg from 'assets/tistory.webp';

interface Link {
    name: string;
    img: string; // 이미지의 타입은 적절한 것으로 변경하세요
    link: string;
}

export const LINK: Link[] = [
    {
        name: 'github',
        img: githubImg,
        link: 'https://github.com/7jjin',
    },
    {
        name: 'tistory',
        img: tistoryImg,
        link: 'https://jin99.tistory.com',
    },
];
