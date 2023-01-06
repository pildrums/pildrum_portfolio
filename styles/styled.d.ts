import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    red: string;
    black: {
      veryDark: string;
      darker: string;
      lighter: string;
    };
    white: {
      darker: string;
      lighter: string;
    };
    green: {
      lighter: string;
      darker: string;
    };
    yellow: {
      lighter: string;
      darker: string;
    };
    brown: {
      lighter: string;
      veryLighter: string;
      darker: string;
    };
  }
}
