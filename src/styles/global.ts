import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;

    font-family: ${({ theme }) => theme.font.robotoFlex}, "Times New Roman", serif;
    color: ${({ theme }) => theme.colors.dark};
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  a {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }


  .Toastify__toast-container {
    margin-top: 75px;
}
`;
