import Header from '../../components/Header'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import resolution from '../../utils/resolution'
import AboutPicture from '../../components/AboutPicture'
import AboutDropdown from '../../components/AboutDropdown'
import { collapses } from '../../datas/collapses'

const Main = styled.main`
  margin: auto;
  max-width: ${resolution.max};
  min-width: ${resolution.min};
  width: 90%;
  position relative;
  padding-bottom: 200px;
`

const About = () => {
  return (
    <div>
      <Header />
      <Main>
        <AboutPicture />
        {collapses.map((collapse) => (
          <AboutDropdown title={collapse.title} content={collapse.content} />
        ))}
      </Main>
      <Footer />
    </div>
  )
}

export default About
