import LetterK from '../../assets/Header-Logo/VectorK.png'
import LetterHome from '../../assets/Header-Logo/VectorHome.png'
import LetterS from '../../assets/Header-Logo/VectorS.png'
import LetterA from '../../assets/Header-Logo/VectorA.png'
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
  width: 30px;
  height: 85%;
  ${(props) => (props.$LetterK ? 'height: 100%' : '')};
  @media only screen and (min-width: ${resolution.medium}) {
    width: 50px;
  }
`

const Logo = () => {
  return (
    <LogoDiv href="/">
      <LogoImg $LetterK src={LetterK} alt="Logo" />
      <LogoImg src={LetterHome} alt="Logo" />
      <LogoImg src={LetterS} alt="Logo" />
      <LogoImg src={LetterA} alt="Logo" />
    </LogoDiv>
  )
}

export default Logo
