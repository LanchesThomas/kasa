import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Colors from '../../utils/colors'
import colors from '../../utils/colors'
import resolution from '../../utils/resolution'

const NavDiv = styled.div`
height: 100%;
width: 45%;
justify-content: flex-end;
display: flex;
align-items: center;
`

const NavUl = styled.ul`
padding: 0px;
display: flex;
justify-content: center;
width: 50%;
gap: 10%;
white-space: nowrap;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.primary};
  font-weight: 500;
  font-size: 12px;
  @media only screen and (min-width: ${resolution.medium}) {
    font-size: 18px;
  }
  @media only screen and (min-width: ${resolution.large}) {
    font-size: 24px;
  }
`
const NavList = styled.li`
list-style: none;
border-bottom: 2px solid transparent;
&:hover {
    border-bottom: 2px solid ${colors.primary}
}
`

const Nav = () => {
  return (
    <NavDiv>
      <NavUl>
        <NavList>
          <NavLink to="/">Accueil</NavLink>
        </NavList>
        <NavList>
          <NavLink to="/about">A Propos</NavLink>
        </NavList>
      </NavUl>
    </NavDiv>
  )
}

export default Nav
