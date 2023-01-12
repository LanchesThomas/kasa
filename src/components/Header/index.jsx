import Logo from './logo'
import styled from 'styled-components'
import Nav from './nav'
import resolution from '../../utils/resolution'

const HeaderDiv = styled.header`
  max-width: ${resolution.max};
  min-width: ${resolution.min};
  width:100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px auto;
  padding: 0px 10px;
  
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
