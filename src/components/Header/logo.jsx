import HeaderLogo from '../../assets/Header-Logo/logo.png'
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
  width: 120px;
  height: 85%;
  @media only screen and (min-width: ${resolution.large}) {
    width: 160px;
  }
`

const Logo = () => {
  return (
    <LogoDiv href="/">
      <LogoImg src={HeaderLogo} alt="Logo" />

    </LogoDiv>
  )
}

export default Logo
