import React from 'react'
import styled from 'styled-components'
import resolution from '../../utils/resolution'
import StarImg from '../../assets/star.png'

const StarsDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 5px;
  @media only screen and (min-width: ${resolution.medium}) {
    height: 50%;
    justify-content: flex-end;
    align-items: center;
  }
  & .stars__inactive {
    opacity: 0.3;
  }
`

const Star = styled.img`
  width: 15px;
  height: 15px;
  @media only screen and (min-width: ${resolution.medium}) {
    width: 30px;
    height: 30px;
  }
`

const Stars = ({ rating }) => {
  const starsArray = []
  const starMax = 5
  for (let i = 0; i < starMax; i++) {
    starsArray.push(
      <Star
        key={`star ${i}`}
        src={StarImg}
        className={i < rating ? 'stars__active' : 'stars__inactive'}
      />
    )
  }

  return <StarsDiv>{starsArray}</StarsDiv>
}

export default Stars
