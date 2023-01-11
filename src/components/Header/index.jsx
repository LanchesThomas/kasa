import Logo from './logo'
import styled from 'styled-components'
import Nav from './nav'
import resolution from '../../utils/resolution'

const HeaderDiv = styled.div`
  max-width: ${resolution.max};
  min-width: ${resolution.min};
  width:90%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0px 10px;
  @media only screen and (min-width: ${resolution.medium}){

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
