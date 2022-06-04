import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 body {
     background: ${({ theme }) => theme.body};
     color: ${({ theme }) => theme.text};
     transition: all 0.4s linear;
 };`;

export const lightTheme = {
  body: "#ffff",
  text: "#121212",
  backgroundcolor: "#ffff",
};

export const darkTheme = {
  body: "#121212",
  text: "#ffff",
  backgroundcolor: "#121212",
};
