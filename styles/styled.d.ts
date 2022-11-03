import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakPoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      teal50: string;
      teal100: string;
      teal200: string;
      teal400: string;
      teal500: string;
      teal600: string;
      teal700: string;

      black100: string;
      black200: string;
      black300: string;
      black400: string;
      black500: string;
      black600: string;
      black700: string;
      black800: string;
      black900: string;
      black000: string;

      red500: string;
      red600: string;
      red700: string;

      white000: string;

      blue: string;
    };
    fontSize: {
      size08: string;
      size12: string;
      size15: string;
      size18: string;
      size20: string;
      size24: string;
      size32: string;
    };
  }
}
