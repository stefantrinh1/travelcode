import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${({ theme }) => css`
  html {
    height: 100%;

    body {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0;

      #root {
        background: ${theme.colors.background};
        color: ${theme.colors.black};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        height: 100%;
        padding: 15px;
      }
    }
  }
`}
`

export const theme = {
  primary: `rgb(0, 86, 125)`,
  secondary: `rgb(202, 54, 37)`,
  tertiary: `rgb(202, 54, 37)`,
  dark: `#231f20`,
  light: `rgb(196, 191, 182)`,

  //optional extras but not really used yet
  sizes: {
    XXS: `0.25rem`,
    XS: `0.5rem`,
    S: `0.75rem`,
    M: `1rem`,
    L: `1.25rem`,
    XL: `1.5rem`,
    XXL: `2rem`,
    XXXL: `4rem`,
  },
  fonts: {
    bodyFont: `"Rubik", sans-serif;`,
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    desktopL: '1440px',
  },
  custom: {
    navHeight: '95.88px',
    navHeightDesktop: '200px',
  },
}
