import HeaderLogo from '../../assets/logo.png'
import styled from 'styled-components'
import resolution from '../../utils/resolution'

const LogoDiv = styled.a`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: flex-end;
  gap: 3px;
`

const LogoImg = styled.img`
  width: 150px;
  height: 100%;
  @media only screen and (min-width: ${resolution.medium}) {
    width: 200px;
  }
`

const Logo = () => {
  return (
    <LogoDiv href="/accueil">
      <LogoImg src={HeaderLogo} alt="Logo" />
    </LogoDiv>
  )
}

export default Logo
