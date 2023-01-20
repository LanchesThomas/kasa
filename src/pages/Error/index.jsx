import Header from '../../components/Header'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { Link } from 'react-router-dom'
import resolution from '../../utils/resolution'
import Footer from '../../components/Footer'

const Main = styled.main`
  height: 100vh;
  margin: auto;
  max-width: ${resolution.max};
  min-width: ${resolution.min};
`

const ContentErrorDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 150px 25px;
`
const Error404 = styled.p`
  color: ${colors.primary};
  text-align: center;
  font-weight: 700;
  font-size: 96px;
  @media only screen and (min-width: ${resolution.large}) {
    font-size: 288px;
  }
`

const ErrorText = styled.p`
  color: ${colors.primary};
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  @media only screen and (min-width: ${resolution.large}) {
    font-size: 36px;
  }
`
const RedirectionLink = styled(Link)`
  color: ${colors.primary};
  text-align: center;
  text-decoration: none;
  border-bottom: 1px solid red;
  margin-top: 50px;
  font-size: 14px;
  @media only screen and (min-width: ${resolution.large}) {
    font-size: 18px;
  }
`

const Error = () => {
  return (
    <div>
      <Header />
      <Main>
        <ContentErrorDiv>
          <Error404>404</Error404>
          <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
          <RedirectionLink to="/accueil">
            Retourner sur la page d'acceuil
          </RedirectionLink>
        </ContentErrorDiv>
      </Main>
      <Footer />
    </div>
  )
}

export default Error
