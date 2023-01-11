import Header from '../../components/Header'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import resolution from '../../utils/resolution'
import AboutPicture from '../../components/AboutPicture'
import AboutDropdown from '../../components/AboutDropdown'

const Main = styled.main`
  height: 100vh;
  margin: auto;
  max-width: ${resolution.max};
  min-width: ${resolution.min};
  width: 90%;
`

const index = () => {
  return (
    <div>
        <Header />
      <Main>
        <AboutPicture />
        <AboutDropdown />
      </Main>
      <Footer />
    </div>
  )
}

export default index
