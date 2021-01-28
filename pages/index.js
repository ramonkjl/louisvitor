import Header from '../src/components/Header'
import styled from 'styled-components'
import Footer from '../src/components/Footer';
import Main from '../src/components/Main'
import Head from 'next/head';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div style={{ width: "min(90vw, 800px)", margin: "auto" }}>
        <Header />
        <Main />

      </div>
      <Footer />

    </>
  )
}