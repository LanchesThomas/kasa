import Logo from './logo'
import styled from 'styled-components'
import Nav from './nav'
import resolution from '../../utils/resolution'
import { fadeIn } from '../../utils/animation'

const HeaderDiv = styled.header`
  max-width: ${resolution.max};
  min-width: ${resolution.min};
  width:90%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px auto;
  padding: 0px 10px;
  animation: ${fadeIn} 0.5s ease-in-out;
  @media only screen and (min-width: ${resolution.large}){
    height: 68px
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
