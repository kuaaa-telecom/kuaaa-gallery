import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const gloablStyle = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
  ${emotionReset}
  input {
    all: unset;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #282828;
  }
`;

export default gloablStyle;
