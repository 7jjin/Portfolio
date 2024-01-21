import portfoiloImg from 'assets/portfoilo-main.png';
import doonggImg from 'assets/doongg.png';
import jinchaImg from 'assets/jincha.png';
import syosImg from 'assets/syos.png';

// JinCha 동영상
import darkmode_JC from 'assets/JinCha/JinCha_darkmode.mp4';
import gerneFilter_JC from 'assets/JinCha/JinCha_Gernefilter.mp4';
import login_JC from 'assets/JinCha/JinCha_Login.mp4';
import selectMode_JC from 'assets/JinCha/JinCha_SelectMode.mp4';

// Portfoilo 동영상
import mainPage_PF from 'assets/Portfoilo/mainPage.mp4';
import fullPageScroll_PF from 'assets/Portfoilo/FullPageScroll.mp4';
import skillPage_PF from 'assets/Portfoilo/skillPage.mp4';
import email_PF from 'assets/Portfoilo/Email.mp4';

// Syos 동영상
import boardEdit_SY from 'assets/SYOS/syos-board-edit.mp4';
import boardDelete_SY from 'assets/SYOS/syos-board-delete.mp4';
import boardWrite_SY from 'assets/SYOS/syos-board-write.mp4';
import recommand_SY from 'assets/SYOS/syos-recommend.mp4';

// DoonG 동영상
import address_DG from 'assets/DoongG/doongg_address.mp4';
import now_DG from 'assets/DoongG/doongg_now.mp4';
import write_DG from 'assets/DoongG/doongg_write.mp4';

export const PROJECT = {
    SYOS: {
        position: 'up', // hr태그보다 위인지 아래인지 구분
        name: 'SYOS',
        img: syosImg,
        isGroup: true,
        period: '2023.04.05 ~ 2023.05.06',
        member: 4,
        progress: 25,
        deployLink: 'https://port-0-syos-2rrqq2blmiwyaxo.sel5.cloudtype.app',
        repoLink: 'https://githob.com/7jjin/SYOS',
        subContent:
            '데스크 셋업을 공유하고 추천받는 프로젝트입니다. 풀스택으로 진행하여 백엔드와 프론트엔드의 연결 과정을 경험하였습니다.',
        mainContent: [
            'SYOS는 "Share Your Own Space"의 약자로 나만의 데스크 셋업 공간과 정보를 공유하고 데스크 셋업을 추천받을 수 있는 웹사이트입니다. 웹캠을 이용한 데스크 셋업을 추천 받을 수 있으며, 게시판에서 서로의 데스크 셋업을 공유하고 추천받을 수 있습니다.',
            '웹 개발에 모든 과정을 참여하고 싶어 진행 했으며, 웹의 전반적인 아키텍처와 데이터 흐름에 대한 이해를 경험했습니다.',
        ],
        functionList: [
            'Teachable Machine을 활용한 머신러닝을 통해 사용자에게 알맞은 책상 분위기를 추천해주는 기능 구현',
            '게시판 작성 할 때, 이미지 안에 상품 클릭 시 상품 정보를 입력할 수 있는 란을 생성하고 이 좌표를  이미지 크기에 맞게 %로 변환하여 상품 정보와 좌표를 DB에 저장하는 기능 구현',
            'event.stopPropagation() 메소드를 활용하여 상품 정보란 생성 후 이벤트 버블링 되는 현상을 막음',
            '제품 정보들을 삭제할 때마다 바뀐 배열의 길이만큼 반복문을 활용해 id값들을 재할당 해주는 기능 구현',
            'config.json 파일을 수정하여 MySQL과 연동하는 작업 후 model 생성하여 데이터 베이스에 반영하는 작업 수행',
            'DB의 성능 저하 문제를 해결하기 위해 AWS S3를 이용하여 이미지 저장함',
            'Sequelize를 활용하여 CRUD 작업 수행',
            'UX를 고려해 모바일 반응형 디자인 구현',
        ],
        stack: ['JavaScript', 'Express.js', 'Sequelize', 'MySQL', 'Amazon S3'],
        video: [boardWrite_SY, boardEdit_SY, boardDelete_SY, recommand_SY] as string[],
    },
    JinCha: {
        position: 'down',
        name: 'JinCha',
        img: jinchaImg,
        isGroup: false,
        period: '2023.10.11 ~ 2023.10.18',
        member: 1,
        progress: 50,
        deployLink: 'https://www.mymovieapp.store',
        repoLink: 'https://github.com/7jjin/My-Movie',
        subContent:
            'JinCha는 왓챠를 토대로 만든 영화 사이트입니다. 기획부터 배포까지 모든 개발 단계를 경험하며 성장하는 것을 목표로 하였습니다.',
        mainContent: [
            'React와 Styled-component를 사용한 첫번째 프로젝트이며, 다양한 hook을 경험하는 것과 새로운 기능구현을 목표로 하였습니다.',
            '피그마로 디자인 프로토타입을 구현하며 UX 향상을 고민하였습니다. 또한 Vercel과 Amazon Route 53을 사용하여 배포하였습니다.',
        ],
        functionList: [
            '전역 상태 관리는 Redux-Toolkit을 이용하여 일별/주간 박스오피스를 관리하고 useEffect의 의존성 배열로 날짜를 넣어 기간에 맞게 업데이트 구현',
            '영화진흥위원회 API와 한국 영화 데이터베이스 API를 비동기 처리를 위해 Promise.all() 메소드 사용',
            '영화 포스터 클릭 시 영화 제목과 개봉일을 useParams로 넘겨 영화 상세 페이지 구현',
            'React-hook-form을 이용하여 실시간으로 로그인/회원가입 폼을 검증 기능 구현, localStorage에 로그인 정보를 저장하여 로그인 유지 기능 구현',
            'Amazon Route 53을 사용하여 구매한 도메인과 EC2 IP를 연결, DNS 설정을 구성하여 웹 사이트의 도메인 이름 시스템 관리',
            'styled-component의 Global Style을 이용하여 다크모드/라이트모드 기능 구현',
            'UX를 고려해 모바일 반응형 디자인 구현',
        ],
        content: '기술 학습 목적으로 진행한 프로젝트입니다. 짧은 시간안에 다양한 경험을 하는 것을 목표로 하였습니다.',
        stack: ['React', 'Styled-components', 'Redux-Toolkit', 'Vercel', 'Amazon Route 53'],
        video: [darkmode_JC, gerneFilter_JC, login_JC, selectMode_JC] as string[],
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
            '자취생들을 위한 종합 플랫폼입니다. 프론트엔드를 담당하였으며, 카카오 맵API를 활용해 자취방 리뷰 서비스를 개발하였습니다.',
        mainContent: [
            '"DoongG"는 이제 막 사회로 나간 사회초년생들에게 따뜻한 쉼터가 될 수 있도록 여러 정보를 제공하는 서비스입니다.',
            '돈이 부족한 자취생을 위한 "핫딜 쇼핑몰", 자취 상식을 서로 공유할 수 있는 "정보 공유 게시판", 실패없는 자취방을 구하기 위한 "자취방 리뷰 페이지" 등 자취생을 타겟으로 서비스를 개발했습니다.',
        ],
        functionList: [
            '제품 클릭 시 서버측과 통신하기 위해 모달 컴포넌트에 ProductId를 Props로 전달하여 Axios요청인자로 보냄.',
            '카카오 API를 활용하여 지도 불러오기, 현재 위치 마커 표시, 지도 축소 시 마커 클러스터러로 나타내기 및 현재 지도에 보이는 마커들의 정보만 나타내는 기능 구현.',
            '카카오 주소 API를 통해 주소 입력 기능 구현 및 입력 주소를 변수로 담아 해당 위치로 이동하는 기능 구현',
            '현재 사용자가 보고 있는 지도의 위치를 관리하기 위해 전역 상태 관리인 Zustand를 사용',
        ],
        content:
            '자취생들을 위한 종합 플랫폼 프로젝트입니다. 카카오API를 활용하여 지도와 주소등 다양한 기능을 경험해봤습니다.',
        stack: ['React', 'TypeScript', 'Styled-components', 'Zustand'],
        video: [address_DG, now_DG, write_DG] as string[],
    },
    Portfoilo: {
        position: 'down',
        name: 'Portfoilo',
        img: portfoiloImg,
        isGroup: false,
        period: '2023.12.17 ~ 2024.01.17',
        member: 1,
        progress: 100,
        deployLink: 'https://github.com/7jjin/Portfolio',
        repoLink: 'https://github.com/7jjin/Portfolio',
        subContent:
            '프론트엔드 취업을 위한 포트폴리오 프로젝트입니다. 새로운 기능을 경험하는 것과 코드의 최적화를 목표로 프로젝트에 임했습니다.',
        mainContent: [
            '내 정보를 한눈에 보여주면 좋겠다고 생각하여 만든 포트폴리오 프로젝트입니다. Intersection-Oberver과 마우스 이벤트를 사용하여 인터렉션 페이지를 만들었습니다.',
            '개인 프로젝트지만 컨벤션 규칙을 지킬려고 노력했으며, 재사용이 가능한 컴포넌트를 만들어 중복되는 코드를 최대한 줄이려고 노력했습니다. 이후 리팩토링을 진행하여 최적화 진행도 할 예정입니다.',
        ],
        functionList: [
            '모달을 띄울 때 불필요한 렌더링을 최소화 하기위해 React-Portal을 사용하여 모달을 독립적으로 관리',
            '조건문을 사용하여 Window.innerHeight와 scroll의 높이를 가지고 Full Page Scroll 기능을 구현',
            '입력 정보를 React-hook-form을 활용하여 효율적으로 form 관리 했으며, email.js를 이용하여 메일 전송이 가능하도록 구현',
            '옵저버를 이용하여 Skill 섹션이 관측될 때마다 애니메이션이 작동하도록 구현 ',
            'GSAP 라이브러리를 사용해 타임라인 기반의 애니메이션을 구현',
            'setTimeout() 함수를 사용해 타이핑 느낌의 애니메이션 효과를 구현',
        ],
        content:
            '프론트엔드 취업을 위한 포트폴리오 프로젝트입니다. full-page-scroll, observer를 통해 인터렉션 페이지를 개발 하였습니다.',
        stack: ['React', 'TypeScript', 'Styled-components', 'Recoil'],
        video: [mainPage_PF, fullPageScroll_PF, skillPage_PF, email_PF] as string[],
    },
};
