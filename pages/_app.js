import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, input, button{
    font-family: 'Roboto', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    background-color: #000;
    color: #fff;
  }

  .image-gallery{
    margin-top: 50px;
    //float: left;
    width: 100%;
    //margin: 0 7%;
  }
  #divContainer{
    width: min(90vw, 800px);
    margin: auto;
  }

  #logoTipo{
    width: 140px;
  }

  .jumbotron {
    text-align: center;
    background-color: blue;
    width: 100%;
    height: 50px;
    margin: auto;
    bottom: 0;
  }

  .copyright{
    margin-top: -30px;
  }

  div.social{
  margin-top: -0px;
  }
  div.social a{
    padding-right: 7px;
  }

`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
