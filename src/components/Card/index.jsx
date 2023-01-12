import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardDiv = styled.li`
  list-style: none;
  width: 100%;
  height: 255px;
  border-radius: 10px;
  position: relative;
`

const CardCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  filter: brightness(70%);
  mix-blend-mode: darken;
`

const CardTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  position: absolute;
  left: 15px;
  bottom: 15px;
  max-width: 250px;
`

const Cardlink = styled(Link)``

const Card = ({ cover, title,id }) => {
  return (
    <CardDiv>
      <Cardlink to={`/logement/${id}`}>
        <CardCover src={cover} />
        <CardTitle>{title}</CardTitle>
      </Cardlink>
    </CardDiv>
  )
}

export default Card
