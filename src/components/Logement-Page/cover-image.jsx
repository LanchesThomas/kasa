import React from 'react'
import styled from 'styled-components'
import resolution from '../../utils/resolution'

const Cover = styled.img`
    width: 100%;
    height: 255px;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 10px;
    @media only screen and (min-width: ${resolution.medium}) {
      height: 415px;
    }
  `

const CoverImg = ({pictures}) => {
  return (
    <div>
      <Cover src={pictures[0]} />
    </div>
  )
}

export default CoverImg
