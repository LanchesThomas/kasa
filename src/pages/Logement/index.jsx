import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import LogementsData from '../../datas/logements.json'
import styled from 'styled-components'
import resolution from '../../utils/resolution'
import Profil from '../../components/Logement-Page/profil'
import Place from '../../components/Logement-Page/place'
import Stars from '../../components/Logement-Page/stars'
import CoverImg from '../../components/Logement-Page/cover-image'
import AboutDropdown from '../../components/AboutDropdown/'
import Error from '../Error'
import { Navigate } from 'react-router-dom'

const Logement = () => {
  const { id } = useParams()
  const logement = LogementsData.find((logement) => logement.id === id)

  const MainDiv = styled.main`
  margin: auto;
  max-width: ${resolution.max};
  min-width: ${resolution.min};
  width: 90%;
  position relative;
  margin-bottom: 100px;
  `

  const ContentDiv = styled.div`
    @media only screen and (min-width: ${resolution.medium}) {
      display: flex;
    }
  `

  const UserDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    @media only screen and (min-width: ${resolution.medium}) {
      width: 50%;
      align-items: flex-start;
      flex-direction: column-reverse;
    }
  `

  const AboutDiv = styled.div`
    @media only screen and (min-width: ${resolution.medium}) {
      display: flex;
      gap: 30px;
    }
  `

  const ListEquipments = styled.li`
    list-style: none;
  `

  return logement ? (
    <div>
      <Header />
      <MainDiv>
        <CoverImg pictures={logement.pictures} />
        <ContentDiv>
          <Place
            id={id}
            title={logement.title}
            location={logement.location}
            tags={logement.tags}
          />
          <UserDiv>
            <Stars rating={logement.rating} />
            <Profil host={logement.host} />
          </UserDiv>
        </ContentDiv>
        <AboutDiv>
          <AboutDropdown title={'Description'} content={logement.description} />
          <AboutDropdown
            title={'Equipements'}
            content={logement.equipments.map((equipment) => (
              <ListEquipments key={`${equipment}-${id}`}>
                {equipment}
              </ListEquipments>
            ))}
          />
        </AboutDiv>
      </MainDiv>
      <Footer />
    </div>
  ) : (
    <Navigate to="/error" replace={<Error />} />
  )
}

export default Logement
