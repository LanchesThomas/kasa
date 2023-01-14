import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'
import resolution from '../../utils/resolution'

const ProfilDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
  @media only screen and (min-width: ${resolution.medium}) {
    height: 50%;
  }
`

const ProfilName = styled.p`
  width:30%;
  font-weight: 500;
  font-size: 12px;
  line-height: 142.6%;
  color: ${colors.primary};
  text-align: right;
  @media only screen and (min-width: ${resolution.medium}) {
    font-size: 18px;
  }
`
const ProfilPicture = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  object-fit: cover;
  @media only screen and (min-width: ${resolution.medium}) {
    height: 64px;
    width: 64px;
  }
`

const Profil = ({ host }) => {
  return (
    <ProfilDiv>
      <ProfilName>{host.name}</ProfilName>
      <ProfilPicture src={host.picture} />
    </ProfilDiv>
  )
}

export default Profil
