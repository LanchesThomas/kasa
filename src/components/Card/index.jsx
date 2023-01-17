import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { fadeIn, translate } from '../../utils/animation'
import resolution from '../../utils/resolution'

const CardDiv = styled.li`
list-style: none;
width: 100%;
height: 255px;
border-radius: 10px;
position: relative;
margin: 15px auto;
transition: transform 0.5s ease-in-out;
animation: ${fadeIn} 1s ease-in-out, ${translate} 1.5s ease-in-out;
@media only screen and (min-width: ${resolution.medium}) {
  width: 90%;
margin: 20px auto;
}
&:hover {
  transform: scale(1.03);
    & img {
      filter: brightness(100%)
    } 

    & h2 {
      font-size: 20px;
      background: white;
      opacity: 0.7;
      color:black;
      border-radius: 5px;
      padding: 5px;
      font-weight: 600;
    }
}

`

const CardCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.2s ease-in-out;
  
`

const CardTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  position: absolute;
  left: 15px;
  bottom: 15px;
  max-width: 250px;
  transition: 0.2s ease-in-out;
`

const Cardlink = styled(Link)``

const Card = ({ cover, title, id }) => {

  return (

    <CardDiv className={`card--${id}`}>
      <Cardlink to={`/logement/${id}`}>
        <CardCover src={cover} />
        <CardTitle>{title}</CardTitle>
      </Cardlink>
    </CardDiv>
  )
}

export default Card
