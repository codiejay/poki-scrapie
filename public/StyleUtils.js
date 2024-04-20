import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Clashbold';
        src: url('/clashbold.ttf');
      }
      @font-face {
        font-family: 'Clashmid';
        src: url('/clashmid.ttf');
      }
      @font-face {
        font-family: 'Clashreg';
        src: url('/clashreg.ttf');
      }
      `}
  />
);
