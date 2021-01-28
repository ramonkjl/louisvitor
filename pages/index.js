import Header from '../src/components/Header'
import styled from 'styled-components'
import Footer from '../src/components/Footer';
import Main from '../src/components/Main'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <>
      <div style={{ width: "min(90vw, 800px)", margin: "auto" }}>
        <Header />
        <Main />
        
      </div>
      <Footer />
      
    </>
  )
}