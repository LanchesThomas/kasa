import Footer from '../../components/Footer'
import Header from '../../components/Header/index'
import styled from 'styled-components'
import resolution from '../../utils/resolution'
import HomePicture from '../../components/HomePicture'

const Main = styled.main`
  height: 100vh;
  margin: auto;
  max-width: ${resolution.max};
  min-width: ${resolution.min};
`

function Home() {
  return (
    <div>
      <Main>
        <Header />
        <HomePicture />
      </Main>
      <Footer />
    </div>
  )
}

export default Home
