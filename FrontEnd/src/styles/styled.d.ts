import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      blueSchema: {
        light: string;
        default: string;
        dark: string;
      };
      greenSchema: {
        light: string;
        default: string;
        dark: string;
      };

      background: string;
      foreground: string;
      primary: string;
      secondary: string;
      muted: string;
      border: string;
      danger: string;
      white1: string;
      white2: string;
      white3: string;
    };

    font: {
      size: {
        textXs: string;
        textSm: string;
        textBase: string;
        textLg: string;
        textXl: string;
        text2Xl: string;
        text3Xl: string;
        text4Xl: string;
      };
      weight: {
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
      };
      colors: {
        mainText: string;
        secondaryText: string;
        gradientText: string;
        whiteText: string;
        muted: string;
        placeholder: string;
      };
    };
    breakpoint: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
