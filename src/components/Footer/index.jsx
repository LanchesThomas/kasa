import styled from "styled-components"
import LetterK from '../../assets/Footer-Logo/VectorK.png'
import LetterHome from '../../assets/Footer-Logo/VectorHome.png'
import LetterS from '../../assets/Footer-Logo/VectorS.png'
import LetterA from '../../assets/Footer-Logo/VectorA.png'
import resolution from "../../utils/resolution"

const DivFooter = styled.footer`
background-color: black;
height: 209px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 50px;
margin-top: 30px;
`
const DivLogo = styled.div`
display: flex;
align-items: flex-end;
gap: 5px;
`
const LogoFooter = styled.img`
height: 28px;
${(props) => props.$LetterK ? "height: 35px" : ""}

`

const RightsFooter = styled.p`
color: white;
font-size: 12px;
@media only screen and (min-width: ${resolution.medium}) {
    font-size: 18px;
}
`

const Footer = () => {
  return (
    <DivFooter>
      <DivLogo>
        <LogoFooter $LetterK src={LetterK}/>
        <LogoFooter src={LetterHome}/>
        <LogoFooter src={LetterS}/>
        <LogoFooter src={LetterA}/>
      </DivLogo>
      <RightsFooter>© 2020 Kasa. All rights reserved</RightsFooter>
    </DivFooter>
  )
}

export default Footer
