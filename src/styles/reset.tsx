import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const gloablStyle = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
  ${emotionReset}
  input {
    all: unset;
    box-sizing: border-box;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #282828;
  }

  @keyframes move-in {
    from {
      transform: translateY(-8px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes move-out {
    from {
      transform: translateY(0);
      opacity: 0.1;
    }

    to {
      transform: translateY(8px);
      opacity: 0;
    }
  }

  ::view-transition-group(gallery) {
    height: auto;
  }

  ::view-transition-old(gallery) {
    animation: 0.4s ease-in both move-out;
    transform-origin: 50% 0;
  }

  ::view-transition-new(gallery) {
    animation: 0.4s ease-in both move-in;
    transform-origin: 50% 0;
  }
`;

export default gloablStyle;
