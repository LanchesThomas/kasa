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
  `

  const Star = styled.img`
    width: 15px;
    height: 15px;
    @media only screen and (min-width: ${resolution.medium}) {
      width: 30px;
      height: 30px;
    }
  `

const Stars = () => {
  return (
    <StarsDiv>
      <Star src={StarImg} />
      <Star src={StarImg} />
      <Star src={StarImg} />
      <Star src={StarImg} />
      <Star src={StarImg} />
    </StarsDiv>
  )
}

export default Stars
