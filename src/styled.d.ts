import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      statusBar: string;
      white: string;
      black: string;
      grayDark: string;
      dark: string;
      grayLight: string;
      yellow: string;
      red: string;
      grayScreen: string;
    };
  }
}
