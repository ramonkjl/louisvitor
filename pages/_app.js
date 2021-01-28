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
  }

  .image-gallery{
    margin-top: 20px;
    //float: left;
    width: 100%;
    //margin: 0 7%;
  }

  #divContainer{
    @media screen and (max-width: 375px){
      overflow: auto;
      
    }
    @media screen and (max-width: 414px){
      overflow: auto;
      
    }
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
