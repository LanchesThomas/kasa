import Header from '../../components/Header'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { Link } from 'react-router-dom'
import resolution from '../../utils/resolution'

const ErrorDiv = styled.div``

const ContentErrorDiv = styled.div`
  padding: 30% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  @media only screen and (min-width: ${resolution.medium}) {
    padding: 15% 5%;
  }
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
    <ErrorDiv>
      <Header />
      <ContentErrorDiv>
        <Error404>404</Error404>
        <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
        <RedirectionLink to='/'>Retourner sur la page d'acceuil</RedirectionLink>
      </ContentErrorDiv>
    </ErrorDiv>
  )
}

export default Error
