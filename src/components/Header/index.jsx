import Logo from "./logo"
import styled from "styled-components"
import Nav from "./nav"
import resolution from "../../utils/resolution"

const HeaderDiv = styled.div`
width: 95%;
height: 43px;
display: flex;
justify-content: space-between;
padding: 0px 10px;
margin: auto;
@media only screen and (min-width: ${resolution.medium}) {
    height: 54px;
}
`


const Header = () => {
  return (
    <HeaderDiv>
        <Logo />
        <Nav />
    </HeaderDiv>
  )
}

export default Header
