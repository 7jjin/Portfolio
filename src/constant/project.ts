import portfoiloImg from 'assets/portfoilo-main.png';
import doonggImg from 'assets/doongg.png';
import jinchaImg from 'assets/jincha.png';
import syosImg from 'assets/syos.png';

export const PROJECT = {
    SYOS: {
        position: 'up',
        name: 'SYOS',
        img: syosImg,
        isGroup: true,
        period: '2023.04.05 ~ 2023.05.06',
        member: 4,
        progress: 25,
        deployLink: 'https://githob.com/7jjin/SYOS',
        repoLink: 'https://githob.com/7jjin/SYOS',
        subContent:
            '데스크 셋업을 공유하고 추천받는 프로젝트입니다. 풀스택으로 진행하여 백엔드와 프론트엔드의 연결 과정을 경험하였습니다.',
        mainContent: [
            '부트캠프의 단편적인 요구사항만 해결하는 과제를 수행하며, 개인의 성장에 의구심을 느껴진행한 프로젝트입니다. 요구사항 및 기능정의 부터 구현까지 스스로 진행하는 것을 목표로 프로젝트를 진행하였습니다.',
            '노션으로 프로젝트를 관리하며 사용자 요구사항 및 기능을 정의하였습니다. 또한 피그마로 디자인 프로토타입을 구현하며 UX 향상을 고민하였습니다.',
        ],
        functionList: [
            'Teachable Machine을 활용한 머신러닝을 통해 사용자에게 알맞은 책상 분위기를 추천해주는 기능 구현',
            '이미지 안에 상품 클릭 시 상품 정보를 입력할 수 있는 란을 생성하고 이 좌표를  이미지 크기에 맞게 %로 변환하여 상품 정보와 좌표를 DB에 저장하는 기능 구현',
            'event.stopPropagation() 메소드를 활용하여 상품 정보란 생성 후 이벤트 버블링 되는 현상을 막는 기능 구현',
            '제품 정보들을 삭제할 때마다 바뀐 배열의 길이만큼 반복문을 활용해 id값들을 재할당 해주는 기능 구현',
            'config.json 파일을 수정하여 MySQL과 연동하는 작업 후 model 생성하여 데이터 베이스에 반영하는 작업 수행',
            'Amazon S3에 이미지를 저장하고 불러오는 작업 수행',
            'Sequelize를 활용하여 CRUD 작업 수행',
        ],
        stack: ['Ejs', 'Express.js', 'Sequelize', 'MySQL', 'Amazon S3'],
    },
    JinCha: {
        position: 'down',
        name: 'JinCha',
        img: jinchaImg,
        isGroup: false,
        period: '2023.04.05 ~ 2023.05.06',
        member: 1,
        progress: 50,
        deployLink: 'https://github.com/7jjin/My-Movie/tree/main/my-react-app',
        repoLink: 'https://github.com/7jjin/My-Movie/tree/main/my-react-app',
        subContent:
            '데스크 셋업을 공유하고 추천받는 프로젝트입니다. 풀스택으로 진행하여 백엔드와 프론트엔드의 연결 과정을 경험하였습니다.',
        mainContent: [
            '부트캠프의 단편적인 요구사항만 해결하는 과제를 수행하며, 개인의 성장에 의구심을 느껴진행한 프로젝트입니다. 요구사항 및 기능정의 부터 구현까지 스스로 진행하는 것을 목표로 프로젝트를 진행하였습니다.',
            '노션으로 프로젝트를 관리하며 사용자 요구사항 및 기능을 정의하였습니다. 또한 피그마로 디자인 프로토타입을 구현하며 UX 향상을 고민하였습니다.',
        ],
        functionList: [
            'styled-component의 Global Style을 이용하여 다크모드/라이트모드 기능 구현',
            '전역 상태 관리는 Redux-Toolkit을 이용하여 일별/주간 박스오피스를 관리하고 useEffect의 의존성 배열로 날짜를 넣어 기간에 맞게 업데이트 구현',
            'React-hook-form을 이용하여 실시간으로 로그인/회원가입 폼을 검증 기능 구현, localStorage에 로그인 정보를 저장하여 로그인 유지 기능 구현',
            '영화 포스터 클릭 시 영화 제목과 개봉일을 useParams로 넘겨 영화 상세 페이지 구현',
            '영화진흥위원회 API와 한국 영화 데이터베이스 API를 비동기 처리를 위해 Promise.all() 메소드 사용',
        ],
        content: '기술 학습 목적으로 진행한 프로젝트입니다. 짧은 시간안에 다양한 경험을 하는 것을 목표로 하였습니다.',
        stack: ['React', 'Styled-component', 'Redux-Toolkit'],
    },
    DoongG: {
        position: 'up',
        name: 'DoongG',
        img: doonggImg,
        isGroup: true,
        period: '2023.04.05 ~ 2023.05.06',
        member: 4,
        progress: 75,
        deployLink: 'https://doongg.site',
        repoLink: 'https://github.com/DoongG/DoongG-Client',
        subContent:
            '데스크 셋업을 공유하고 추천받는 프로젝트입니다. 풀스택으로 진행하여 백엔드와 프론트엔드의 연결 과정을 경험하였습니다.',
        mainContent: [
            '부트캠프의 단편적인 요구사항만 해결하는 과제를 수행하며, 개인의 성장에 의구심을 느껴진행한 프로젝트입니다. 요구사항 및 기능정의 부터 구현까지 스스로 진행하는 것을 목표로 프로젝트를 진행하였습니다.',
            '노션으로 프로젝트를 관리하며 사용자 요구사항 및 기능을 정의하였습니다. 또한 피그마로 디자인 프로토타입을 구현하며 UX 향상을 고민하였습니다.',
        ],
        functionList: [
            '제품 클릭 시 제품 상세 모달 컴포넌트에 ProductId를  React Props를 이용하여 전달하고 서버측과 통신하여 알맞은 데이터 정보 추출',
            '웹 페이지를 더 생동감 있게 표현하기 위해 애니메이션 기능 추가',
            '카카오 API를 활용하여 지도 불러오기, 현재 위치 마커 표시, 지도 축소 시 마커 클러스터러로 나타내기 및 현재 지도에 보이는 마커들의 정보만 나타내는 기능 구현.',
            '카카오 주소 API를 통해 주소 입력 기능 구현 및 입력 주소를 변수로 담아 해당 위치로 이동하는 기능 구현',
            '전역 상태 관리는 Zustand를 이용하여 현재 사용자가 보고 있는 지도의 위치를 관리',
        ],
        content:
            '자취생들을 위한 종합 플랫폼 프로젝트입니다. 카카오API를 활용하여 지도와 주소등 다양한 기능을 경험해봤습니다.',
        stack: ['React', 'TypeScript', 'Styled-component', 'Zustand'],
    },
    Portfoilo: {
        position: 'down',
        name: 'Portfoilo',
        img: portfoiloImg,
        isGroup: true,
        period: '2023.04.05 ~ 2023.05.06',
        member: 4,
        progress: 100,
        deployLink: 'https://github.com/7jjin/Portfolio',
        repoLink: 'https://github.com/7jjin/Portfolio',
        subContent:
            '데스크 셋업을 공유하고 추천받는 프로젝트입니다. 풀스택으로 진행하여 백엔드와 프론트엔드의 연결 과정을 경험하였습니다.',
        mainContent: [
            '부트캠프의 단편적인 요구사항만 해결하는 과제를 수행하며, 개인의 성장에 의구심을 느껴진행한 프로젝트입니다. 요구사항 및 기능정의 부터 구현까지 스스로 진행하는 것을 목표로 프로젝트를 진행하였습니다.',
            '노션으로 프로젝트를 관리하며 사용자 요구사항 및 기능을 정의하였습니다. 또한 피그마로 디자인 프로토타입을 구현하며 UX 향상을 고민하였습니다.',
        ],
        functionList: [
            'Teachable Machine을 활용한 머신러닝을 통해 사용자에게 알맞은 책상 분위기를 추천해주는 기능 구현',
            '이미지 안에 상품 클릭 시 상품 정보를 입력할 수 있는 란을 생성하고 이 좌표를  이미지 크기에 맞게 %로 변환하여 상품 정보와 좌표를 DB에 저장하는 기능 구현',
            'event.stopPropagation() 메소드를 활용하여 상품 정보란 생성 후 이벤트 버블링 되는 현상을 막는 기능 구현',
            '제품 정보들을 삭제할 때마다 바뀐 배열의 길이만큼 반복문을 활용해 id값들을 재할당 해주는 기능 구현',
        ],
        content:
            '프론트엔드 취업을 위한 포트폴리오 프로젝트입니다. full-page-scroll, observer를 통해 인터렉션 페이지를 개발 하였습니다.',
        stack: ['React', 'TypeScript', 'Styled-component', 'Recoil'],
    },
};
