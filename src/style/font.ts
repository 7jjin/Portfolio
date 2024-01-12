import { createGlobalStyle } from 'styled-components';
import title from 'fonts/넥슨-카트-고딕-Bold.woff';
import title2 from 'fonts/Cafe24Ssurround-v2.0.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: "title";
        src: local("title"),
        url(${title}) format('woff');
        font-weight: 500;
    }
    @font-face {
        font-family: "title2";
        src: local("title2"),
        url(${title2}) format('woff');
        font-weight: normal;
    }
`;
