import LetterK from '../../assets/VectorK.png'
import LetterHome from '../../assets/VectorHome.png'
import LetterS from '../../assets/VectorS.png'
import LetterA from '../../assets/VectorA.png'
import styled from 'styled-components'

const LogoDiv = styled.a`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: flex-end;
  gap: 5px;
`

const LogoImg = styled.img`
  height: 75%;
  ${(props) => (props.$LetterK ? 'height: 100%' : '')}
`

const Logo = () => {
  return (
    <LogoDiv href='/'>
      <LogoImg  $LetterK src={LetterK} alt="Logo" />
      <LogoImg src={LetterHome} alt="Logo" />
      <LogoImg src={LetterS} alt="Logo" />
      <LogoImg src={LetterA} alt="Logo" />
    </LogoDiv>
  )
}

export default Logo
