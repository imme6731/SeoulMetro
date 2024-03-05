import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const pcBaseLayoutSize = {
  padding: "0 250px",
};

export const pcInnerLayoutSize = {
  padding: "0 300px",
};

export const fontSize = {
  pcTitle: "50px",
  pcMenu: "18px",
  pcDesc: "16px",
};

export const GlobalStyled = createGlobalStyle`
${reset}
body{
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #ffff;
    }
`;

export default GlobalStyled;
