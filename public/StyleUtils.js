import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Heading';
        src: url('/fontTan.ttf');
      }
      @font-face {
        font-family: 'Paragraph';
        src: url('/fontUsa.ttf');
      }
      `}
  />
);
