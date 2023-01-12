import Footer from '../../components/Footer'
import Header from '../../components/Header/index'
import styled from 'styled-components'
import resolution from '../../utils/resolution'
import HomePicture from '../../components/HomePicture'
import Card from '../../components/Card'
import LogementsData from '../../datas/logements.json'

const Main = styled.main`
  margin: auto;
  max-width: ${resolution.max};
  min-width: ${resolution.min};
  width: 90%;
  position relative;
  padding-bottom: 200px;
`
const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 35px;
  @media only screen and (min-width: ${resolution.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: ${resolution.large}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

function Home() {
  return (
    <div>
        <Header />
      <Main>
        <HomePicture />

        <CardContainer>
          {LogementsData.map((logement) => (
            <Card
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
              pictures={logement.pictures}
              description={logement.description}
              hostName={logement.host.name}
              hostPicture={logement.host.picture}
              rating={logement.rating}
              location={logement.location}
              equipments={logement.equipments}
              tags={logement.tags}
            />
          ))}
        </CardContainer>
      </Main>
      <Footer />
    </div>
  )
}

export default Home
